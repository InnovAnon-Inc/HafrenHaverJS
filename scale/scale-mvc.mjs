"use strict";
import { ScaleModel      } from '/HafrenHaverJS/scale/scale-model.mjs';
import { ScaleGUI        } from '/HafrenHaverJS/scale/scale-gui.mjs';
import { ScaleController } from '/HafrenHaverJS/scale/scale-controller.mjs';
import { MVC                 } from '/HafrenHaverJS/mvc/mvc.mjs';

export class ScaleMVC extends MVC {
	constructor(id) {
		const m = new ScaleModel     ();
		// TODO make 'v' a parameter, so client can use CLI
		const v = new ScaleGUI       (id);
		const c = new ScaleController();
		super(m, v, c) } }
