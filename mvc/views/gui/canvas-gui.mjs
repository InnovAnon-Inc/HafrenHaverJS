"use strict";
import { GUI } from '/HafrenHaverJS/mvc/views/gui/gui.mjs';

export class CanvasGUI extends GUI {
	width;
	height;
	ctx;
	constructor(id) {
		super(id);
		const canvas  = super.element;
		this.width    = canvas.width;
		this.height   = canvas.height;
		this.ctx      = canvas.getContext("2d");
		canvas.addEventListener('click', ((event) => this.onClick(event)).bind(this), false) }
	onClick(event) {
		const canvas     = super.element;
		const elemLeft   = canvas.offsetLeft;
		const elemTop    = canvas.offsetTop;
		
		var offsetX = event.offsetX;
		var offsetY = event.offsetY;
		if (event.target != canvas) { // 'this' is our HTMLElement
			offsetX = event.target.offsetLeft + event.offsetX;
			offsetY = event.target.offsetTop  + event.offsetY;
		}
		
		const x = offsetX;
		const y = offsetY;
		
		this.handleClick(x, y) }
	redraw() {
		ctx.save();
		ctx.clearRect(0, 0, this.width, this.height);
		this.draw();
		ctx.restore() }
	// draw() {}
	// handleClick(x, y) {}
}