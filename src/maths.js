const { sum, subtract, multiply, divide, cube, square, complement,
    plusminus, percent, rootcube, rootsquare, rootxnum, degreexnum, factorial, degreeXten } = require('./basic-maths')

class Calculator {
    constructor(input, output) {
        this.inputDisplay = input
        this.outputDisplay = output
        this.inputHistory = []
        this.memoNumber = 0
        this.sum = sum
        this.minus = subtract
        this.multiply = multiply
        this.divide = divide
        this.cube = cube
        this.square = square
        this.complement = complement
        this.switchPlusMinus = plusminus
        this.switchNumPercent = percent
        this.rootCube = rootcube
        this.rootSquare = rootsquare
        this.rootXnum = rootxnum
        this.degreeXnum = degreexnum
        this.factorial = factorial
        this.degreeXten = degreeXten
    }
    memoClear() { //очистка числа в памяти
        this.memoNumber = 0
        console.log(this.memoNumber)
    }
    memoRead() { // вывод числа памяти на экран
        this.updateOutputDisplay(this.memoNumber)
        console.log(this.memoNumber)
    }
    memoPlus() { //число из памяти + число на экране
        this.memoNumber += Number(this.outputDisplay.value)
        console.log(this.memoNumber)
    }
    memoMinus() { //от числа из памяти отнять число на экране
        this.memoNumber -= Number(this.outputDisplay.value)
        console.log(this.memoNumber)
    }
    clearHistory() { //очистка истории полностью
        this.inputHistory = []
        this.updateInputDisplay()
        this.updateOutputDisplay()
    }
    backspace() { //удаление последнего элемента ввода
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
    insertNumber(value) { //ввод числа
        if (this.getLastElemType() === 'number') {
            this.addToLastValue(value)
        } else if (this.getLastElemType() === 'math' || this.getLastElemType() === null) {
            this.addNewInputInHistory(value, 'number')
        }
    }
    insertOperation(value) { //ввод операции
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
    doSquare() { //возведение в квадрат
        if (this.getLastElemType() === 'number') {
            this.editLastInput(this.square(this.getLastElemValue().toString()), 'number')
        } else if (this.getLastElemType() === null) {
            this.addNewInputInHistory(this.getOutputValue(), 'number')
            this.editLastInput(this.square(this.getLastElemValue().toString()), 'number')
            this.updateOutputDisplay('0')
        }
    }
    doCube() { //вохведение в куб
        if (this.getLastElemType() === 'number') {
            this.editLastInput(this.cube(this.getLastElemValue().toString()), 'number')
        } else if (this.getLastElemType() === null) {
            this.addNewInputInHistory(this.getOutputValue(), 'number')
            this.editLastInput(this.cube(this.getLastElemValue().toString()), 'number')
            this.updateOutputDisplay('0')
        }
    }
    doRootCube() { //кубический корень
        if (this.getLastElemType() === 'number') {
            this.editLastInput(this.rootCube(this.getLastElemValue().toString()), 'number')
        } else if (this.getLastElemType() === null) {
            this.addNewInputInHistory(this.getOutputValue(), 'number')
            this.editLastInput(this.rootCube(this.getLastElemValue().toString()), 'number')
            this.updateOutputDisplay('0')
        }
    }
    doRootSquare() { //квадратный корень
        if (this.getLastElemType() === 'number') {
            this.editLastInput(this.rootSquare(this.getLastElemValue().toString()), 'number')
        } else if (this.getLastElemType() === null) {
            this.addNewInputInHistory(this.getOutputValue(), 'number')
            this.editLastInput(this.rootSquare(this.getLastElemValue().toString()), 'number')
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
    doFactorial() { //факториал
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
    doDegreeXTen() {   //свозведение в степень десятку
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
    performOperation(leftOperand, operation, rightOperand) { // выполнение мат действия с двумя операндами слева и справа
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
        console.log(this.outputDisplay.value)
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