"use strict";

export class MVC {
	model;
	view;
	controller;
	constructor(model, view, controller) {
		this.model      = model;
		this.view       = view;
		this.controller = controller;
		model     .mvc  = this;
		view      .mvc  = this;
		controller.mvc  = this }
	get model     () { return this.model      }
	get view      () { return this.view       }
	get controller() { return this.controller } }