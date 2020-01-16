"use strict";
import { GUI } from '/mvc/views/gui/gui';

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
	function onClick(event) {
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
	function redraw() {
		ctx.save();
		ctx.clearRect(0, 0, this.width, this.height);
		this.draw();
		ctx.restore() }
	// function draw() {}
	// function handleClick(x, y) {}
}