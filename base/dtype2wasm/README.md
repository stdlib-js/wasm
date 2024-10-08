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

# dtype2wasm

> Return the WebAssembly data type associated with a provided array [data type][@stdlib/array/dtypes] value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var dtype2wasm = require( '@stdlib/wasm/base/dtype2wasm' );
```

#### dtype2wasm( dtype )

Returns the WebAssembly data type associated with a provided array [data type][@stdlib/array/dtypes] value.

```javascript
var out = dtype2wasm( 'float64' );
// returns 'float64'

out = dtype2wasm( 'int8' );
// returns 'int8'
```

If provided an unknown or unsupported array data type, the function **assumes** that associated values can be stored as double-precision floating-point numbers and returns `'float64'`.

```javascript
var out = dtype2wasm( 'foobar' );
// returns 'float64'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtype2wasm = require( '@stdlib/wasm/base/dtype2wasm' );

var dtypes = [
    'float64',
    'float32',
    'int8',
    'uint8',
    'uint8c',
    'int16',
    'uint16',
    'int32',
    'uint32',
    'generic'
];

var i;
for ( i = 0; i < dtypes.length; i++ ) {
    console.log( '%s => %s', dtypes[ i ], dtype2wasm( dtypes[ i ] ) );
}
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

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array-dtypes

</section>

<!-- /.links -->
