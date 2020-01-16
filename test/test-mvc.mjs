"use strict";
import { TestModel      } from '/HafrenHaverJS/test/test-model';
import { TestView       } from '/HafrenHaverJS/test/test-view';
import { TestController } from '/HafrenHaverJS/test/test-controller';
import { MVC            } from '/HafrenHaverJS/mvc/mvc';

export function createMVC(id) {
	m   = new TestModel     (0, 0);
	v   = new TestGUI       (id);
	c   = new TestController();
	mvc = new MVC           (m, v, c);
	v.draw();
	return mvc }