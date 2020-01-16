"use strict";
import { CanvasGUI } from '/mvc/views/gui/canvas-gui';

export class ElementalCanvasGUI extends CanvasGUI {
	elements;
	constructor(id) {
		super(id);
		this.elements = [] }
	function handleClick(x, y) { this.handleClickedElements(elements.filter(e => e.contains(x, y))) }
	function draw() {
		ctx.save();
		this.drawBefore();
		this.drawElements();
		this.drawAfter();
		ctx.restore();
	}
	function drawElements() { elements.forEach(e => e.draw()) }
	// function drawBefore() {}
	// function drawAfter () {}
	// function handleClickedElements(elements) {}
}