"use strict";
import { GUI } from '/HafrenHaverJS/mvc/views/gui/gui.mjs';

export class CanvasGUI extends GUI {
	//width;
	//height;
	//ctx;
	constructor(id) {
		super(id);
		//const canvas  = super.element;
		const canvas  = this.element;
		this.width    = canvas.clientWidth;
		this.height   = canvas.clientHeight;
		this.ctx      = canvas.getContext("2d");
		canvas.addEventListener('click', ((event) => this.onClick(event)).bind(this), false) }
	onClick(event) {
		const canvas     = this.element;
		const elemLeft   = canvas.offsetLeft;
		const elemTop    = canvas.offsetTop;
		console.log('elem left, top => ' + elemLeft + ', ' + elemTop);
		
		var   offsetX    = event.offsetX;
		var   offsetY    = event.offsetY;
		console.log('offset x, y => ' + offsetX + ', ' + offsetY);
		const target     = event.target;
		if (target != canvas) { // 'this' is our HTMLElement
			offsetX = target.offsetLeft + event.offsetX;
			offsetY = target.offsetTop  + event.offsetY;
			console.log('offset x, y => ' + offsetX + ', ' + offsetY) }
		
		const x = offsetX;
		const y = offsetY;
		console.log('x, y => ' + x + ', ' + y);
		console.log('w, h => ' + this.width + ', ' + this.height);
		
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