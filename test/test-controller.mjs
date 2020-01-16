"use strict";
import { Controller } from '/HafrenHaverJS/mvc/controller.mjs';

export class TestController extends Controller {
	setXY(x, y) {
		const mvc   = this.mvc;
		const model = mvc.model;
		model.x = x;
		model.y = y;
		mvc.view.redraw() } }