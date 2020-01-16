"use strict";
import { Controller } from '/HafrenHaverJS/mvc/controller.mjs';

export class SolfeggioController extends Controller {
	setIndex(index) {
		const mvc   = this.mvc;
		const model = mvc.model;
		model.index = index;
		mvc.view.redraw();
		// TODO play note
} }