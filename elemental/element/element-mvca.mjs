"use strict";
import { ElementMVC } from '/HafrenHaverJS/elemental/element/element-mvc.mjs'

export class ElementMVCA extends ElementMVC {
	constructor(parent, audio) {
		super(parent)
		this.audio = audio;
		audio.mvc  = this } }