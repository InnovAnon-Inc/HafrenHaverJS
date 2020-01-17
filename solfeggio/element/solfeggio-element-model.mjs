"use strict";
import { ElementModel } from '/HafrenHaverJS/elemental/element/element-model.mjs';

export class SolfeggioElementModel extends ElementModel {
	constructor(w2, h2, r2, theta, roff) {
		this.x    = w2 + r2 * Math.cos(theta);
		this.y    = h2 + r2 * Math.sin(theta);
		this.roff = roff }
	contains(x, y) { return (Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2)) <= this.roff) } }