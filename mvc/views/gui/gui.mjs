"use strict";
import { View } from '/mvc/views/view';

export class GUI extends View {
	id;
	element;
	constructor(id) {
		this.id      = id;
		this.element = document.getElementById(id) }
	get id     () { return this.id      }
	get element() { return this.element } }