"use strict";
import { View } from '/HafrenHaverJS/mvc/views/view.mjs';

export class GUI extends View {
	//id;
	//element;
	constructor(id) {
		super();
		this.id      = id;
		this.element = document.getElementById(id) }
	//get id     () { return this.id      }
	//get element() { return this.element }
}