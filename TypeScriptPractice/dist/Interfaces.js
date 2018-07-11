var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: 'Size 10 Objects.' };
printLabel(myObj);
function createSquare(square) {
    console.log('in createSquare', square);
    var newSquare = { color: 'white', area: 100 };
    if (square.color) {
        newSquare.color = square.color;
    }
    if (square.width) {
        newSquare.area = square.width * 4;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'dark' });
var mySquare1 = createSquare({ area: 12, colour: 'dark' });
console.log('my square1', mySquare1);
var p1 = { x: 10, y: 10 };
var arrNum = [1, 2, 3, 4];
var arrNumReadOnly = arrNum;
var searchFunc;
searchFunc = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var myArray;
myArray = ['Bob', 'Fred'];
function createClock(ctor, hour, minite) {
    return new ctor(hour, minite);
}
var DigitalClock = (function () {
    function DigitalClock(h, m) {
        this.hour = h;
        this.minite = m;
    }
    DigitalClock.prototype.setTime = function (d) {
        this.currentDate = d;
    };
    return DigitalClock;
}());
var square = {};
square.color = 'Blue';
square.sideLength = 10;
square.penWidth = 5.0;
function getCounter() {
    var counter = function (start) { };
    counter.interval = 10;
    counter.reset = function () { };
    return counter;
}
var cc = getCounter();
cc(10);
cc.reset();
cc.interval = 5;
var Control = (function () {
    function Control() {
    }
    return Control;
}());
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () {
    };
    return Button;
}(Control));
//# sourceMappingURL=Interfaces.js.map