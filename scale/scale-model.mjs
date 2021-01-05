"use strict";
import { Model } from '/HafrenHaverJS/mvc/model.mjs';

export const INTERVAL_QUALITY = Object.freeze([
	"P",  // 0 - perfect
	"M",  // 1 - major
	"m",  // 2 - minor
	"A",  // 3 - augmented
	"d",  // 4 - diminished
	"TT", // 5 - tritone
]);
export const    PERFECT_INTERVAL = INTERVAL_QUALITY[0];
export const      MAJOR_INTERVAL = INTERVAL_QUALITY[1];
export const      MINOR_INTERVAL = INTERVAL_QUALITY[2];
export const  AUGMENTED_INTERVAL = INTERVAL_QUALITY[3];
export const DIMINISHED_INTERVAL = INTERVAL_QUALITY[4];
export const    TRITONE_INTERVAL = INTERVAL_QUALITY[5];

function tetk (n, k) {
	return Math.pow (2, n / k);
}
function tet12 (n) {
	return tetk (n, 12);
}

export const INTERVALS = Object.freeze([
/*	index interval quality             degree */
	// symmetric scales 1
	[ 0,   1/1,      PERFECT_INTERVAL,  1], //  0
	[ 1,  16/15,       MINOR_INTERVAL,  2], //  1
	[ 2,   9/8,        MAJOR_INTERVAL,  2], //  2
	[ 3,   6/5,        MINOR_INTERVAL,  3], //  3
	[ 4,   5/4,        MAJOR_INTERVAL,  3], //  4
	[ 5,   4/3,      PERFECT_INTERVAL,  4], //  5
	[ 6,  45/32,   AUGMENTED_INTERVAL,  4], //  6
	[ 6,  64/45,    DIMISHED_INTERVAL,  5], //  7
	[ 7,   3/2,      PERFECT_INTERVAL,  5], //  8
	[ 8,   8/5,        MINOR_INTERVAL,  6], //  9
	[ 9,   5/3,        MAJOR_INTERVAL,  6], // 10
	[10,  16/9,        MINOR_INTERVAL,  7], // 11
	[11,  15/8,        MAJOR_INTERVAL,  7], // 12

	// symmetric scales 2
	[ 2,  10/9,        MAJOR_INTERVAL,  2], //  2 => 13
	[10,   9/5,        MINOR_INTERVAL,  7], // 11 => 14

	// asymmetric scales extended
	[ 6,  25/18,   AUGMENTED_INTERVAL,  4], //  6 => 15
	[ 6,  36/25,    DIMISHED_INTERVAL,  5], //  7 => 16

	// 7-limit tuning
	[ 1,  15/14,       MINOR_INTERVAL,  2], //  1 => 17
	[ 2,   8/7,        MAJOR_INTERVAL,  2], //  2 => 18
	[ 6,   7/5,    AUGMENTED_INTERVAL,  4], //  6 => 19
	[ 6,  10/7,     DIMISHED_INTERVAL,  5], //  7 => 20
	[10,   7/4,        MINOR_INTERVAL,  7], // 11 => 21

	// 17-limit tuning
	[ 1,  14/13,       MINOR_INTERVAL,  2], //  1 => 22
	[ 6,  17/12,   AUGMENTED_INTERVAL,  4], //  6 => 23
	[ 6,  24/17,    DIMISHED_INTERVAL,  5], //  7 => 24
	[11,  13/7,        MAJOR_INTERVAL,  7], // 12 => 25

	// 12-TET
	[ 1, tet12 ( 1),   MINOR_INTERVAL,  2], //  1   => 26
	[ 2, tet12 ( 2),   MAJOR_INTERVAL,  2], //  2   => 27
	[ 3, tet12 ( 3),   MINOR_INTERVAL,  3], //  3   => 28
	[ 4, tet12 ( 4),   MAJOR_INTERVAL,  3], //  4   => 29
	[ 5, tet12 ( 5), PERFECT_INTERVAL,  4], //  5   => 30
	[ 6, tet12 ( 6), TRITONE_INTERVAL,  4], //  6,7 => 31
	[ 7, tet12 ( 7), PERFECT_INTERVAL,  5], //  8   => 32
	[ 8, tet12 ( 8),   MINOR_INTERVAL,  6], //  9   => 33
	[ 9, tet12 ( 9),   MAJOR_INTERVAL,  6], // 10   => 34
	[10, tet12 (10),   MINOR_INTERVAL,  7], // 11   => 35
	[11, tet12 (11),   MAJOR_INTERVAL,  7], // 12   => 36

	// Pythagorean Tuning
	[ 1,  2187/2048,   MINOR_INTERVAL,  2], //  1 => 37
	[ 3,    32/27,     MINOR_INTERVAL,  3], //  3 => 38
	[ 4,    81/64,     MAJOR_INTERVAL,  3], //  4 => 39
	[ 6,   729/512,  TRITONE_INTERVAL,  4], //  6 => 40
	[ 8,   128/81,     MINOR_INTERVAL,  6], //  9 => 41
	[ 9,    27/16,     MAJOR_INTERVAL,  6], // 10 => 42
	[11,   243/128,    MAJOR_INTERVAL,  7], // 12 => 43
]);

