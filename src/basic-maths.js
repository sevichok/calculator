function switchPlusMinus(num) {
    return num * -1
}
function square(num) {
    return num * num
}
function cube(num) {
    return num * num * num
}
function complement(num) {
    return 1 / num
}
function switchNumPercent(num) {
    return num / 100
}
function sum(first, second) {
    return first + second
}

function minus(first, second) {
    return first - second
}
function multiply(first, second) {
    return first * second
}
function divide(first, second) {
    if (first === 0 || second === 0) {
        return 0
    }
    return first / second
}
function rootXnum(num, n) {
    if (num < 0 && n % 2 === 1)
        return num ** 1 / n;
    else
        return num ** 1 / n
}
function rooSquare(num) {
    if (num < 0)
        return (num * -1) ** (1 / 2);
    else
        return num ** (1 / 2)
}
function rootCube(num) {
    if (num < 0)
        return (num * -1) ** (1 / 3);
    else
        return num ** (1 / 3)
}
function degreeXnum(num, n) {
    if (n != 1) {
        return num *= degreeXnum(num, n - 1);
    } else {
        return num;
    }
}
function degreeXten(n) {
    return 10 ** n
}
function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1)
    }
}

module.exports = {
    sum: sum,
    divide: divide,
    multiply: multiply,
    subtract: minus,
    cube: cube,
    square: square,
    complement: complement,
    plusminus: switchPlusMinus,
    percent: switchNumPercent,
    rootsquare: rooSquare,
    rootcube: rootCube,
    rootxnum: rootXnum,
    factorial: factorial,
    degreexnum: degreeXnum,
    degreeXten: degreeXten,
}