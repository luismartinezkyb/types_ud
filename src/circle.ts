import { Calculator } from "./calculator";
import { Shape } from "./shape";



export class Circle extends Shape implements Calculator{
    sum(a: number, b: number): number {
        return a+b;
    }
    difference(a: number, b: number): number {
        return a-b;
    }
    static value:number = 20;
    disp():void{
        console.log(this.area);
    }
}