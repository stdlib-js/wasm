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

# arrays2ptrs

> Convert a list of arrays to "pointers" (i.e., byte offsets) in WebAssembly [module memory][@stdlib/wasm/memory].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var arrays2ptrs = require( '@stdlib/wasm/base/arrays2ptrs' );
```

#### arrays2ptrs( ctx, arrays )

Converts a list of arrays to "pointers" (i.e., byte offsets) in WebAssembly [module memory][@stdlib/wasm/memory].

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var DataView = require( '@stdlib/array/dataview' );

var buf = new ArrayBuffer( 64*1024 ); // 64KiB

function isView( arr ) {
    return ( arr.buffer === buf );
}

function realloc( nbytes ) {
    buf = new ArrayBuffer( nbytes );
}

function view() {
    return new DataView( buf );
}

var ctx = {
    'isView': isView,
    'realloc': realloc
};

defineProperty( ctx, 'view', {
    'configurable': false,
    'enumerable': true,
    'get': view
});

// ...

var xobj = {
    'dtype': 'generic',
    'wdtype': 'float64',
    'length': 2,
    'data': [ 1.0, 2.0 ],
    'stride': 1,
    'offset': 0
};
var yobj = {
    'dtype': 'generic',
    'wdtype': 'float64',
    'length': 2,
    'data': [ 3.0, 4.0 ],
    'stride': 1,
    'offset': 0
};

// ...

var ptrs = arrays2ptrs( ctx, [ xobj, yobj ] );
// returns [...]
```

Each element in the list of input arrays should have the following properties:

-   **dtype**: array [data type][@stdlib/array/dtypes].
-   **wdtype**: WebAssembly [array data type][@stdlib/wasm/base/array2dtype].
-   **length**: number of indexed elements.
-   **data**: original array-like object.
-   **stride**: index increment.
-   **offset**: index offset.

In addition to each element's existing properties, each element of the returned array has the following additional properties:

-   **BYTES_PER_ELEMENT**: number of bytes per element.
-   **ptr**: byte offset.
-   **nbytes**: number of bytes consumed by **indexed** array elements as stored in module memory.
-   **copy**: boolean indicating whether an array had to be copied to module memory.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Beware that this function may reallocate module memory, resulting in [`ArrayBuffer`][@stdlib/array/buffer] detachment and the invalidation of any typed array views which were views of the previously allocated memory. Additionally, this function may write to module memory and does so without regard for any existing memory content. Users are thus encouraged to take suitable precautions (e.g., copying results out of module memory prior to subsequent invocation) in order to avoid unexpected results.
-   If an array's data is copied to module memory, the data is copied to a contiguous segment of module memory, and the respective array object in the returned array will have unit stride and an offset of zero.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, no-invalid-this -->

<!-- eslint no-undef: "error" -->

```javascript
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var DataView = require( '@stdlib/array/dataview' );
var Float64Array = require( '@stdlib/array/float64' );
var dtype2wasm = require( '@stdlib/wasm/base/dtype2wasm' );
var arrays2ptrs = require( '@stdlib/wasm/base/arrays2ptrs' );

function Context() {
    this._buffer = new ArrayBuffer( 100 );
    return this;
}

setReadOnly( Context.prototype, 'isView', function isView( arr ) {
    return ( arr.buffer ) ? ( arr.buffer === this._buffer ) : false;
});

setReadOnly( Context.prototype, 'realloc', function realloc( nbytes ) {
    this._buffer = new ArrayBuffer( nbytes );
});

setReadOnlyAccessor( Context.prototype, 'view', function getter() {
    return new DataView( this._buffer );
});

// ...

var ctx = new Context();

// ...

var x = new Float64Array( 4 );
var y = new Float64Array( 4 );

// ...

var xobj = {
    'dtype': 'float64',
    'wdtype': dtype2wasm( 'float64' ),
    'length': x.length,
    'data': x,
    'stride': 1,
    'offset': 0
};

var yobj = {
    'dtype': 'float64',
    'wdtype': dtype2wasm( 'float64' ),
    'length': y.length,
    'data': y,
    'stride': 1,
    'offset': 0
};

var out = arrays2ptrs( ctx, [ xobj, yobj ] );
// returns [...]

console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm/tree/main/memory

[@stdlib/wasm/base/array2dtype]: https://github.com/stdlib-js/wasm/tree/main/base/array2dtype

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array-dtypes

[@stdlib/array/buffer]: https://github.com/stdlib-js/array-buffer

</section>

<!-- /.links -->
