import type { NextPage, GetStaticProps } from 'next'
import type { BilibiliProps } from '../components/Bilibili'
import Bilibili, { getBilibiliStaticProps } from '../components/Bilibili'

interface HomeProps {
    bilibili: BilibiliProps
}

const Home: NextPage<HomeProps> = ({ bilibili: { data: bilibili } }) => <Bilibili data={bilibili} />

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const bilibili = await getBilibiliStaticProps()
    return {
        props: {
            bilibili,
        },
    }
}

export default Home
