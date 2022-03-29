import Head from 'next/head'
import fetch from 'cross-fetch'
import Link from 'next/link'
import type { FunctionComponent } from 'react'
import type { ReadonlyDeep, StringKeyOf } from 'type-fest'
import { Fragment } from 'react'
import type { Rank } from '../schema/Bilibili/rank'
import { parseBiliRanks } from '../schema/Bilibili/rank'

export type BilibiliProps = { ranks: Record<BilibiliCategory, Rank> }

function isPromiseFulfilledResult<T>(
    result: ReadonlyDeep<PromiseSettledResult<T>>,
): result is ReadonlyDeep<PromiseFulfilledResult<T>> {
    return result.status === 'fulfilled'
}

function getFullfilledResults<T>(results: ReadonlyDeep<Array<PromiseSettledResult<T>>>) {
    return results.filter(isPromiseFulfilledResult)
}

export const getBilibiliStaticProps = async (): Promise<ReadonlyDeep<BilibiliProps>> => {
    const results = await Promise.allSettled(
        bilibiliCategories.map(async (category) => {
            const rank = await getRankingByCategory(category)
            return [category, rank] as const
        }),
    )
    const rankResults = getFullfilledResults(results).map(({ value }) => value)
    return { ranks: Object.fromEntries(rankResults) as Record<BilibiliCategory, Rank> }
}

const BilibiliVideos: FunctionComponent<ReadonlyDeep<Rank>> = (rank) => {
    return (
        <>
            {rank.data.map(({ title, bvid }, index) => (
                <article key={index}>
                    {/*<a key={index} href={`https://www.bilibili.com/video/${bvid}`} target={"_blank"}>{title}</a>*/}
                    <Link href={`https://www.bilibili.com/video/${bvid}`}>{title}</Link>
                </article>
            ))}
        </>
    )
}

const Bilibili: FunctionComponent<BilibiliProps> = ({ ranks }) => (
    <div className="container">
        <Head>
            <title>Bilibili</title>
        </Head>

        <main>
            <h1 className="title">Bilibili</h1>
            {(Object.keys(ranks) as BilibiliCategory[]).map((category: BilibiliCategory) =>
                ranks?.[category]?.data ? (
                    <Fragment key={category}>
                        <h2 key={category}>{category}</h2>
                        <BilibiliVideos data={ranks[category].data} />
                    </Fragment>
                ) : null,
            )}
        </main>
    </div>
)

const bilibiliCategoryMap = {
    knowledge: 36,
} as const
type BilibiliCategory = StringKeyOf<typeof bilibiliCategoryMap>
const bilibiliCategories: ReadonlyDeep<BilibiliCategory[]> = Object.keys(bilibiliCategoryMap) as BilibiliCategory[]

const BilibiliApiBaseUri = 'http://api.bilibili.com' as const

/**
 * @see https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/ranking%26dynamic/ranking.md
 */
const getRankingByCategory = async (category: BilibiliCategory): Promise<ReadonlyDeep<Rank>> => {
    const searchParams = new URLSearchParams({
        rid: bilibiliCategoryMap[category].toString(),
        day: '3',
    })
    const response = await fetch(`${BilibiliApiBaseUri}/x/web-interface/ranking/region?${searchParams}`, {
        redirect: 'follow',
    })
    const json = await response.text()
    return parseBiliRanks(json)
}

export default Bilibili
