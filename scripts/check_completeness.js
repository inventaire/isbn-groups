#!/usr/bin/env node
const index = require('../index')
const groups = require('isbn3/lib/groups')
const { yellow, red, grey } = require('tiny-chalk')

const missingData = []
const missingLang = []
const complete = []

Object.keys(groups).forEach(groupKey => {
  const [ prefix, group ] = groupKey.split('-')
  const { name } = groups[groupKey]
  const lang = index[prefix][group]
  if (lang === undefined) missingData.push({ groupKey, name })
  else if (lang === null) missingLang.push({ groupKey, name })
  else complete.push({ groupKey, lang})
})

complete.forEach(({ groupKey, lang }) => {
  console.log(grey(`${groupKey.padEnd(9)} ${lang}`))
})

missingLang.forEach(({ groupKey, name }) => {
  console.error(grey(groupKey.padEnd(9)), yellow('missing lang'), grey(name))
})

missingData.forEach(({ groupKey, name }) => {
  console.error(grey(groupKey.padEnd(9)), red('missing isbn group'), name)
})
