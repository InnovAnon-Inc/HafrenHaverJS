"use strict";
import { ElementView  } from '/HafrenHaverJS/elemental/element/element-view.mjs';
import { SOLFEGGIO_DB } from '/HafrenHaverJS/solfeggio/solfeggio-model.mjs';

export class SolfeggioElementView extends ElementView {
	constructor() {
		super();
		const element = SOLFEGGIO_DB[this.mvc.model.index];
		this.text     = element[0];
		this.bg       = element[1];
		this.fg       = element[2] }
	draw() {
		this.drawElement();
		this.drawElementText() }
	drawElement() {
		const ctx       = this.mvc.parent.view.ctx;
		ctx.beginPath();
		ctx.arc(this.mvc.model.x, this.mvc.model.y, this.roff / 2, 0, 2 * Math.PI, false);
		ctx.strokeStyle = "black";
		ctx.lineWidth   = 1;
		ctx.stroke();
		ctx.fillStyle   = this.bg;
		ctx.fill();
	}
	drawElementText() {
		const ctx        = this.mvc.parent.view.ctx;
		// TODO make font configurable
		ctx.font         = '8pt Calibri';
		ctx.textAlign    = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillStyle    = this.fg;
		ctx.fillText(this.text, this.mvc.model.x, this.mvc.model.y) } }