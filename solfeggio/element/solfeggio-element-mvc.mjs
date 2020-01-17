"use strict";
import { ElementMVCA                } from '/HafrenHaverJS/elemental/element/element-mvca.mjs';
import { SolfeggioElementModel      } from '/HafrenHaverJS/solfeggio/element/solfeggio-element-model.mjs';
import { SolfeggioElementView       } from '/HafrenHaverJS/solfeggio/element/solfeggio-element-view.mjs';
import { SolfeggioElementController } from '/HafrenHaverJS/solfeggio/element/solfeggio-element-controller.mjs';
import { SolfeggioElementAudio      } from '/HafrenHaverJS/solfeggio/element/solfeggio-element-audio.mjs';

export class SolfeggioElementMVC extends ElementMVCA {
	constructor(parent, w2, h2, r2, theta, roff, index) {
		const m = new SolfeggioElementModel(w2, h2, r2, theta, roff, index);
		const v = new SolfeggioElementView();
		const c = new SolfeggioController();
		const a = new SolfeggioAudio();
		super(m, v, c, a);
		this.parent = parent } }