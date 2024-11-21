<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Base

> Base (i.e., lower-level) WebAssembly utility namespace.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/wasm/base' );
```

#### ns

Base WebAssembly namespace.

```javascript
var o = ns;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`array2dtype( array )`][@stdlib/wasm/base/array2dtype]</span><span class="delimiter">: </span><span class="description">return the WebAssembly data type for a provided array.</span>
-   <span class="signature">[`arrays2ptrs( ctx, arrays )`][@stdlib/wasm/base/arrays2ptrs]</span><span class="delimiter">: </span><span class="description">convert a list of arrays to "pointers" (i.e., byte offsets) in WebAssembly module memory.</span>
-   <span class="signature">[`dtype2wasm( dtype )`][@stdlib/wasm/base/dtype2wasm]</span><span class="delimiter">: </span><span class="description">return the WebAssembly data type associated with a provided array data type value.</span>
-   <span class="signature">[`strided2object( N, x, stride, offset )`][@stdlib/wasm/base/strided2object]</span><span class="delimiter">: </span><span class="description">convert a strided array and associated metadata to an object likely to have the same "shape".</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/wasm/base' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/wasm/base/array2dtype]: https://github.com/stdlib-js/wasm/tree/main/base/array2dtype

[@stdlib/wasm/base/arrays2ptrs]: https://github.com/stdlib-js/wasm/tree/main/base/arrays2ptrs

[@stdlib/wasm/base/dtype2wasm]: https://github.com/stdlib-js/wasm/tree/main/base/dtype2wasm

[@stdlib/wasm/base/strided2object]: https://github.com/stdlib-js/wasm/tree/main/base/strided2object

<!-- </toc-links> -->

</section>

<!-- /.links -->
