import type { JTDSchemaType } from 'ajv/dist/jtd'

// type Bvid = `BV${string}` // TODO: how to do literal type with ajv

export interface Rank {
    data: {
        title: string
        subtitle: string
        author: string
        description: string
        bvid: string
    }[]
}

export const rankingSchema: JTDSchemaType<Rank> = {
    properties: {
        data: {
            elements: {
                properties: {
                    title: { type: 'string' },
                    subtitle: { type: 'string' },
                    author: { type: 'string' },
                    description: { type: 'string' },
                    bvid: { type: 'string' },
                },
                additionalProperties: true,
            },
        },
    },
    additionalProperties: true,
}
