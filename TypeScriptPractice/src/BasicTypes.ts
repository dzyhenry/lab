// Basic Types in TypeScript
/*
 * Boolean: boolean
 * Number: number
 * String: string
 * Array: [], Array<number>
 * Tuple: [string, number]
 * Enum: enum Color { Red = 1, Green, Blue, Yellow }
 * Any: any
 * Undefined: undefined
 * Null: null
 * Never: never
*/

let notSure: any = 4
notSure = 'may be a string instead'

// void
function warnUser(): void {
    alert("This is a warning message")
}

// never
function throwError(): never {
    throw new Error('error')
}

let unuseable: void = null

// type assertions
let someValue: any = "This is a string"
let stringLength: number = (<string>someValue).length
console.log("stringLenth12 => ", stringLength);

let stringLength2: number = (someValue as string).length
console.log("stringLength2 => ", stringLength)