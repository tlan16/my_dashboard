import Head from 'next/head'
import fetch from 'cross-fetch'
import type { InferGetServerSidePropsType, NextPage } from 'next'
import Link from 'next/link'
import type { ReadonlyDeep } from 'type-fest'

interface Rank {
    data: {
        title: string
        bvid: `BV${string}`
    }[]
}

export async function getStaticProps(): Promise<ReadonlyDeep<{ props: Rank }>> {
    const response = await fetch('http://api.bilibili.com/x/web-interface/ranking/region?rid=36&day=3', {
        redirect: 'follow',
    })
    const data: Rank = await response.json()
    return {
        props: data,
    }
}

const Bilibili: NextPage<Rank> = ({ data }: InferGetServerSidePropsType<typeof getStaticProps>) => (
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
