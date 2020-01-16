"use strict";
import { TestModel      } from '/HafrenHaverJS/test/test-model.mjs';
import { TestView       } from '/HafrenHaverJS/test/test-view.mjs';
import { TestController } from '/HafrenHaverJS/test/test-controller.mjs';
import { MVC            } from '/HafrenHaverJS/mvc/mvc.mjs';

export function createMVC(id) {
	m   = new TestModel     (0, 0);
	v   = new TestGUI       (id);
	c   = new TestController();
	mvc = new MVC           (m, v, c);
	v.draw();
	return mvc }