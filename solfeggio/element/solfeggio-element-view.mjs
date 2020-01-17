"use strict";
import { ElementView } from '/HafrenHaverJS/elemental/element/element-view.mjs';

export class SolfeggioElementView extends ElementView {
	draw() {
		this.drawElement();
		this.drawElementText() }
	drawElement(x, y, roff2, fillStyle) {
		const ctx       = this.#ctx;
		ctx.beginPath();
		ctx.arc(x, y, roff2, 0, 2 * Math.PI, false);
		ctx.strokeStyle = "black";
		ctx.lineWidth   = 1;
		ctx.stroke();
		ctx.fillStyle   = fillStyle;
		ctx.fill();
	}
	drawElementText(x, y, fillStyle, text) {
		const ctx        = this.#ctx;
		ctx.font         = '8pt Calibri';
		ctx.textAlign    = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillStyle    = fillStyle
		ctx.fillText(text, x, y);
	} }