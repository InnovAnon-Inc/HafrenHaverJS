"use strict";
import { Controller } from '/HafrenHaverJS/mvc/controller';

export class TestController extends Controller {
	function setXY(x, y) {
		super.mvc.model.x = x;
		super.mvc.model.y = y;
		super.mvc.view.redraw() } }