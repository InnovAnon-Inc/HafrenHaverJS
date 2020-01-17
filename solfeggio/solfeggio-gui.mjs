"use strict";
import { ElementalCanvasGUI  } from '/HafrenHaverJS/elemental/elemental-canvas-gui.mjs';
import { SolfeggioElementMVC } from '/HafrenHaverJS/solfeggio/element/solfeggio-element-mvc.mjs';
import { SOLFEGGIO_DB        } from '/HafrenHaverJS/solfeggio/solfeggio-model.mjs';

export class SolfeggioGUI extends ElementalCanvasGUI {
	constructor(id) {
		super(id);
		
		this.w2   = this.width  / 2;
		this.h2   = this.height / 2;
		const d   = Math.min(w, h);
		this.r    = d / 2;
		this.roff = d / 7; // don't go smaller than 7
	}
	addElements() {
		const elements = [];
		
		const canvas   = this.element;
		const len      = SOLFEGGIO_DB.length;
		const roff2    = this.roff / 2;
		const r2       = this.r - roff2;
		for(var i = 0; i < len; i++) {
			const theta  = i / len * 2 * Math.PI;
			const x      = this.w2 + r2 * Math.cos(theta);
			const y      = this.h2 + r2 * Math.sin(theta);
			const index  = (i + 8) % len;
			const element = new SolfeggioElementMVC(this, this.w2, this.h2, r2, theta, this.roff, index);
			elements.push(element);
		}
		
		this.elements = Object.freeze(elements) }
	handleClickedElements(elements) {
		this.mvc.model.index = elements[0].model.index;
		elements.forEach(e => e.controller.handleClick()) }
	drawBefore() {
		this.drawOuterCircle();
		// TODO draw inner circle and polygons
	}
	drawOuterCircle() {
		const ctx = this.ctx;
		ctx.beginPath();
		ctx.arc(this.w2, this.h2, this.r, 0, 2 * Math.PI, false);
		ctx.strokeStyle = "black";
		ctx.lineWidth   = 3;
		ctx.closePath();
		ctx.stroke();
		// TODO fill middle background to match selected element's fill style ?
	}

	drawAfter () { this.drawIndicatorArrow() }
	drawIndicatorArrow() {
		const ctx     = this.ctx;
		const index2  = this.mvc.model.index;
		const len     = SOLFEGGIO_DB.length;
		const theta2  = (index2 - 8) / len * 2 * Math.PI;
		const entry2  = SOLFEGGIO_DB[index2 % len];
		const r3      = r - roff;

		ctx.beginPath();
		ctx.moveTo(this.w2, this.h2);
		ctx.lineTo(this.w2 + this.r3 * Math.cos(theta2),  this.h2 + this.r3 * Math.sin(theta2));
		ctx.strokeStyle = "black"; // entry2[2];
		ctx.lineWidth   = 3;
		ctx.closePath();
		ctx.stroke() } }