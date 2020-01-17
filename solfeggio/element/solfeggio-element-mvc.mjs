"use strict";
import { ElementMVC                 } from '/HafrenHaverJS/elemental/element/element-mvc.mjs';
import { SolfeggioElementModel      } from '/HafrenHaverJS/solfeggio/element/solfeggio-element-model.mjs'
import { SolfeggioElementView       } from '/HafrenHaverJS/solfeggio/element/solfeggio-element-view.mjs'
import { SolfeggioElementController } from '/HafrenHaverJS/solfeggio/element/solfeggio-element-controller.mjs'

export class SolfeggioElementMVC extends ElementMVC {
	constructor(parent, w2, h2, r2, theta, roff, entry, index) {
		const m = new SolfeggioElementModel(w2, h2, r2, theta, roff, index);
		const v = new SolfeggioElementView();
		const c = new SolfeggioController();
		super(m, v, c);
		this.parent = parent } }