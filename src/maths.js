class Calculator {
    constructor(input, output) {
        this.inputDisplay = input
        this.outputDisplay = output
        this.inputHistory = []
        this.memoNumber = 0
    }
    memoClear() {
        this.memoNumber = 0
        console.log(this.memoNumber)
    }
    memoRead() {
        this.updateOutputDisplay(this.memoNumber)
        console.log(this.memoNumber)
    }
    memoPlus() {
        this.memoNumber += Number(this.outputDisplay.value)
        console.log(this.memoNumber)
    }
    memoMinus() {
        this.memoNumber -= Number(this.outputDisplay.value)
        console.log(this.memoNumber)
    }
    clearHistory() {
        this.inputHistory = []
        this.updateInputDisplay()
        this.updateOutputDisplay()
    }
    backspace() {
        switch (this.getLastElemType()) {
            case 'number':
                if (this.getLastElemValue().length > 1) {
                    this.editLastInput(this.getLastElemValue().slice(0, -1), 'number')
                } else {
                    this.deleteLastInput()
                }
                break;
            case 'math':
                this.deleteLastInput()
                break;
            default:
                return;
        }
    }
    insertNumber(value) {
        if (this.getLastElemType() === 'number') {
            this.addToLastValue(value)
        } else if (this.getLastElemType() === 'math' || this.getLastElemType() === null) {
            this.addNewInputInHistory(value, 'number')
        }
    }
    insertOperation(value) {
        switch (this.getLastElemType()) {
            case 'number':
                if (this.inputHistory.length === 3) {
                    this.generateResult()
                }
                this.addNewInputInHistory(value, "math")
                break;
            case 'math':
                this.editLastInput(value, 'math')
                break;
            case 'equal':
                let output = this.getOutputValue()
                this.clearHistory()
                this.addNewInputInHistory(output, 'number')
                this.addNewInputInHistory(value, 'math')
                break;
            case null:
                this.addNewInputInHistory(this.getOutputValue(), 'number')
                this.addNewInputInHistory(value, 'math')
            default:
                return;
        }
    }
    percent() { //перевод числа в проценты
        if (this.getLastElemType() === 'number') {
            this.editLastInput(this.switchNumPercent(this.getLastElemValue().toString()), 'number')
        } else if (this.getLastElemType() === null) {
            this.addNewInputInHistory(this.getOutputValue(), 'number')
            this.editLastInput(this.switchNumPercent(this.getLastElemValue().toString()), 'number')
            this.updateOutputDisplay('0')
        }
    }
    doSquare() { //
        if (this.getLastElemType() === 'number') {
            this.editLastInput(this.square(this.getLastElemValue().toString()), 'number')
        } else if (this.getLastElemType() === null) {
            this.addNewInputInHistory(this.getOutputValue(), 'number')
            this.editLastInput(this.square(this.getLastElemValue().toString()), 'number')
            this.updateOutputDisplay('0')
        }
    }
    doCube() { //
        if (this.getLastElemType() === 'number') {
            this.editLastInput(this.cube(this.getLastElemValue().toString()), 'number')
        } else if (this.getLastElemType() === null) {
            this.addNewInputInHistory(this.getOutputValue(), 'number')
            this.editLastInput(this.cube(this.getLastElemValue().toString()), 'number')
            this.updateOutputDisplay('0')
        }
    }
    doRootCube() { //
        if (this.getLastElemType() === 'number') {
            this.editLastInput(this.rootCube(this.getLastElemValue().toString()), 'number')
        } else if (this.getLastElemType() === null) {
            this.addNewInputInHistory(this.getOutputValue(), 'number')
            this.editLastInput(this.rootCube(this.getLastElemValue().toString()), 'number')
            this.updateOutputDisplay('0')
        }
    }
    doRootSquare() { //
        if (this.getLastElemType() === 'number') {
            this.editLastInput(this.rooSquare(this.getLastElemValue().toString()), 'number')
        } else if (this.getLastElemType() === null) {
            this.addNewInputInHistory(this.getOutputValue(), 'number')
            this.editLastInput(this.doRootSquare(this.getLastElemValue().toString()), 'number')
            this.updateOutputDisplay('0')
        }
    }
    doComplement() { //
        if (this.getLastElemType() === 'number') {
            this.editLastInput(this.complement(this.getLastElemValue().toString()), 'number')
        } else if (this.getLastElemType() === null) {
            this.addNewInputInHistory(this.getOutputValue(), 'number')
            this.editLastInput(this.complement(this.getLastElemValue().toString()), 'number')
            this.updateOutputDisplay('0')
        }
    }
    doFactorial() { //
        if (this.getLastElemType() === 'number') {
            this.editLastInput(this.factorial(this.getLastElemValue().toString()), 'number')
        } else if (this.getLastElemType() === null) {
            this.addNewInputInHistory(this.getOutputValue(), 'number')
            this.editLastInput(this.factorial(this.getLastElemValue().toString()), 'number')
            this.updateOutputDisplay('0')
        }
    }
    plusminus() {   //смена знака у числа
        if (this.getLastElemType() === 'number') {
            this.editLastInput(this.switchPlusMinus(this.getLastElemValue().toString()), 'number')
        } else if (this.getLastElemType() === null) {
            this.addNewInputInHistory(this.getOutputValue(), 'number')
            this.editLastInput(this.switchPlusMinus(this.getLastElemValue().toString()), 'number')
            this.updateOutputDisplay('0')
        }
    }
    doDegreeXTen() {   //смена знака у числа
        if (this.getLastElemType() === 'number') {
            this.editLastInput(this.degreeXten(this.getLastElemValue().toString()), 'number')
        } else if (this.getLastElemType() === null) {
            this.addNewInputInHistory(this.getOutputValue(), 'number')
            this.editLastInput(this.degreeXten(this.getLastElemValue().toString()), 'number')
            this.updateOutputDisplay('0')
        }
    }
    insertDot() {   //добавляем плавающую точку
        if (this.getLastElemType() === 'number' && !this.getLastElemValue().includes('.')) {
            this.addToLastValue('.')
        } else if (this.getLastElemType() === 'math' || this.getLastElemType() === null) {
            this.addNewInputInHistory('0.', 'number')
        }
    }
    generateResult() {  //получение результата
        if (this.getLastElemType() === 'number') {
            const self = this
            const simplifyExpression = function (currentExpression, math) {
                if (currentExpression.indexOf(math) === -1) {
                    return currentExpression
                } else {
                    let mathIndex = currentExpression.indexOf(math)
                    let leftOperandIndex = mathIndex - 1
                    let rightOperandIndex = mathIndex + 1
                    let partialSolution = parseFloat(self.performOperation(...currentExpression.slice(leftOperandIndex, rightOperandIndex + 1)))
                    currentExpression.splice(leftOperandIndex, 3, partialSolution.toString())
                    return simplifyExpression(currentExpression, math)
                }
            }
            let result = ['+', '-', '*', '/', '/x', '*x'].reduce(simplifyExpression, this.getAllInputValues())
            this.addNewInputInHistory('=', 'equal')
            if (this.inputHistory.length > 3) {
                this.clearHistory()
                this.addNewInputInHistory(result, 'number')
            }
            this.updateOutputDisplay(result.toString())
            this.updateInputDisplay()
        }
    }
    //HELPER FUNCTIONS
    switchPlusMinus(num) {
        return num * -1
    }
    square(num) {
        return num * num
    }
    cube(num) {
        return num * num * num
    }
    complement(num) {
        return 1 / num
    }
    switchNumPercent(num) {
        return num / 100
    }
    sum(first, second) {
        return first + second
    }

    minus(first, second) {
        return first - second
    }
    multiply(first, second) {
        return first * second
    }
    divide(first, second) {
        if (first === 0 || second === 0) {
            return 0
        }
        return first / second
    }
    rootXnum(num, n) {
        if (num < 0 && n % 2 === 1)
            return num ** 1 / n;
        else
            return num ** 1 / n
    }
    rooSquare(num) {
        if (num < 0)
            return (num * -1) ** (1 / 2);
        else
            return num ** (1 / 2)
    }
    rootCube(num) {
        if (num < 0)
            return (num * -1) ** (1 / 3);
        else
            return num ** (1 / 3)
    }
    degreeXnum(num, n) {
        if (n != 1) {
            return num *= this.degreeXnum(num, n - 1);
        } else {
            return num;
        }
    }
    degreeXten(n) {
        return 10 ** n
    }
    factorial(num) {
        if (num === 0) {
            return 1;
        } else {
            return num * this.factorial(num - 1)
        }
    }
    performOperation(leftOperand, operation, rightOperand) {
        leftOperand = parseFloat(leftOperand)
        rightOperand = parseFloat(rightOperand)
        if (Number.isNaN(leftOperand) || Number.isNaN(rightOperand)) {
            return;
        } else
            switch (operation) {
                case '+':
                    return this.sum(leftOperand, rightOperand)
                case '-':
                    return this.minus(leftOperand, rightOperand)
                case '*':
                    return this.multiply(leftOperand, rightOperand)
                case '/':
                    return this.divide(leftOperand, rightOperand)
                case '/x':
                    return this.rootXnum(leftOperand, rightOperand)
                case '*x':
                    return this.degreeXnum(leftOperand, rightOperand)
                default:
                    return;
            }
    }
    editLastInput(value, type) {
        this.inputHistory.pop()
        this.addNewInputInHistory(value, type)
    }
    deleteLastInput() {
        this.inputHistory.pop()
        this.updateInputDisplay()
    }
    addNewInputInHistory(value, type) {  //
        this.inputHistory.push({ 'type': type, 'value': value.toString().substr(0, 8) })
        this.updateInputDisplay()
        console.log(this.inputHistory)
    }
    updateInputDisplay() {   //обновляет значения в истории ввода
        this.inputDisplay.value = this.getAllInputValues().join(' ')
    }
    updateOutputDisplay(value) {  //
        this.outputDisplay.value = Number(value).toLocaleString()//toString()
    }
    addToLastValue(value) { //
        this.inputHistory[this.inputHistory.length - 1].value += value.toString()
        this.updateInputDisplay()
    }
    getOutputValue() {  //
        console.log(this.outputDisplay.value)//replace(/,/g, '')
        return this.outputDisplay.value.replace(/,/g, '.')
    }
    getLastElemValue() {//возвращает значение последнего введенного элемента
        return (this.inputHistory.length === 0) ? null : this.inputHistory[this.inputHistory.length - 1].value
    }
    getLastElemType() {  //возвращает тип последнего введенного элемента
        return (this.inputHistory.length === 0) ? null : this.inputHistory[this.inputHistory.length - 1].type
    }
    getAllInputValues() { //возвращает все введенные значения из истории ввода
        return this.inputHistory.map(element => element.value)
    }
}
class User {
    constructor(command) {
        this.command = command
    }
    execute() {
        this.command.execute()
    }
}

module.exports = { Calculator, User }