export const SYMMETRIC_SCALE_1 = Object.freeze([
	INTERVALS[ 0], //  0
	INTERVALS[ 1], //  1
	INTERVALS[ 2], //  2
	INTERVALS[ 3], //  3
	INTERVALS[ 4], //  4
	INTERVALS[ 5], //  5
	INTERVALS[ 6], //  6
	INTERVALS[ 7], //  7
	INTERVALS[ 8], //  8
	INTERVALS[ 9], //  9
	INTERVALS[10], // 10
	INTERVALS[11], // 11
	INTERVALS[12], // 12
]);
export const SYMMETRIC_SCALE_2 = Object.freeze([
	INTERVALS[ 0], //  0
	INTERVALS[ 1], //  1
	INTERVALS[13], //  2
	INTERVALS[ 3], //  3
	INTERVALS[ 4], //  4
	INTERVALS[ 5], //  5
	INTERVALS[ 6], //  6
	INTERVALS[ 7], //  7
	INTERVALS[ 8], //  8
	INTERVALS[ 9], //  9
	INTERVALS[10], // 10
	INTERVALS[14], // 11
	INTERVALS[12], // 12
]);
export const STANDARD_ASYMMETRIC_SCALE = Object.freeze([
	INTERVALS[ 0], //  0
	INTERVALS[ 1], //  1
	INTERVALS[ 2], //  2
	INTERVALS[ 3], //  3
	INTERVALS[ 4], //  4
	INTERVALS[ 5], //  5
	INTERVALS[ 6], //  6
	INTERVALS[ 7], //  7
	INTERVALS[ 8], //  8
	INTERVALS[ 9], //  9
	INTERVALS[10], // 10
	INTERVALS[14], // 11
	INTERVALS[12], // 12
]);
export const EXTENDED_ASYMMETRIC_SCALE = Object.freeze([
	INTERVALS[ 0], //  0
	INTERVALS[ 1], //  1
	INTERVALS[ 2], //  2
	INTERVALS[ 3], //  3
	INTERVALS[ 4], //  4
	INTERVALS[ 5], //  5
	INTERVALS[15], //  6
	INTERVALS[16], //  7
	INTERVALS[ 8], //  8
	INTERVALS[ 9], //  9
	INTERVALS[10], // 10
	INTERVALS[14], // 11
	INTERVALS[12], // 12
]);
export const LIMIT_7_SCALE = Object.freeze([
	INTERVALS[ 0], //  0
	INTERVALS[17], //  1
	INTERVALS[18], //  2
	INTERVALS[ 3], //  3
	INTERVALS[ 4], //  4
	INTERVALS[ 5], //  5
	INTERVALS[19], //  6
	INTERVALS[20], //  7
	INTERVALS[ 8], //  8
	INTERVALS[ 9], //  9
	INTERVALS[10], // 10
	INTERVALS[21], // 11
	INTERVALS[12], // 12
]);
export const LIMIT_17_SCALE_1 = Object.freeze([
	INTERVALS[ 0], //  0
	INTERVALS[22], //  1
	INTERVALS[18], //  2
	INTERVALS[ 3], //  3
	INTERVALS[ 4], //  4
	INTERVALS[ 5], //  5
	INTERVALS[19], //  6
	INTERVALS[20], //  7
	INTERVALS[ 8], //  8
	INTERVALS[ 9], //  9
	INTERVALS[10], // 10
	INTERVALS[21], // 11
	INTERVALS[25], // 12
]);
export const LIMIT_17_SCALE_2 = Object.freeze([
	INTERVALS[ 0], //  0
	INTERVALS[22], //  1
	INTERVALS[18], //  2
	INTERVALS[ 3], //  3
	INTERVALS[ 4], //  4
	INTERVALS[ 5], //  5
	INTERVALS[23], //  6
	INTERVALS[20], //  7
	INTERVALS[ 8], //  8
	INTERVALS[ 9], //  9
	INTERVALS[10], // 10
	INTERVALS[21], // 11
	INTERVALS[25], // 12
]);
export const LIMIT_17_SCALE_3 = Object.freeze([
	INTERVALS[ 0], //  0
	INTERVALS[22], //  1
	INTERVALS[18], //  2
	INTERVALS[ 3], //  3
	INTERVALS[ 4], //  4
	INTERVALS[ 5], //  5
	INTERVALS[19], //  6
	INTERVALS[24], //  7
	INTERVALS[ 8], //  8
	INTERVALS[ 9], //  9
	INTERVALS[10], // 10
	INTERVALS[21], // 11
	INTERVALS[25], // 12
]);
export const LIMIT_17_SCALE_4 = Object.freeze([
	INTERVALS[ 0], //  0
	INTERVALS[22], //  1
	INTERVALS[18], //  2
	INTERVALS[ 3], //  3
	INTERVALS[ 4], //  4
	INTERVALS[ 5], //  5
	INTERVALS[23], //  6
	INTERVALS[24], //  7
	INTERVALS[ 8], //  8
	INTERVALS[ 9], //  9
	INTERVALS[10], // 10
	INTERVALS[21], // 11
	INTERVALS[25], // 12
]);
export const TET_12_SCALE = Object.freeze([
	INTERVALS[ 0], //  0
	INTERVALS[26], //  1
	INTERVALS[27], //  2
	INTERVALS[28], //  3
	INTERVALS[29], //  4
	INTERVALS[30], //  5
	INTERVALS[31], //  6
	INTERVALS[31], //  7
	INTERVALS[32], //  8
	INTERVALS[33], //  9
	INTERVALS[34], // 10
	INTERVALS[35], // 11
	INTERVALS[36], // 12
]);
export const PYTHAGOREAN_SCALE = Object.freeze([
	INTERVALS[ 0], //  0
	INTERVALS[37], //  1
	INTERVALS[ 2], //  2
	INTERVALS[38], //  3
	INTERVALS[39], //  4
	INTERVALS[ 5], //  5
	INTERVALS[40], //  6
	INTERVALS[ 8], //  7
	INTERVALS[ 8], //  8
	INTERVALS[41], //  9
	INTERVALS[42], // 10
	INTERVALS[11], // 11
	INTERVALS[43], // 12
]);

export const SCALE_DB = Object.freeze([
	          SYMMETRIC_SCALE_1, //  0
	          SYMMETRIC_SCALE_2, //  1
	STANDARD_ASYMMETRIC_SCALE,   //  2
	EXTENDED_ASYMMETRIC_SCALE,   //  3
	            LIMIT_7_SCALE,   //  4
	           LIMIT_17_SCALE_1, //  5
	           LIMIT_17_SCALE_2, //  6
	           LIMIT_17_SCALE_3, //  7
	           LIMIT_17_SCALE_4, //  8
	             TET_12_SCALE,   //  9
	        PYTHAGOREAN_SCALE,   // 10
]);

export class ScaleModel extends Model {
	constructor(index = 8) {
		super();
		this.index = index } }
