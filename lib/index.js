/* global module */

function search(
    array,
    searchElement,
    arrayIndicesInterval = {
        left: 0,
        right: array.length - 1,
    },
) {
    if (array.length === 1) {
        if (array[0] === searchElement) {
            return arrayIndicesInterval.left
        }
        return null
    }

    const middleIndexOfArray = Math.ceil(array.length / 2)

    let nextArray = []
    const nextArrayIndicesInterval = {
        left: null,
        right: null,
    }

    if (searchElement < array[middleIndexOfArray]) {
        nextArrayIndicesInterval.left = arrayIndicesInterval.left
        nextArrayIndicesInterval.right = arrayIndicesInterval.left + middleIndexOfArray - 1
        nextArray = array.slice(0, middleIndexOfArray)
    } else {
        nextArrayIndicesInterval.left = arrayIndicesInterval.left + middleIndexOfArray
        nextArrayIndicesInterval.right = arrayIndicesInterval.right
        nextArray = array.slice(middleIndexOfArray)
    }

    return search(nextArray, searchElement, nextArrayIndicesInterval)
}

function binarySearch(array = [], searchElement = null) {
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

module.exports = { binarySearch }
