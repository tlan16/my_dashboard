import { AssertionError } from 'assert'
import type { JTDSchemaType } from 'ajv/dist/jtd'
import ajvInstance from '../avj'

// type Bvid = `BV${string}` // TODO: how to do literal type with ajv

export interface Rank {
    data: {
        title: string
        bvid: string
    }[]
}

const schema: JTDSchemaType<Rank> = {
    properties: {
        data: {
            elements: {
                properties: {
                    title: { type: 'string' },
                    bvid: { type: 'string' },
                },
                additionalProperties: true,
            },
        },
    },
    additionalProperties: true,
}
const parse = ajvInstance.compileParser(schema)

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
