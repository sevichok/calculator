const { Calculator, User } = require('./maths')

const input = document.getElementById('history')
const output = document.getElementById('result')
const backspaceButton = document.getElementById('backspace')
const percentButton = document.getElementById('percent')
const plusMinusButton = document.getElementById('plus-minus')
const equalButton = document.querySelector('[data-equal]')
const dotButton = document.getElementById('dot')
const numButtons = document.querySelectorAll('.operator-num')
const mathButtons = document.querySelectorAll('[data-math]')

const squareButton = document.getElementById('square')
const cubeButton = document.getElementById('cube')
const complementButton = document.getElementById('complement')
const cleanAllButton = document.getElementById('clean')
const rootSquareButton = document.getElementById('root-square')
const rootCubeButton = document.getElementById('root-cube')
const factorialButton = document.getElementById('factorial')
const degreeXTenButton = document.getElementById('degree-x-ten')
degreeXTenButton.addEventListener('click', () => {
    calculator.doDegreeXTen()
})

const memoClear = document.getElementById('mc')
memoClear.addEventListener('click', () => {
    calculator.memoClear()
})
const memoPlus = document.getElementById('m+')
memoPlus.addEventListener('click', () => {
    calculator.memoPlus()
})
const memoMinus = document.getElementById('m-')
memoMinus.addEventListener('click', () => {
    calculator.memoMinus()
})
const memoRead = document.getElementById('mr')
memoRead.addEventListener('click', () => {
    calculator.memoRead()
})

const calculator = new Calculator(input, output)
module.exports = {
    sum: calculator.sum,
    divide: calculator.divide,
    multiply: calculator.multiply,
    subtract: calculator.minus,
    cube: calculator.cube,
    square: calculator.square,
    complement: calculator.complement,
    plusminus: calculator.switchPlusMinus,
    percent: calculator.switchNumPercent,
    rootsquare: calculator.rooSquare,
    rootcube: calculator.rootCube,
    rootxnum: calculator.rootXnum,
    factorial: calculator.factorial,
    degreexnum: calculator.degreeXnum,
}

class OnPercentSwitch {
    constructor(calculator) {
        this.calculator = calculator
    }
    execute() {
        this.calculator.percent()
    }
}
if (percentButton) {
    percentButton.addEventListener('click', () => {
        const onPercentSwitch = new OnPercentSwitch(calculator)
        const userPercent = new User(onPercentSwitch)
        userPercent.execute()
    })
}
class OnBackspace {
    constructor(calculator) {
        this.calculator = calculator
    }
    execute() {
        this.calculator.backspace()
    }
}
if (backspaceButton) {
    backspaceButton.addEventListener('click', () => {
        const onBackspace = new OnBackspace(calculator)
        const userBackspace = new User(onBackspace)
        userBackspace.execute()
    })
}
class OnPlusMinus {
    constructor(calculator) {
        this.calculator = calculator
    }
    execute() {
        this.calculator.plusminus()
    }
}
if (plusMinusButton) {
    plusMinusButton.addEventListener('click', () => {
        const onPlusMinus = new OnPlusMinus(calculator)
        const userPlusMinus = new User(onPlusMinus)
        userPlusMinus.execute()
    })
}
class OnInsertDot {
    constructor(calculator) {
        this.calculator = calculator
    }
    execute() {
        this.calculator.insertDot()
    }
}
if (dotButton) {
    dotButton.addEventListener('click', () => {
        const onInsertDot = new OnInsertDot(calculator)
        const userInserDot = new User(onInsertDot)
        userInserDot.execute()
    })
}
class OnInsertNumber {
    constructor(calculator, value) {
        this.calculator = calculator
        this.value = value
    }
    execute() {
        this.calculator.insertNumber(this.value)
    }
}
numButtons.forEach(button => button.addEventListener('click', (event) => {
    const onInsertNumber = new OnInsertNumber(calculator, event.target.dataset.type)
    const userInsertNumber = new User(onInsertNumber)
    userInsertNumber.execute()
}))
class OnInsertOperation {
    constructor(calculator, value) {
        this.calculator = calculator
        this.value = value
    }
    execute() {
        this.calculator.insertOperation(this.value)
    }
}
mathButtons.forEach(button => button.addEventListener('click', (event) => {
    const onInsertOperation = new OnInsertOperation(calculator, event.target.dataset.math)
    const userInsertOperation = new User(onInsertOperation)
    userInsertOperation.execute()
}))
class OnGenerateResult {
    constructor(calculator) {
        this.calculator = calculator
    }
    execute() {
        this.calculator.generateResult()
    }
}
if (equalButton) {
    equalButton.addEventListener('click', () => {
        const onGenerateResult = new OnGenerateResult(calculator)
        const userGenerateResult = new User(onGenerateResult)
        userGenerateResult.execute()
    })
}
class OnSquare {
    constructor(calculator) {
        this.calculator = calculator
    }
    execute() {
        this.calculator.doSquare()
    }
}
if (squareButton) {
    squareButton.addEventListener('click', () => {
        const onSquare = new OnSquare(calculator)
        const userSquare = new User(onSquare)
        userSquare.execute()
    })
}
class OnCube {
    constructor(calculator) {
        this.calculator = calculator
    }
    execute() {
        this.calculator.doCube()
    }
}
if (cubeButton) {
    cubeButton.addEventListener('click', () => {
        const onCube = new OnCube(calculator)
        const userCube = new User(onCube)
        userCube.execute()
    })
}
class OnComplement {
    constructor(calculator) {
        this.calculator = calculator
    }
    execute() {
        this.calculator.doComplement()
    }
}
if (complementButton) {
    complementButton.addEventListener('click', () => {
        const onComplement = new OnComplement(calculator)
        const userComplement = new User(onComplement)
        userComplement.execute()
    })
}
class OnClearHistory {
    constructor(calculator) {
        this.calculator = calculator
    }
    execute() {
        this.calculator.clearHistory()
    }
}
if (cleanAllButton) {
    cleanAllButton.addEventListener('click', () => {
        const onClearHistory = new OnClearHistory(calculator)
        const userClearHistory = new User(onClearHistory)
        userClearHistory.execute()
    })
}
class OnSquareRoot {
    constructor(calculator) {
        this.calculator = calculator
    }
    execute() {
        this.calculator.doRootSquare()
    }
}
if (rootSquareButton) {
    rootSquareButton.addEventListener('click', () => {
        const onSquareRoot = new OnSquareRoot(calculator)
        const userSquareRoot = new User(onSquareRoot)
        userSquareRoot.execute()
    })
}
class OnCubeRoot {
    constructor(calculator) {
        this.calculator = calculator
    }
    execute() {
        this.calculator.doRootCube()
    }
}
if (rootCubeButton) {
    rootCubeButton.addEventListener('click', () => {
        const onCubeRoot = new OnCubeRoot(calculator)
        const userCubeRoot = new User(onCubeRoot)
        userCubeRoot.execute()
    })
}
class OnFactorial {
    constructor(calculator) {
        this.calculator = calculator
    }
    execute() {
        this.calculator.doFactorial()
    }
}
if (factorialButton) {
    factorialButton.addEventListener('click', () => {
        const onFactorial = new OnFactorial(calculator)
        const userFactorial = new User(onFactorial)
        userFactorial.execute()
    })
}