"use strict";
import { CanvasGUI } from '/HafrenHaverJS/mvc/views/gui/canvas-gui.mjs';

export class ElementalCanvasGUI extends CanvasGUI {
	elements;
	constructor(id) {
		super(id);
		this.elements = [] }
	handleClick(x, y) { this.handleClickedElements(elements.filter(e => e.contains(x, y))) }
	draw() {
		ctx.save();
		this.drawBefore();
		this.drawElements();
		this.drawAfter();
		ctx.restore();
	}
	drawElements() { elements.forEach(e => e.draw()) }
	// drawBefore() {}
	// drawAfter () {}
	// handleClickedElements(elements) {}
}