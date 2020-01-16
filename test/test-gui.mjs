"use strict";
import { CanvasGUI } from '/HafrenHaverJS/mvc/views/gui/canvas-gui.mjs';

export class TestGUI extends CanvasGUI {
	constructor(id) { super(id) }
	handleClick(x, y) { super.mvc.controller.setXY(x, y) }	
	draw() {	
		const x          = super.mvc.model.x;
		const y          = super.mvc.model.y;
		const text       = "(" + x + ", " + y + ")";
		const ctx        = super.ctx;
		
		this.ctx.save();
		
		ctx.font         = '8pt Calibri';
		ctx.textAlign    = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillStyle    = 'red'; // TODO ?
		ctx.fillText(text, x, y);
		
		ctx.restore() }
}