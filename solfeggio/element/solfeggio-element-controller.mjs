"use strict";
import { ElementController } from '/HafrenHaverJS/elemental/element/element-controller.mjs';

export class SolfeggioElementController extends ElementController {
	handleClick() { this.mvc.audio.playSound() } }