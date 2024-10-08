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

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var DataView = require( '@stdlib/array/dataview' );
var dtype = require( '@stdlib/array/dtype' );
var dtype2wasm = require( './../../../base/dtype2wasm' );
var writeDataView = require( '@stdlib/strided/base/write-dataview' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var arrays2ptrs = require( './../lib' );


// FIXTURES //

var Context = require( './fixtures/context.js' );


// FUNCTIONS //

/**
* Returns an array object.
*
* @private
* @param {ArrayBuffer} [buffer] - array buffer
* @param {NonNegativeInteger} [byteOffset] - byte offset
* @returns {Object} an array object
*/
function arrayObject( buffer, byteOffset ) {
	var dt;
	var x;

	if ( arguments.length === 0 ) {
		x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
		dt = dtype( x );
	} else {
		x = new Float64Array( buffer, byteOffset, 4 );
		x[ 0 ] = 1.0;
		x[ 1 ] = 2.0;
		x[ 2 ] = 3.0;
		x[ 3 ] = 4.0;
		dt = dtype( x );
		writeDataView( x.length, x, 1, new DataView( buffer ), bytesPerElement( dt ), true ); // eslint-disable-line max-len
	}
	return {
		'dtype': dt,
		'wdtype': dtype2wasm( dt ),
		'length': x.length,
		'data': x,
		'stride': 1,
		'offset': 0
	};
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof arrays2ptrs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function supports resolving pointers to arrays already allocated on module memory', function test( t ) {
	var ctx;
	var arr;
	var out;
	var x;
	var v;

	ctx = new Context();

	x = arrayObject( ctx.view.buffer, 16 );
	arr = [ x ];

	out = arrays2ptrs( ctx, arr );
	v = out[ 0 ];

	// Input array object properties:
	t.strictEqual( v.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( v.wdtype, x.wdtype, 'returns expected value' );
	t.strictEqual( v.length, x.length, 'returns expected value' );
	t.strictEqual( v.data, x.data, 'returns expected value' );
	t.strictEqual( v.stride, x.stride, 'returns expected value' );
	t.strictEqual( v.offset, x.offset, 'returns expected value' );

	// New array object properties:
	t.strictEqual( v.BYTES_PER_ELEMENT, bytesPerElement( x.dtype ), 'returns expected value' );
	t.strictEqual( v.nbytes, bytesPerElement( x.dtype ) * x.length, 'returns expected value' );
	t.strictEqual( v.copy, false, 'returns expected value' );
	t.strictEqual( v.ptr, 16, 'returns expected value' );

	t.end();
});

tape( 'the function supports resolving pointers by copying array contents to module memory', function test( t ) {
	var ctx;
	var arr;
	var out;
	var x;
	var y;
	var v;

	ctx = new Context();

	x = arrayObject();
	y = arrayObject();
	arr = [ x, y ];

	out = arrays2ptrs( ctx, arr );

	// First array object...
	v = out[ 0 ];

	// Input array object properties:
	t.strictEqual( v.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( v.wdtype, x.wdtype, 'returns expected value' );
	t.strictEqual( v.length, x.length, 'returns expected value' );
	t.strictEqual( v.data, x.data, 'returns expected value' );
	t.strictEqual( v.stride, x.stride, 'returns expected value' );
	t.strictEqual( v.offset, x.offset, 'returns expected value' );

	// New array object properties:
	t.strictEqual( v.BYTES_PER_ELEMENT, bytesPerElement( x.dtype ), 'returns expected value' );
	t.strictEqual( v.nbytes, bytesPerElement( x.dtype ) * x.length, 'returns expected value' );
	t.strictEqual( v.copy, true, 'returns expected value' );
	t.strictEqual( v.ptr, 0, 'returns expected value' );

	// Second array object...
	v = out[ 1 ];

	// Input array object properties:
	t.strictEqual( v.dtype, y.dtype, 'returns expected value' );
	t.strictEqual( v.wdtype, y.wdtype, 'returns expected value' );
	t.strictEqual( v.length, y.length, 'returns expected value' );
	t.strictEqual( v.data, y.data, 'returns expected value' );
	t.strictEqual( v.stride, y.stride, 'returns expected value' );
	t.strictEqual( v.offset, y.offset, 'returns expected value' );

	// New array object properties:
	t.strictEqual( v.BYTES_PER_ELEMENT, bytesPerElement( y.dtype ), 'returns expected value' );
	t.strictEqual( v.nbytes, bytesPerElement( y.dtype ) * y.length, 'returns expected value' );
	t.strictEqual( v.copy, true, 'returns expected value' );
	t.strictEqual( v.ptr, bytesPerElement( x.dtype ) * x.length, 'returns expected value' );

	t.end();
});
