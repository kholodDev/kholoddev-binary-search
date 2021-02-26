# Binary search

Binary search for an ascending ordered array of numbers

## Install

```console
$ npm i @kholoddev/binary/search
```

## Syntax

```js
/**
 * @param {number[]} array - Asc ordered array of numbers
 * @param {number} search - Sought number
 * 
 * @returns {number|null} - Index of the sought number 
 */
const result = binarySearch(array, search)
```

## Example

```js
import { binarySearch } from '@kholoddev/binary-search'

const result = binarySearch([10, 21, 75, 79, 81], 1000) // => null
const result = binarySearch([10, 21, 75, 79, 81], 'hello') // => null
const result = binarySearch([], 1000) // => null
const result = binarySearch([10, 21, 75, 79, 81]) // => null
const result = binarySearch([]) // => null
const result = binarySearch('hello') // => null
const result = binarySearch() // => null

const result = binarySearch([10, 21, 75, 79, 81], 75) // => 2
const result = binarySearch([10, 21, 75, 79, 81], 10) // => 0
```