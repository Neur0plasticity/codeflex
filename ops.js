/*export*/ const ops = Object.freeze({
    "double": Object.freeze({
        '%': "modulus",
        '^': "xor",
        '&': "and",
        '*': "multiply",
        '-': "substract",
        '+': "addition",
        '/': "divide",
        '<': "less than",
        '>': "greater than",
        '|': "or",
        '==': "kinda equals",
        '===': "absolutely equals",
        '!=': "kinda not equals",
        '!==': "absolutely not equal to",
        '>>': "bitwise downshift",
        '<<': "bitwise upshift",
        '||': "OR",
        '&&': "AND",
        '**': "power",
        '<=': "less than equals",
        '>=': "greater than equals"
    }),
    "single": Object.freeze({
        "typeof": "check datatype",
        "!": "NOT",
        "~": "not"
    }),
    "left-hand": Object.freeze({
        '=': "assign",
        '+=': "addition assign",
        '-=': "substraction assign",
        '*=': "multiply assign",
        '/=': "divide assign",
        '^=': "xor assign",
        '%=': "modulous assign",
        '**=': "power assign",
        '>>=': "bitwise downshift assign",
        '<<=': "bitwise upshift assign",
        '&=': "and assign"
    })
});