"use strict";
import { TestModel      } from '/test/test-model';
import { TestView       } from '/test/test-view';
import { TestController } from '/test/test-controller';
import { MVC            } from '/mvc/mvc';

export function createMVC(id) {
	Model      m = new TestModel     (0, 0);
	View       v = new TestGUI       (id);
	Controller c = new TestController();
	MVC mvc      = new MVC           (m, v, c);
	v.draw();
	return mvc }