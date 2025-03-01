# CHANGELOG

## Version 2

- v2.3.1
  - update packages
  - Fixes Issue [#39](https://github.com/charlesLoder/hebrew-transliteration/issues/39)

- v2.3.0
  - rewrite the `remove` function to allow for greater control of which character are removed

- v2.2.4
  - update packages for improved `strict` handling

- v2.2.3
  - update packages
  - update imports from havarotjs

- v2.2.2
  - fix export of package.json

- v2.2.1
  - fix broken exports and type

- v2.2.0
  - fix DN with Latin chars (Issue #26)
  - remove build scripts so no longer bundled as one file
  - add premade schemas (Issue #25)

- v2.1.2
  - update havarotjs and other packages

- v2.1.1
  - update havarotjs and other packages

- v2.1.0:
  - update havarotjs and other packages
  - new update improves how text w/o niqqud is handled
  - Schema now gets a new syllabification option

- v2.0.8:
  - update havarotjs and other packages

- v2.0.7:
  - still transliterates if word has taamim, but not niqqud (i.e. vowels)

- v2.0.6:
  - add check if word is not Hebrew

- v2.0.5:
  - update havarotjs and other packages
  - add check if word is not Hebrew

- v2.0.4: update havarotjs and other packages

- v2.0.3: update havarotjs and other packages

- v2.0.2: update havarotjs

- v2.0.1: reduce build size

- v2.0.0: complete rewrite
  - uses `havarotjs` for syllabification
  - use `Schema()` for defining custom transliteration schemas

## Version 1

- v1.3.2: fixed incorrect qamets qatan before qamets chatuph
- v1.3.1: fixed Divine Name not correct using simple transliteration
- v1.3.0: added `removeShinDot` and `removeSinDot` option to `remove()` for more granular control
- v1.2.0:
  - rewrote in in TypeScript
  - added `isSimple` option to `transliterate()` for SBL's General Purpose Style
- v1.1.0: in `transliterate()` the `options` was changed from the misspelled `isSeqeunced` to `isSequenced`.
