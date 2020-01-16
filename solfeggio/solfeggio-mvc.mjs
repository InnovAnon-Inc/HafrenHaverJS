"use strict";
import { SolfeggioModel      } from '/HafrenHaverJS/solfeggio/solfeggio-model.mjs';
import { SolfeggioGUI        } from '/HafrenHaverJS/solfeggio/solfeggio-gui.mjs';
import { SolfeggioController } from '/HafrenHaverJS/solfeggio/solfeggio-controller.mjs';
import { MVC                 } from '/HafrenHaverJS/mvc/mvc.mjs';

export class SolfeggioMVC extends MVC {
	constructor(id) {
		const m = new SolfeggioModel     ();
		const v = new SolfeggioGUI       (id);
		const c = new SolfeggioController();
		super(m, v, c) } }