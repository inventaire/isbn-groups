# isbn-groups
country and language data on ISBN groups

**this is not perfect and new ISBN groups are created regularly: your help is welcome to improve the countries/languages matching, and keep it all up-to-date!**

## Installation
```sh
$ npm install isbn-groups
```

## Usage

Example using `isbn-groups` and [`isbn3`](https://www.npmjs.com/package/isbn3) for ISBN parsing

```js
const { parse } = require('isbn3')
const isbnGroups = require('isbn-groups')
```
* example 1
```js
const isbn = '9782707301529'
const { prefix, group } = parse(isbn)
// prefix: '978'
// group: '2'

isbnGroups[prefix][group]
// => { label: 'French', lang: 'fr' }
```
* example 2
```js
const isbn = '9789953211206'
const { prefix, group } = parse(isbn)
// prefix: '978'
// group: '9953'

isbnGroups[prefix][group]
// => { label: 'Lebanon', lang: 'ar' }

```

## See Also
* [isbn3](https://www.npmjs.com/package/isbn3): ISBN parsing, validation, and formatting utilities
* [wikidata-lang](https://www.npmjs.com/package/wikidata-lang):  mappings between 2-letters language codes (ISO 639-1) and Wikidata ids
