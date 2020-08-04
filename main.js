"use strict";
var _a, _b;
console.warn.apply(console, INSTRUCTIONS);
/*export*/ var Pillars = /** @class */ (function () {
    function Pillars() {
        this.pillars = {
            0: Computation,
            1: Debugging,
            2: Algorithms,
            3: Organization,
            4: Optimization,
            5: AdvDebugging,
            6: Projects
        };
    }
    return Pillars;
}());
;
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
/*export*/ var ops = Object.freeze({
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
        '~': "NOT",
        '==': "kinda equals",
        '===': "absolutely equals",
        '>>': "bitwise downshift",
        '<<': "bitwise upshift",
        '||': "OR",
        '&&': "AND",
        '**': "power"
    }),
    "single": Object.freeze({
        "typeof": "check datatype",
        "!": "NOT",
        "~": "not"
    }),
    "other": Object.freeze({
        '<=': "less than equals",
        '>=': "greater than equals"
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
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
/*export*/ var PageManager = /** @class */ (function () {
    function PageManager() {
        new IO_Chart().render();
        new CodeInput().render();
    }
    return PageManager;
}());
/*export*/ var Questionaire = /** @class */ (function () {
    function Questionaire() {
    }
    return Questionaire;
}());
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
/*export*/ var IO_Chart = /** @class */ (function () {
    function IO_Chart() {
    }
    IO_Chart.prototype.populate = function () { };
    IO_Chart.prototype.populateInput = function () { };
    IO_Chart.prototype.populateOutput = function () { };
    return IO_Chart;
}());
/*export*/ var CodeInput = /** @class */ (function () {
    function CodeInput() {
    }
    CodeInput.prototype.submit = function () { };
    CodeInput.prototype.check = function () { };
    CodeInput.prototype.new = function () { };
    return CodeInput;
}());
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
var currentProblem = "";
var currentAttempt = "";
var dataset = [];
var getRandV = function (v) { return Math.round(v * Math.random()); };
var getRandOp = function (v) { return Object.keys(ops.double)[Math.round(Object.keys(ops.double).length * Math.random())]; };
var genProblem = function (v) { return currentProblem += (getRandV(0) + " " + getRandOp(100) + " " + getRandV(100)).repeat(v); };
var checkProblem = function (v) { return (eval("v = (" + currentProblem + ") === " + currentAttempt), v); };
var solveProblem = function (exp, v) { return (eval(exp || "v = (" + currentProblem + ")"), v); };
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
var ABSTRACT_CLASS_PILLAR = {
    static: {
        currentProblem: currentProblem,
        currentAttempt: currentAttempt,
        getRandV: getRandV,
        getRandOp: getRandOp
    },
    public: {
        genProblem: genProblem,
        checkProblem: checkProblem,
        solveProblem: solveProblem
    }
};
var Computation = CLASS("Computation", ABSTRACT_CLASS_PILLAR);
var Debugging = CLASS("Debugging", ABSTRACT_CLASS_PILLAR, { static: { computation: new Computation() } });
var Algorithms = CLASS("Algorithms", ABSTRACT_CLASS_PILLAR, { public: { genProblem: function (v) { return genProblem(v); } } });
/*export*/ var Debugging = /** @class */ (function () {
    function Debugging() {
    }
    Debugging.prototype.genProblem = function (n) {
        Debugging.currentProblem = "";
        for (var i = 0; i < n; i++)
            Debugging.currentAttempt += (" " + Debugging.computation.genProblem());
        var str = Debugging.currentProblem.slice();
        for (var i = 0; i < str.length; i++) {
            if (str[i] === " ") { /**skip */ }
            else {
                str[i] = ["?", str[i]][Math.round(Math.random())];
            }
        }
        Debugging.scrambledProblem = str;
        return Debugging.scrambledProblem;
    };
    Debugging.prototype.checkProblem = function (attempt) {
        Debugging.currentAttempt = attempt;
        var b;
        eval("b = (" + Debugging.currentProblem + ") === " + Computation.currentAttempt);
        return b;
    };
    Debugging.prototype.solveProblem = function (exp) {
        var b;
        if (typeof exp === "string")
            eval(exp || "b = (" + Debugging.currentProblem + ")");
        else
            eval("b = " + exp);
        return b;
    };
    Debugging.computation = new Computation();
    Debugging.currentProblem = "";
    Debugging.scrambledProblem = "";
    return Debugging;
}());
/*export*/ var Algorithms = /** @class */ (function () {
    function Algorithms() {
    }
    Algorithms.prototype.genProblem = function (n) {
        Algorithms.currentProblem = "";
        for (var i = 0; i < n; i++)
            Algorithms.currentAttempt += (" " + Algorithms.computation.genProblem());
        var y;
        for (var i = 0; i < 15; i++)
            eval("y = " + Algorithms.currentProblem.replace('$', i)), Algorithms.dataset[i] = [i, y];
        return Algorithms.dataset;
    };
    Algorithms.prototype.checkProblem = function (attempt) {
        Algorithms.dataset.forEach(function (e, i) {
            if (e[0] === attempt[i][0] && e[1] === attempt[i][1]) { /**pass */ }
            else {
                return false;
            }
        });
        return true;
    };
    Algorithms.prototype.solveProblem = function () { throw new Error("not allowed"); };
    Algorithms.computation = new Computation();
    Algorithms.currentProblem = ""; // str-evaled
    Algorithms.dataset = [];
    return Algorithms;
}());
/*export*/ var Organization = /** @class */ (function () {
    function Organization() {
        console.warn("Write Compartmentalization algorithms");
    }
    Organization.prototype.howTo = function () { console.log(Organization.howTo); };
    Organization.howTo = [
        "USE TRANSPILER MODULE PARAMS       : removes sitewide naming collisions",
        "USE TRANSPILER MODULE FUNC         : removes functional anti-patterns",
        "USE TRANSPILER MODULE CLAS         : removes object oriented anti-patterns",
        "USE TRANSPILER MODULE CODE FEED    : conversion rosseta stone code",
        "USE TRANSPILER MODULE CODEBRARIAN  : :) :) :) :) :) :) :) :) :) :) :) :) :) :) "
    ];
    return Organization;
}());
/*export*/ var Optimization = /** @class */ (function () {
    function Optimization() {
        console.warn("write new faster algorithms for same IO-SET");
    }
    Optimization.prototype.lesson = function () { };
    Optimization.lessons = {
        "nested-loops": [],
        "tweaking-loops": [],
        "if-less": [],
        "memory-swap": []
    };
    return Optimization;
}());
/*export*/ var AdvDebugging = /** @class */ (function () {
    function AdvDebugging() {
    }
    AdvDebugging.prototype.lesson = function () { };
    AdvDebugging.lessons = {
        "comparison dangers": [],
        "unknown datatype behavior": [],
        "range complications": [],
        "bermuda-triangle": [],
        "async mem manage": []
    };
    return AdvDebugging;
}());
/*export*/ var Projects = /** @class */ (function () {
    function Projects() {
    }
    Projects.prototype.project = function () { };
    Projects.projects = [
        "Alarmclock",
        "PushNotifications"
    ];
    return Projects;
}());
/*export*/ var spec_AlarmClock = function (Alg) {
    var a = new Alg();
    a.user('new', {
        name: "bob",
        pwd: "12345678",
    });
    a.alarm({
        name: "bob",
        pwd: "12345678"
    }, {
        day: 13,
        month: 6,
        hour: 12
    });
    a.user('new', {
        name: "bob",
        pwd: "12345678",
    });
    a.user('delete', {
        name: "bob",
        pwd: "12345678",
    });
    a.user('get', {
        name: "bob",
        pwd: "12345678",
    });
};
/*export*/ var spec_PushNotifications = function () { };
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
(function spec(alg) {
    console.log(alg);
})();
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////