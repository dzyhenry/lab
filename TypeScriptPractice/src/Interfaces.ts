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



