"use strict";

export class MVC {
	//model;
	//view;
	//controller;
	constructor(model, view, controller) {
		super();
		this.model      = model;
		this.view       = view;
		this.controller = controller;
		model     .mvc  = this;
		view      .mvc  = this;
		controller.mvc  = this;
		view.draw() }
	get model     () { return this.model      }
	get view      () { return this.view       }
	get controller() { return this.controller } }