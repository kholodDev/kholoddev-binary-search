import { binarySearch } from './index'

test('Correct result with invalid parameters', () => {
    // @ts-expect-error
    expect(binarySearch()).toBeNull()
    // @ts-expect-error
    expect(binarySearch([])).toBeNull()
    // @ts-expect-error
    expect(binarySearch('test')).toBeNull()
    // @ts-expect-error
    expect(binarySearch([1, 2, 3, 4, 5])).toBeNull()
    expect(binarySearch([1, 2, 3, 4, 5], 1000)).toBeNull()
    // @ts-expect-error
    expect(binarySearch([1, 2, 3, 4, 5], 'test')).toBeNull()
})

test('Correct search', () => {
    expect(binarySearch([1, 12, 13, 41, 87], 1)).toBe(0)
    expect(binarySearch([1, 12, 13, 41, 87], 12)).toBe(1)
    expect(binarySearch([1, 12, 13, 41, 87], 13)).toBe(2)
    expect(binarySearch([1, 12, 13, 41, 87], 41)).toBe(3)
    expect(binarySearch([1, 12, 13, 41, 87], 87)).toBe(4)
})
