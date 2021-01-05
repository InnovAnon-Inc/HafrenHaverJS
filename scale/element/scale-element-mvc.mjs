"use strict";
import { ElementMVCA                } from '/HafrenHaverJS/elemental/element/element-mvca.mjs';
import { ScaleElementModel      } from '/HafrenHaverJS/scale/element/scale-element-model.mjs';
import { ScaleElementView       } from '/HafrenHaverJS/scale/element/scale-element-view.mjs';
import { ScaleElementController } from '/HafrenHaverJS/scale/element/scale-element-controller.mjs';
import { ScaleElementAudio      } from '/HafrenHaverJS/scale/element/scale-element-audio.mjs';

export class ScaleElementMVC extends ElementMVCA {
	constructor(parent, w2, h2, r2, theta, roff, index) {
		const m = new ScaleElementModel(w2, h2, r2, theta, roff, index);
		const v = new ScaleElementView();
		const c = new ScaleController();
		const a = new ScaleAudio();
		super(m, v, c, a);
		this.parent = parent } }
