import Head from 'next/head'
import Link from 'next/link'
import type { FunctionComponent } from 'react'
import { Fragment } from 'react'
import type { ReadonlyDeep } from 'type-fest'
import type { BilibiliCategory } from '../dataSources/bilibili/category'
import { bilibiliCategories } from '../dataSources/bilibili/category'
import type { Rank } from '../dataSources/bilibili/schema/ranking'
import { getRankingByCategory } from '../dataSources/bilibili/ranking'
import { getFulfilledResults } from '../dataSources/helpers/propmise'

export type BilibiliProps = { ranks: Record<BilibiliCategory, Rank> }

export const getBilibiliStaticProps = async (): Promise<ReadonlyDeep<BilibiliProps>> => {
    const results = await Promise.allSettled(
        bilibiliCategories.map(async (category) => {
            const rank = await getRankingByCategory(category)
            return [category, rank] as const
        }),
    )
    const rankResults = getFulfilledResults(results).map(({ value }) => value)
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

export default Bilibili
