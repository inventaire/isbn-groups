# ISBN groups
country and language data on ISBN groups

**WIP: your help is welcome to improve the countries/languages matching!**

## Installation
```sh
$ npm install --save isbn-groups
```

## Usage

Example using `isbn-groups` and [`isbn2`](https://www.npmjs.com/package/isbn2) for ISBN parsing

```js
const parser = require('isbn2').ISBN.parse
const isbnGroups = require('isbn-groups')
```
* example 1
```js
const isbn = '9782707301529'
const { prefix, group } = parser(isbn).codes
// prefix: '978'
// group: '2'

isbnGroups[prefix][group]
// => { label: 'French', lang: 'fr' }
```
* example 2
```js
const isbn = '9789953211206'
const { prefix, group } = parser(isbnB).codes
// prefix: '978'
// group: '9953'

isbnGroups[prefix][group]
// => { label: 'Lebanon', lang: 'ar' }

```

## See Also
* [isbn2](https://www.npmjs.com/package/isbn2): ISBN parsing, validation, and formatting utilities
