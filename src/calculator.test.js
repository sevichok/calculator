const { sum, subtract, multiply, divide, cube, square, complement,
    plusminus, percent, rootcube, rootsquare, rootxnum, degreexnum, factorial } = require('./calculator')

describe("my first test plusminus", () => {
    test("testing plusminus first", () => {
        expect(plusminus(3)).toEqual(-3);
    });

    test("testing plusminus second", () => {
        expect(plusminus(-0.55)).toEqual(0.55);
    });
});

// describe("my first test degreexnum", () => {
//     test("testing degreexnum first", () => {
//         expect(degreexnum(0.3,6)).toEqual(0.000728);
//     });

//     test("testing degreexnum second", () => {
//         expect(degreexnum(5,7)).toEqual(78125);
//     });
// });

describe("my first test rootxnum", () => {
    test("testing rootxnum first", () => {
        expect(rootxnum(3,5)).toEqual(0.6);
    });

    test("testing rootxnum second", () => {
        expect(rootxnum(5,7)).toEqual(0.7142857142857143);
    });
});

describe("my first test rootsquare", () => {
    test("testing rootsquare first", () => {
        expect(rootsquare(4)).toEqual(2);
    });

    test("testing plusminus second", () => {
        expect(rootsquare(81)).toEqual(9);
    });
});

describe("my first test rootcube", () => {
    test("testing rootcube first", () => {
        expect(rootcube(27)).toEqual(3);
    });

    test("testing plusminus second", () => {
        expect(rootcube(64)).toEqual(3.9999999999999996);
    });
});

describe("my first test percent", () => {
    test("testing percent first", () => {
        expect(percent(3)).toEqual(0.03);
    });

    test("testing percent second", () => {
        expect(percent(1.5)).toEqual(0.015);
    });
});

// describe("my first test factorial", () => {
//     test("testing factorial first", () => {
//         expect(factorial(3)).toEqual(6);
//     });

//     test("testing factorial second", () => {
//         expect(factorial(5)).toEqual(120);
//     });
// });

describe("my first test sum", () => {
    test("testing sum first", () => {
        expect(sum(1, 1)).toEqual(2);
    });

    test("testing sum second", () => {
        expect(sum(10, 20)).toEqual(30);
    });
});

describe("my first test subtract", () => {
    test("testing subtract first", () => {
        expect(subtract(9, 5)).toEqual(4);
    });

    test("testing subtract second", () => {
        expect(subtract(4.5, 2)).toEqual(2.5);
    });
});

describe("my first test multiply", () => {
    test("testing multiply first", () => {
        expect(multiply(9, 5)).toEqual(45);
    });

    test("testing multiply second", () => {
        expect(multiply(4.5, 2)).toEqual(9);
    });
});

describe("my first test divide", () => {
    test("testing divide first", () => {
        expect(divide(9, 5)).toEqual(1.8);
    });

    test("testing divide second", () => {
        expect(divide(4.5, 2)).toEqual(2.25);
    });
});

describe("my first test cube", () => {
    test("testing cube first", () => {
        expect(cube(3)).toEqual(27);
    });

    test("testing cube second", () => {
        expect(cube(2)).toEqual(8);
    });
});

describe("my first test square", () => {
    test("testing square first", () => {
        expect(square(4)).toEqual(16);
    });

    test("testing square second", () => {
        expect(square(10)).toEqual(100);
    });
});
describe("my first test complement", () => {
    test("testing complement first", () => {
        expect(complement(4)).toEqual(0.25);
    });

    test("testing complement second", () => {
        expect(complement(16)).toEqual(0.0625);
    });
});