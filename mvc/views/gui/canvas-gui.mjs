"use strict";
import { GUI } from '/HafrenHaverJS/mvc/views/gui/gui.mjs';

export class CanvasGUI extends GUI {
	//width;
	//height;
	//ctx;
	constructor(id) {
		super(id);
		const canvas  = this.element;
		this.width    = canvas.width;
		this.height   = canvas.height;
		this.ctx      = canvas.getContext("2d");
		canvas.addEventListener('click',  ((event) => this.onClick(event)) .bind(this), false) }
	onClick(event) {
		const canvas     = this.element;
		const elemLeft   = canvas.offsetLeft;
		const elemTop    = canvas.offsetTop;
		
		var   offsetX    = event.offsetX;
		var   offsetY    = event.offsetY;
		const target     = event.target;
		if (target != canvas) { // 'this' is our HTMLElement
			offsetX = target.offsetLeft + event.offsetX;
			offsetY = target.offsetTop  + event.offsetY }
		
		const x = offsetX / canvas.scrollWidth;
		const y = offsetY / canvas.scrollHeight;
		
		this.handleClick(x, y) }
	redraw() {
		const ctx = this.ctx;
		ctx.save();
		ctx.clearRect(0, 0, this.width, this.height);
		this.draw();
		ctx.restore() }
	// draw() {}
	// handleClick(x, y) {}
}