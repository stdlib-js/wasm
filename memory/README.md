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

# Memory

> WebAssembly [memory][mdn-webassembly-memory] constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Memory = require( '@stdlib/wasm/memory' );
```

#### Memory( descriptor )

Returns a new WebAssembly [memory][mdn-webassembly-memory] instance.

```javascript
var mem = new Memory({
    'initial': 0
});
// returns <Memory>
```

The `descriptor` argument is an object which supports the following properties:

-   **initial**: (_required_) initial memory size in units of WebAssembly pages (i.e., 64KiB).
-   **maximum**: maximum memory size in units of WebAssembly pages (i.e., 64KiB).
-   **shared**: boolean indicating whether the memory is shared. Default: `false`.

* * *

<a name="prop-buffer"></a>

#### Memory.prototype.buffer

**Read-only** property which returns the [`ArrayBuffer`][@stdlib/array/buffer] (or [`SharedArrayBuffer`][@stdlib/array/shared-buffer]) referenced by memory instance.

```javascript
var mem = new Memory({
    'initial': 0
});

var buf = mem.buffer;
// returns <ArrayBuffer>
```

* * *

### Methods

<a name="method-grow"></a>

#### Memory.prototype.grow( delta )

Increases the size of the memory instance by a specified number of WebAssembly pages (i.e., 64KiB).

```javascript
var mem = new Memory({
    'initial': 0
});

// ...

var prevSize = mem.grow( 1 );
```

The method returns the size of the previous [`ArrayBuffer`][@stdlib/array/buffer] (or [`SharedArrayBuffer`][@stdlib/array/shared-buffer]).

</section>

<!-- /.usage -->

* * *

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Upon increasing the size, the previous [`ArrayBuffer`][@stdlib/array/buffer] is detached, thus invalidating any typed arrays which were views over the previous [`ArrayBuffer`][@stdlib/array/buffer].
-   **Detachment** means that the previous [`ArrayBuffer`][@stdlib/array/buffer] byte length becomes zero, and it no longer has bytes accessible to JavaScript.
-   When calling `grow`, [`ArrayBuffer`][@stdlib/array/buffer] detachment applies even when `delta` is zero.
-   Detachment only applies for non-shared memory instances. For a shared memory instance, the initial buffer (which is a [`SharedArrayBuffer`][@stdlib/array/shared-buffer]) will not become detached and, instead, its length will not be updated.
-   Accesses to the `buffer` property after growing a [`SharedArrayBuffer`][@stdlib/array/shared-buffer] will yield a larger [`SharedArrayBuffer`][@stdlib/array/shared-buffer] which may access a larger span of memory than the buffer before growing memory.
-   Every [`SharedArrayBuffer`][@stdlib/array/shared-buffer] accessed via the `buffer` property will always refer to the start of the same memory address range and thus manipulate the same data.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasWebAssemblySupport = require( '@stdlib/assert/has-wasm-support' );
var DataView = require( '@stdlib/array/dataview' );
var Memory = require( '@stdlib/wasm/memory' );

function main() {
    var view;
    var mem;
    var v;
    if ( !hasWebAssemblySupport() ) {
        console.error( 'Environment does not support WebAssembly.' );
        return;
    }
    mem = new Memory({
        'initial': 1
    });
    view = new DataView( mem.buffer );

    view.setFloat64( 0, 3.14 );

    // ...

    v = view.getFloat64( 0 );
    console.log( v );
    // => 3.14
}

main();
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

[mdn-webassembly-memory]: https://developer.mozilla.org/en-US/docs/WebAssembly/JavaScript_interface/Memory

[@stdlib/array/buffer]: https://github.com/stdlib-js/array-buffer

[@stdlib/array/shared-buffer]: https://github.com/stdlib-js/array-shared-buffer

</section>

<!-- /.links -->
