import type { NextPage } from 'next'
import type { ReadonlyDeep } from 'type-fest'
import type { BilibiliProps } from '../components/Bilibili'
import Bilibili, { getBilibiliStaticProps } from '../components/Bilibili'

interface HomeProps {
    bilibili: BilibiliProps
}

const Home: NextPage<HomeProps> = ({ bilibili }) => <Bilibili ranks={bilibili.ranks} />

export const getStaticProps = async (): Promise<ReadonlyDeep<{ props: HomeProps }>> => {
    const bilibili = await getBilibiliStaticProps()
    return {
        props: {
            bilibili,
        },
    }
}

export default Home
