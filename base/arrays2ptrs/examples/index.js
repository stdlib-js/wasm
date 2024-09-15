/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var DataView = require( '@stdlib/array/dataview' );
var Float64Array = require( '@stdlib/array/float64' );
var dtype2wasm = require( './../../../base/dtype2wasm' );
var arrays2ptrs = require( './../lib' );

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
