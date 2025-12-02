# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-12-02)

<section class="features">

### Features

-   [`375104a`](https://github.com/stdlib-js/stdlib/commit/375104a14f1108d70a4c41972ed0502b84b5c124) - add `wasm/types`
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`88fe77a`](https://github.com/stdlib-js/stdlib/commit/88fe77a2f059149b803f51d1a787894c7670798b) - **docs:** fix example code in namespace TypeScript declarations _(by Philipp Burckhardt)_
-   [`818054a`](https://github.com/stdlib-js/stdlib/commit/818054a494c75b6cdbc7b9e33891a5e08f2c8031) - **docs:** fix TSDoc return annotation values and example code _(by Philipp Burckhardt)_
-   [`7f55434`](https://github.com/stdlib-js/stdlib/commit/7f554349e50fc601e7ab4206ba1da0eceae93518) - **docs:** fix TSDoc comments example code and return annotation values _(by Philipp Burckhardt)_
-   [`f344466`](https://github.com/stdlib-js/stdlib/commit/f344466c6dcfb8f52d7f3148acaadd52772938da) - **test:** use .strictEqual() instead of .equal() and fix lint errors _(by Philipp Burckhardt)_
-   [`153c9c1`](https://github.com/stdlib-js/stdlib/commit/153c9c19e7e5bc138e18500cea598365d6df55d8) - **style:** fix indentation in JSON files _(by Philipp Burckhardt)_
-   [`c1e2833`](https://github.com/stdlib-js/stdlib/commit/c1e28334d789719eb9910e66e5237ed526179747) - **refactor:** use types defined in `wasm/types` _(by Athan Reines)_
-   [`375104a`](https://github.com/stdlib-js/stdlib/commit/375104a14f1108d70a4c41972ed0502b84b5c124) - **feat:** add `wasm/types` _(by Athan Reines)_
-   [`b6a2b0b`](https://github.com/stdlib-js/stdlib/commit/b6a2b0b27dc8cc1e9fc02d9679a3ce468cf49b9d) - **docs:** update namespace table of contents [(#3192)](https://github.com/stdlib-js/stdlib/pull/3192) _(by stdlib-bot, Philipp Burckhardt)_
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - **feat:** update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190) _(by stdlib-bot, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2024-11-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2024-11-05)

<section class="features">

### Features

-   [`db91373`](https://github.com/stdlib-js/stdlib/commit/db91373ac57c11965c341e4d802aed5ee3e470bd) - add `strided2object` to namespace
-   [`ca7b037`](https://github.com/stdlib-js/stdlib/commit/ca7b0375bac4ab292d93081e94e8e51a637ba64d) - add `wasm/base/strided2object`
-   [`34143ca`](https://github.com/stdlib-js/stdlib/commit/34143ca1593005de81ef30c9a48dc476a63c31b5) - add `ModuleWrapper` to namespace
-   [`e7508aa`](https://github.com/stdlib-js/stdlib/commit/e7508aa936ebfd9e70f0b80e19a7da76d2c0515f) - add a WIP `wasm/module-wrapper` package
-   [`7ea0700`](https://github.com/stdlib-js/stdlib/commit/7ea0700f3f0d873e5d7d65a7f5585169d7854c83) - add `base` to namespace
-   [`0d49560`](https://github.com/stdlib-js/stdlib/commit/0d49560dc69e5baa1e154ef5246ced6689d8fbff) - add `wasm/base` namespace
-   [`be28c74`](https://github.com/stdlib-js/stdlib/commit/be28c74db2fee7929fbaa01487d615f860be645b) - add `wasm/base/arrays2ptrs`
-   [`e799140`](https://github.com/stdlib-js/stdlib/commit/e799140f66eee9b9bd4508c7215f49d2e58c0e78) - add `wasm/base/array2dtype`
-   [`f57bee2`](https://github.com/stdlib-js/stdlib/commit/f57bee2b4155d60bd0f3a8f0ca5103f30d34d842) - add `wasm/base/dtype2wasm`
-   [`cf538c1`](https://github.com/stdlib-js/stdlib/commit/cf538c16dc5717bf1865148442ca1f30f93bb258) - add namespace
-   [`67ac388`](https://github.com/stdlib-js/stdlib/commit/67ac38817706780d7e842aa71482ca5e3f585572) - add `wasm/memory`

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`6065197`](https://github.com/stdlib-js/stdlib/commit/6065197c84ea621bd2c0fe0028d6349275e8d044) - update package name

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`2c4e5d8`](https://github.com/stdlib-js/stdlib/commit/2c4e5d824e0c5dc8fd536bf79ff565cee100ce46) - **build:** disable additional lint rule in TS tests _(by Philipp Burckhardt)_
-   [`abf0407`](https://github.com/stdlib-js/stdlib/commit/abf040787f6598438b0100a729a8331b7f80f62f) - **chore:** resolve lint errors in TS files _(by Philipp Burckhardt)_
-   [`ff9fa81`](https://github.com/stdlib-js/stdlib/commit/ff9fa81f917d539f1a11fba5580e1744991a8a11) - **docs:** fix TSDoc lint errors _(by Philipp Burckhardt)_
-   [`def5eab`](https://github.com/stdlib-js/stdlib/commit/def5eaba7c0d2282113808ab202f60261f5fc2e5) - **docs:** fix description _(by Athan Reines)_
-   [`9f848ed`](https://github.com/stdlib-js/stdlib/commit/9f848eddcab5807198387a9a9b8ca0c122e2cfb7) - **docs:** rename parameter _(by Athan Reines)_
-   [`799e2b9`](https://github.com/stdlib-js/stdlib/commit/799e2b9de0b7c054c2c9a96a5040aa5ab30c2c21) - **style:** remove empty line _(by Athan Reines)_
-   [`7d73b4c`](https://github.com/stdlib-js/stdlib/commit/7d73b4cd92b702acdd4aeaf015a8e4a687133f54) - **test:** fix index _(by Athan Reines)_
-   [`bc12e55`](https://github.com/stdlib-js/stdlib/commit/bc12e55ff4733e9816a2d50e3106ae75de0075f2) - **docs:** fix copy and extraneous newline _(by Athan Reines)_
-   [`db91373`](https://github.com/stdlib-js/stdlib/commit/db91373ac57c11965c341e4d802aed5ee3e470bd) - **feat:** add `strided2object` to namespace _(by Athan Reines)_
-   [`ca7b037`](https://github.com/stdlib-js/stdlib/commit/ca7b0375bac4ab292d93081e94e8e51a637ba64d) - **feat:** add `wasm/base/strided2object` _(by Athan Reines)_
-   [`34143ca`](https://github.com/stdlib-js/stdlib/commit/34143ca1593005de81ef30c9a48dc476a63c31b5) - **feat:** add `ModuleWrapper` to namespace _(by Athan Reines)_
-   [`e7508aa`](https://github.com/stdlib-js/stdlib/commit/e7508aa936ebfd9e70f0b80e19a7da76d2c0515f) - **feat:** add a WIP `wasm/module-wrapper` package _(by Athan Reines)_
-   [`33c18e1`](https://github.com/stdlib-js/stdlib/commit/33c18e1e7db1d1031acb9d3a5d085238d7f8c4ca) - **docs:** fix examples _(by Athan Reines)_
-   [`7ea0700`](https://github.com/stdlib-js/stdlib/commit/7ea0700f3f0d873e5d7d65a7f5585169d7854c83) - **feat:** add `base` to namespace _(by Athan Reines)_
-   [`0d49560`](https://github.com/stdlib-js/stdlib/commit/0d49560dc69e5baa1e154ef5246ced6689d8fbff) - **feat:** add `wasm/base` namespace _(by Athan Reines)_
-   [`be28c74`](https://github.com/stdlib-js/stdlib/commit/be28c74db2fee7929fbaa01487d615f860be645b) - **feat:** add `wasm/base/arrays2ptrs` _(by Athan Reines)_
-   [`6065197`](https://github.com/stdlib-js/stdlib/commit/6065197c84ea621bd2c0fe0028d6349275e8d044) - **fix:** update package name _(by Athan Reines)_
-   [`e799140`](https://github.com/stdlib-js/stdlib/commit/e799140f66eee9b9bd4508c7215f49d2e58c0e78) - **feat:** add `wasm/base/array2dtype` _(by Athan Reines)_
-   [`f57bee2`](https://github.com/stdlib-js/stdlib/commit/f57bee2b4155d60bd0f3a8f0ca5103f30d34d842) - **feat:** add `wasm/base/dtype2wasm` _(by Athan Reines)_
-   [`cf538c1`](https://github.com/stdlib-js/stdlib/commit/cf538c16dc5717bf1865148442ca1f30f93bb258) - **feat:** add namespace _(by Athan Reines)_
-   [`67ac388`](https://github.com/stdlib-js/stdlib/commit/67ac38817706780d7e842aa71482ca5e3f585572) - **feat:** add `wasm/memory` _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

