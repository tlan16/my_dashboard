import Head from 'next/head'
import fetch from 'cross-fetch'
import Link from 'next/link'
import type { FunctionComponent } from 'react'
import type { Rank } from '../schema/Bilibili/rank'
import { parseBiliRanks } from '../schema/Bilibili/rank'

export type BilibiliProps = Rank

export const getBilibiliStaticProps = async (): Promise<BilibiliProps> => {
    const response = await fetch('http://api.bilibili.com/x/web-interface/ranking/region?rid=36&day=3', {
        redirect: 'follow',
    })
    const json = await response.text()
    return parseBiliRanks(json)
}

const Bilibili: FunctionComponent<BilibiliProps> = ({ data }) => (
    <div className="container">
        <Head>
            <title>Bilibili</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <h1 className="title">Bilibili</h1>
            <>
                {data.map(({ title, bvid }, index) => (
                    <article key={index}>
                        {/*<a key={index} href={`https://www.bilibili.com/video/${bvid}`} target={"_blank"}>{title}</a>*/}
                        <Link href={`https://www.bilibili.com/video/${bvid}`}>{title}</Link>
                    </article>
                ))}
            </>
        </main>
    </div>
)

export default Bilibili
