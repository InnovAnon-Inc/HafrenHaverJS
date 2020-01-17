"use strict";
import { ElementAudio } from '/HafrenHaverJS/elemental/element/element-audio.mjs';
import { SOLFEGGIO_DB } from '/HafrenHaverJS/solfeggio/solfeggio-model.mjs';

export class SolfeggioElementAudio extends ElementAudio {
	playSound() {
		const index = this.mvc.model.index;
		const freq  = SOLFEGGIO_DB[index][0];
		// TODO
	} }