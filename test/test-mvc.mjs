"use strict";
import { TestModel      } from '/HafrenHaverJS/test/test-model.mjs';
import { TestGUI        } from '/HafrenHaverJS/test/test-gui.mjs';
import { TestController } from '/HafrenHaverJS/test/test-controller.mjs';
import { MVC            } from '/HafrenHaverJS/mvc/mvc.mjs';

export class TestMVC extends MVC {
	constructor(id) {
		const m = new TestModel     (0, 0);
		const v = new TestGUI       (id);
		const c = new TestController();
		super(m, v, c);
		v.draw() } }