"use strict";
import { Model } from '/HafrenHaverJS/mvc/model.mjs';

export const SOLFEGGIO_DB = Object.freeze([
/*	freq     bg          fg */
	[174, "red",    "white"], //  0
	[471, "orange", "black"], //  1
	[285, "yellow", "white"], //  2
	[369, "green",  "black"], //  3
	[396, "blue",   "white"], //  4
	[258, "purple", "black"], //  5

	[417, "red",    "white"], //  6
	[147, "orange", "black"], //  7 - widdershin
	[528, "yellow", "white"], //  8 - ( 1, 0)
	[936, "green",  "black"], //  9 - deosil
	[639, "blue",   "white"], // 10
	[825, "purple", "black"], // 11

	[741, "red",    "white"], // 12
	[714, "orange", "black"], // 13
	[852, "yellow", "white"], // 14
	[693, "green",  "black"], // 15
	[963, "blue",   "white"], // 16
	[582, "purple", "black"], /* 17 - (-1, 0) */ ]);

export class SolfeggioModel extends Model {
	constructor(index = 8) {
		super();
		this.index = index } }