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
    @IBAction func enter(_ sender: UIButton) {
        isInTheMiddleOfTypingNumber = false
    }
    

}

