"use strict";
import { ElementAudio } from '/HafrenHaverJS/elemental/element/element-audio.mjs';
import { SCALE_DB } from '/HafrenHaverJS/scale/scale-model.mjs';

export class ScaleElementAudio extends ElementAudio {
	playSound() {
		const index = this.mvc.model.index;
		const freq  = SCALE_DB[index][0];
		// TODO
	} }
