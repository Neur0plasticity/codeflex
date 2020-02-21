"use strict";
var _a, _b;
console.warn("CURRENT GENERATING NUMBER PROBLEMS ONLY");
var INSTRUCTIONS = [
    "\nHOW TO PLAY\n* TERMINAL ONLY GAME\n* PLAY WITH THE APIS\n* SOLVE THERE PROBLEMS\n* ALL ON THE TERMINAL\n* Uses numbers, other datatypes coming soon\n* Have Google Search on Standby\n* Get to know the source code\n* observe the evolving source code changes\n\nRANDOM HINT\n- LOOK UP, VIEW THINGS THROUGH ALL TABS, INCLUDING ELEMENTS\n",
    "\nWARNING\n* know the language before playing\n* site saves progress with cache & cookies\n* does not connect to remote server\n* leave cookies & cache unblocked\n* do not use incognito browser\n",
    "\nFIRST INSTRUCTION\n\n0) TURN ON CANVAS MSG THROUGH CODE\n\n** HINT WRITE document.getElementById('msg').style.display=\"block\"\n\n1) VIEW SOURCE CODE SCRIPTS\n\n** HINT WRITE console.log(document.scripts);\n** document.location.href.replace(\"main.html\",\"main.js\")\n** after viewing src code, goback\n",
    "\nSECOND INSTRUCTION\n\n2) MAKE SRC CODE VISUAL WITH IFRAMES\n\n** HINT mimic prior instructions\n** Look at the HTML\n",
    "\nTHIRD INSTRUCTION\n\n3) PROGRESSIVELY BUILD UI THROUGH CODE\n",
    "\nFOURTH INSTRUCTION\n\n4) OBSERVE CODE CHANGES\n\nFIFTH INSTRUCTION\n\n5) BUILD FIRST FUNCTIONAL UI\n\n** Search 'Pillars'\n** Computation is the first pillar\n** terminal: const c = new Computation();\n\nSIXTH INSTRUCTION\n6) !!!PROGRAM!!!\n** Program a personal difficulty into the Computation\n** Difficulty \n\nSEVENTH INSTRUCTION\n7) BUILD FUNCTIONAL DEBUGGING UI\n"
];
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
var help = function () { console.log(INSTRUCTIONS); };
var viewsrc = function () { };
var Instruction = Object.assign(function () { }, {
    next: function () { },
    prev: function () { }
});
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
var $$$ = (_a = /** @class */ (function () {
        function $$$() {
        }
        $$$.earn = function (g, n) { $$$.$ += g; };
        ;
        $$$.prototype.programmed = function (n) { $$$.earn(10 * (n || 1)); };
        $$$.prototype.instructioned = function (n) { $$$.earn(2 * (n || 1)); };
        $$$.prototype.observed = function (n) { $$$.earn(1 * (n || 1)); };
        $$$.prototype.failed = function (n) { $$$.earn(3 * (n || 1)); };
        return $$$;
    }()),
    _a.$ = 0,
    _a);
var TerminalWatch = (_b = /** @class */ (function () {
        function class_1() {
            TerminalWatch.load();
        }
        class_1.load = function () {
            TerminalWatch.terminals === null || (TerminalWatch.terminals = true);
        };
        return class_1;
    }()),
    _b.terminals = null,
    _b);
var TERMINAL = function (script) {
    console.log(script);
};
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
