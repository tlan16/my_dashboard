import { AssertionError } from 'assert'
import type { ReadonlyDeep } from 'type-fest'
import fetch from 'cross-fetch'
import ajvInstance from '../avj'
import type { BilibiliCategory } from './category'
import { bilibiliCategoryMap } from './category'
import { BilibiliApiBaseUri } from './client'
import type { Rank } from './schema/ranking'
import { rankingSchema } from './schema/ranking'

/**
 * @see https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/ranking%26dynamic/ranking.md
 */
export const getRankingByCategory = async (category: BilibiliCategory): Promise<ReadonlyDeep<Rank>> => {
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

const parse = ajvInstance.compileParser(rankingSchema)

export const parseBiliRanks = (json: string): Rank => {
    const data = parse(json) // MyData | undefined
    if (data === undefined) {
        throw new AssertionError({
            message: parse.message,
            actual: JSON.parse(json),
        })
    } else {
        return data
    }
}
