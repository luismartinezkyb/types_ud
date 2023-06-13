"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const shape_1 = require("./shape");
class Circle extends shape_1.Shape {
    sum(a, b) {
        return a + b;
    }
    difference(a, b) {
        return a - b;
    }
    disp() {
        console.log(this.area);
    }
}
exports.Circle = Circle;
Circle.value = 20;
