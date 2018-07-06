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
//# sourceMappingURL=Interfaces.js.map