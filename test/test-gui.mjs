"use strict";
import { CanvasGUI } from '/HafrenHaverJS/mvc/views/gui/canvas-gui.mjs';

export class TestGUI extends CanvasGUI {
	constructor(id) { super(id) }
	handleClick(x, y) { super.mvc.controller.setXY(x, y) }	
	draw() {	
		const model      = this.mvc.model;
		const x          = model.x;
		const y          = model.y;
		const text       = "(" + x + ", " + y + ")";
		const ctx        = this.ctx;
		
		ctx.save();
		
		ctx.font         = '8pt Calibri';
		ctx.textAlign    = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillStyle    = 'red'; // TODO ?
		ctx.fillText(text, x, y);
		
		ctx.restore() }
}