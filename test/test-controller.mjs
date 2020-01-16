"use strict";
import { Controller } from '/HafrenHaverJS/mvc/controller.mjs';

export class TestController extends Controller {
	setXY(x, y) {
		super.mvc.model.x = x;
		super.mvc.model.y = y;
		super.mvc.view.redraw() } }