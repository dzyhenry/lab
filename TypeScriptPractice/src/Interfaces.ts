interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: 'Size 10 Objects.' }
printLabel(myObj);

interface Square {
    color?: string;
    width?: number;
}
function createSquare(square: Square): { color: string, area: number } {
    console.log('in createSquare', square)
    let newSquare = { color: 'white', area: 100 };
    if (square.color) {
        newSquare.color = square.color;
    }
    if (square.width) {
        newSquare.area = square.width * 4;
    }
    return newSquare;
}

let mySquare = createSquare({ color: 'dark' } as Square);
let mySquare1 = createSquare({ area: 12, colour: 'dark' } as Square);
console.log('my square1', mySquare1);

interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 10 };
// p1.x = 14;

let arrNum: number[] = [1, 2, 3, 4];
let arrNumReadOnly: ReadonlyArray<number> = arrNum;
// arrNumReadOnly[0] = 2;
// arrNumReadOnly.push(5);
// arrNum = arrNumReadOnly;

/**
*  The easiest way to remember whether to use readonly or const is to ask whether you’re using it on a variable or a property.
*  Variables use const whereas properties use readonly.
**/

interface SearchFunc {
    (source: string, subString: string): boolean;
}
let searchFunc: SearchFunc;
searchFunc = function(source: string, subString: string): boolean {
    let result = source.search(subString);
    return result > -1;
}

/**
 * indexable types
 */
interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ['Bob', 'Fred' ];

/**
 * Class Types
 * Since the constructor sits in the static side, it is not included in this check.
 */
interface ClockInterface {
    minite: number;
    hour: number;
    currentDate: Date;
    setTime(d: Date): void;
}
interface ClockContructor {
    new (hour: number, minite: number): ClockInterface;
}
function createClock(ctor: ClockContructor, hour: number, minite: number): ClockInterface {
    return new ctor(hour, minite);
}

class DigitalClock implements ClockInterface {
    hour: number;
    minite: number;
    currentDate: Date;
    constructor(h: number, m: number) {
        this.hour = h;
        this.minite = m;
    }
    setTime(d: Date) {
        this.currentDate = d;
    }
}

/**
 * extending interface
 */
interface Shape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
interface Squaree extends Shape, PenStroke {
    sideLength: number;
}

let square = <Squaree>{};
square.color = 'Blue';
square.sideLength = 10;
square.penWidth = 5.0;


/**
 * hybrid types
 */
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    const counter = <Counter> function(start: number) { };
    counter.interval = 10;
    counter.reset = function() {};
    return counter;
}
let cc = getCounter();
cc(10);
cc.reset();
cc.interval = 5;

/**
 * Interfaces Extending Classes
 */
class Control {
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}
class Button extends Control implements SelectableControl {
    select() {

    }
}

// class Image implements SelectableControl {
//     select() {

//     }
// }