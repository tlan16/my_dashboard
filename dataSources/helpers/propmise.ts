import type { ReadonlyDeep } from 'type-fest'

function isPromiseFulfilledResult<T>(
    result: ReadonlyDeep<PromiseSettledResult<T>>,
): result is ReadonlyDeep<PromiseFulfilledResult<T>> {
    return result.status === 'fulfilled'
}

export function getFulfilledResults<T>(
    results: ReadonlyDeep<Array<PromiseSettledResult<T>>>,
): ReadonlyDeep<PromiseFulfilledResult<T>[]> {
    return results.filter(isPromiseFulfilledResult)
}
