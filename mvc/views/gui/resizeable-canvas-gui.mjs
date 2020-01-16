"use strict";
import { CanvasGUI } from '/HafrenHaverJS/mvc/views/gui/canvas-gui.mjs';

function resizeCanvasToDisplaySize(canvas) {
	// look up the size the canvas is being displayed
	const width  = canvas.clientWidth;
	const height = canvas.clientHeight;

	// If it's resolution does not match change it
	if (canvas.width !== width || canvas.height !== height) {
	 canvas.width  = width;
	 canvas.height = height;
	 return true }

	return false }

export class ResizeableCanvasGUI extends CanvasGUI {
	constructor(id) {
		super(id);
		const canvas  = this.element;
		resizeCanvasToDisplaySize(canvas);
		window.addEventListener('resize', ((event) => this.onResize(event)).bind(this), false) }
	onResize(event) {
		const canvas = this.element;
		if (! resizeCanvasToDisplaySize(canvas)) return;
		
		this.width  = canvas.width;
		this.height = canvas.height;
		this.handleResize();
		this.redraw() }
	// handleResize()
}