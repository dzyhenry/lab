//
//  ViewController.swift
//  Calculator
//
//  Created by dzyhenry on 2018/5/16.
//  Copyright © 2018年 dzyhenry. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var resultLabel: UILabel!
    var isInTheMiddleOfTypingNumber = false
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    @IBAction func appendDigit(_ sender: UIButton) {
        let digit = sender.currentTitle!
        if isInTheMiddleOfTypingNumber {
            resultLabel.text = resultLabel.text! + digit
        } else {
            resultLabel.text = digit
            isInTheMiddleOfTypingNumber = true
        }
    }
    var operandStack = [Double]()
    @IBAction func enter() {
        isInTheMiddleOfTypingNumber = false
        operandStack.append(displayValue)
        print(operandStack)
    }
    
    var displayValue: Double {
        get {
            return NumberFormatter().number(from: resultLabel.text!)!.doubleValue
        }
        set {
            resultLabel.text = "\(newValue)"
            isInTheMiddleOfTypingNumber = false
        }
    }
    
    @IBAction func operate(_ sender: UIButton) {
        if isInTheMiddleOfTypingNumber {
            enter()
        }
        let operation = sender.currentTitle!
        switch operation {
        case "×": performOperation(multiply)
        case "÷": performOperation(divide)
        case "＋": performOperation(add)
        case "－": performOperation(minus)
        default:
            break
        }
    }
    
    func performOperation(_ operation: (Double, Double) -> Double) {
        if operandStack.count >= 2 {
            displayValue = operation(operandStack.removeLast(),  operandStack.removeLast())
            enter()
        }
    }
    
    func multiply(op1: Double, op2: Double) -> Double {
       return op1 * op2
    }
    func divide(op1: Double, op2: Double) -> Double {
        return op1 / op2
    }
    func add(op1: Double, op2: Double) -> Double {
        return op1 + op2
    }
    func minus(op1: Double, op2: Double) -> Double {
        return op1 - op2
    }
}
