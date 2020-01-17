"use strict";
import { ElementModel      } from '/HafrenHaverJS/elemental/element/element-model.mjs';
import { ElementView       } from '/HafrenHaverJS/elemental/element/element-view.mjs';
import { ElementController } from '/HafrenHaverJS/elemental/element/element-controller.mjs';
import { MVC               } from '/HafrenHaverJS/mvc/mvc.mjs';

export class ElementMVC extends MVC {
	constructor(parent) {
		const m = new ElementModel     ();
		// TODO make 'v' a parameter, so client can use CLI
		const v = new ElementView      ();
		const c = new ElementController();
		super(m, v, c);
		this.parent = parent } }