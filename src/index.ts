type Interval = {
    left: number;
    right: number;
}

function search(
    array: number[],
    searchElement: number,
    interval: Interval = {
        left: 0,
        right: array.length - 1,
    },
): number | null {
    if (array.length === 1) {
        if (array[0] === searchElement) {
            return interval.left
        }
        return null
    }

    const middleIndexOfArray: number = Math.ceil(array.length / 2)

    let nextArray: number[] = []
    const nextInterval: Interval = {
        left: 0,
        right: 0,
    }

    if (searchElement < array[middleIndexOfArray]) {
        nextInterval.left = interval.left
        nextInterval.right = interval.left + middleIndexOfArray - 1
        nextArray = array.slice(0, middleIndexOfArray)
    } else {
        nextInterval.left = interval.left + middleIndexOfArray
        nextInterval.right = interval.right
        nextArray = array.slice(middleIndexOfArray)
    }

    return search(nextArray, searchElement, nextInterval)
}

export function binarySearch(array: number[], searchElement: number): number | null {
    if (
        !Array.isArray(array) ||
        !array.length ||
        searchElement === null ||
        typeof searchElement !== 'number'
    ) {
        return null
    }

    return search(array, searchElement)
}

export default { binarySearch }
