"use strict";
import { CanvasGUI } from '/HafrenHaverJS/mvc/views/gui/canvas-gui.mjs';

export class ElementalCanvasGUI extends CanvasGUI {
	//elements;
	constructor(id) {
		super(id);
		//this.elements = []
		this.addElements() }
	handleClick(x, y) { this.handleClickedElements(this.elements.filter(e => e.contains(x, y))) }
	draw() {
		const ctx = this.ctx;
		ctx.save();
		this.drawBefore();
		this.drawElements();
		this.drawAfter();
		ctx.restore() }
	drawElements() { this.elements.forEach(e => e.draw()) }
	// drawBefore() {}
	// drawAfter () {}
	// handleClickedElements(elements) {}
	// addElements() {}
}