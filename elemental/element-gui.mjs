"use strict";
import { View } from '/HafrenHaverJS/mvc/views/view.mjs';

export class ElementView extends View {
	constructor(element) {
		super();
		this.parent = element;
	}
	// draw() { }
}