"use strict";
import { CanvasGUI } from '/HafrenHaverJS/mvc/views/gui/canvas-gui.mjs';

export class TestGUI extends CanvasGUI {
	constructor(id) { super(id) }
	function handleClick(x, y) { super.mvc.controller.setXY(x, y) }	
	function draw() {
		ctx.save();
		
		const x          = super.mvc.model.x;
		const y          = super.mvc.model.y;
		const text       = "(" + x + ", " + y + ")";
		const ctx        = this.ctx;
		ctx.font         = '8pt Calibri';
		ctx.textAlign    = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillStyle    = fillStyle
		ctx.fillText(text, x, y);
		
		ctx.restore() }
}