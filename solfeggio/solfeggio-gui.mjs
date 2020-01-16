"use strict";
import { CanvasGUI    } from '/HafrenHaverJS/mvc/views/gui/elemental-canvas-gui.mjs';
import { SOLFEGGIO_DB } from '/HafrenHaverJS/solfeggio/solfeggio-model.mjs';

class SolfeggioElementModel extends Model {
	constructor(w2, h2, r2, theta, roff) {
		this.x    = w2 + r2 * Math.cos(theta);
		this.y    = h2 + r2 * Math.sin(theta);
		this.roff = roff }
	contains(x, y) { return (Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2)) <= this.roff) } }
class SolfeggioElementGUI extends GUI {
	constructor(canvas) { this.canvas = canvas }
	draw() {}
}
class SolfeggioElementController extends Controller {
	handleClick() {
		// TODO
	} }
class SolfeggioElementMVC extends MVC {
	constructor(w2, h2, r2, theta, roff, entry) {
		const m = new SolfeggioElementModel(w2, h2, r2, theta, roff);
		const v = new SolfeggioElementGUI();
		const c = new SolfeggioController();
		super(m, v, c) } }

export class SolfeggioGUI extends ElementalCanvasGUI {
	constructor(id) { super(id) }
	addElements() {
		const elements = [];
		
		const canvas = this.element;
		const w      = this.width;
		const h      = this.height;
		const w2     = w / 2;
		const h2     = h / 2;
		const d      = Math.min(w, h);
		const len    = SOLFEGGIO_DB.length;
		const r      = d / 2;
		const roff   = d / 7; // don't go smaller than 7
		const roff2  = roff / 2;
		const r2     = r - roff2;
		for(var i = 0; i < len; i++) {
			const theta = i / len * 2 * Math.PI;
			const x     = w2 + r2 * Math.cos(theta);
			const y     = h2 + r2 * Math.sin(theta);
			const entry = SOLFEGGIO_DB[(i + 8) % len];
			elements.push([x, y, roff, entry]);
		}
		
		this.elements = Object.freeze(elements) }
	handleClickedElements(elements) { elements.forEach(e => e.controller.handleClick()) }
	drawBefore() {
		// TODO draw inner circle
		// TODO draw outer circle
	}
	drawAfter () { /* empty */ }
	
	
	
	
	
	
	
	drawOuterCircle(w2, h2, r) {
		const ctx       = this.#ctx;
		ctx.beginPath();
		ctx.arc(w2, h2, r, 0, 2 * Math.PI, false);
		ctx.strokeStyle = "black";
		ctx.lineWidth   = 3;
		ctx.closePath();
		ctx.stroke();
		// TODO fill middle background to match selected element's fill style
	}
	drawInnerCircle(w2, h2, r) {
		const ctx       = this.#ctx;
		ctx.beginPath();
		ctx.arc(w2, h2, r, 0, 2 * Math.PI, false);
		ctx.strokeStyle = "black";
		ctx.lineWidth   = 2;
		ctx.closePath();
		ctx.stroke();
		// TODO fill inner background to opposite selected element's text
	}
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
	}
	drawElements() {
		const ctx = this.#ctx;
		const len = this.#elements.length;
		for(var i = 0; i < len; i++) {
			const element = this.#elements[i];
			const x       = element[0];
			const y       = element[1];
			const roff    = element[2];
			const entry   = element[3];

			this.drawElement    (x, y, roff / 2, entry[1]);
			this.drawElementText(x, y, entry[2],  entry[0]);
		}
	}
	drawArrow (w2, h2, r3, len) {
		const ctx     = this.#ctx;
		const index2  = this.mvc.model.index;
		const theta2  = (index2 - 8) / len * 2 * Math.PI;
		const entry2  = SOLFEGGIO_DB[index2 % len];

		ctx.beginPath();
		ctx.moveTo(w2, h2);
		ctx.lineTo(w2 + r3 * Math.cos(theta2),  h2 + r3 * Math.sin(theta2));
		ctx.strokeStyle = "black"; // entry2[2];
		ctx.lineWidth   = 3;
		ctx.closePath();
		ctx.stroke();
	}
	draw() {
		const canvas = super.element;
		const ctx    = this.#ctx;
		//const w      = canvas.scrollWidth;
		//const h      = canvas.scrollHeight;
		const w      = canvas.width;
		const h      = canvas.height;
		const d      = Math.min(w, h);
		const w2     = w / 2;
		const h2     = h / 2;
		const r      = d / 2;
		const roff   = d / 7; // don't go smaller than 7
		const len    = SOLFEGGIO_DB.length;
		const r3     = r - roff;

		ctx.save();
		ctx.clearRect(0, 0, w, h);

		// TODO fill outer background to match selected element's text

		this.drawOuterCircle(w2, h2, r);
		this.drawInnerCircle(w2, h2, r3);
		this.drawElements();
		this.drawPolygons();
		this.drawArrow(w2, h2, r3, len);

		ctx.restore();
	} }