"use strict";
import { TestModel      } from '/HafrenHaverJS/test/test-model';
import { TestView       } from '/HafrenHaverJS/test/test-view';
import { TestController } from '/HafrenHaverJS/test/test-controller';
import { MVC            } from '/HafrenHaverJS/mvc/mvc';

export function createMVC(id) {
	Model      m = new TestModel     (0, 0);
	View       v = new TestGUI       (id);
	Controller c = new TestController();
	MVC mvc      = new MVC           (m, v, c);
	v.draw();
	return mvc }