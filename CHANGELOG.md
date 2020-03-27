# CHANGELOG
*versions follow [SemVer](http://semver.org)*

## 2.0.0 - 2020-03-27
* **BREAKING CHANGES**: dropping labels (redondant with [isbn3](https://npmjs.com/package/isbn3) own data): now `require('isbn-groups')[prefix][group]` directly returns a language code
