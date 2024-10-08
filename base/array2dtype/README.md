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

# array2dtype

> Return the WebAssembly data type for a provided array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var array2dtype = require( '@stdlib/wasm/base/array2dtype' );
```

#### array2dtype( array )

Returns the WebAssembly data type for a provided `array`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var arr = new Float64Array( 10 );

var dt = array2dtype( arr );
// returns 'float64'
```

If provided an argument having "generic" or an unknown/unsupported [data type][@stdlib/array/dtypes], the function assumes that array values can be stored as double-precision floating-point numbers and returns `'float64'`.

```javascript
var dt = array2dtype( [] );
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
var dtypes = require( '@stdlib/array/dtypes' );
var empty = require( '@stdlib/array/empty' );
var array2dtype = require( '@stdlib/wasm/base/array2dtype' );

// Get a list of supported array data types:
var dt = dtypes();

// For each supported data type, create an array and return its WebAssembly data type...
var v;
var i;
for ( i = 0; i < dt.length; i++ ) {
    v = array2dtype( empty( 10, dt[ i ] ) );
    console.log( '%s => %s', dt[ i ], v );
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
