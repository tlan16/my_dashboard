import type { ReadonlyDeep, StringKeyOf } from 'type-fest'

export type BilibiliCategory = StringKeyOf<typeof bilibiliCategoryMap>

export const bilibiliCategoryMap = {
    knowledge: 36,
} as const

export const bilibiliCategories: ReadonlyDeep<BilibiliCategory[]> = Object.keys(
    bilibiliCategoryMap,
) as BilibiliCategory[]
