console.warn("CURRENT GENERATING NUMBER PROBLEMS ONLY");
const INSTRUCTIONS = [
`
HOW TO PLAY
* TERMINAL ONLY GAME
* PLAY WITH THE APIS
* SOLVE THERE PROBLEMS
* ALL ON THE TERMINAL
* Uses numbers, other datatypes coming soon
* Have Google Search on Standby
* Get to know the source code
* observe the evolving source code changes

RANDOM HINT
- LOOK UP, VIEW THINGS THROUGH ALL TABS, INCLUDING ELEMENTS
`,
`
WARNING
* know the language before playing
* site saves progress with cache & cookies
* does not connect to remote server
* leave cookies & cache unblocked
* do not use incognito browser
`,
`
FIRST INSTRUCTION

0) TURN ON CANVAS MSG THROUGH CODE

** HINT WRITE document.getElementById('msg').style.display="block"

1) VIEW SOURCE CODE SCRIPTS

** HINT WRITE console.log(document.scripts);
** document.location.href.replace("main.html","main.js")
** after viewing src code, goback
`,
`
SECOND INSTRUCTION

2) MAKE SRC CODE VISUAL WITH IFRAMES

** HINT mimic prior instructions
** Look at the HTML
`,
`
THIRD INSTRUCTION

3) PROGRESSIVELY BUILD UI THROUGH CODE
`,
`
FOURTH INSTRUCTION

4) OBSERVE CODE CHANGES

FIFTH INSTRUCTION

5) BUILD FIRST FUNCTIONAL UI

** Search 'Pillars'
** Computation is the first pillar
** terminal: const c = new Computation();

SIXTH INSTRUCTION
6) !!!PROGRAM!!!
** Program a personal difficulty into the Computation
** Difficulty 

SEVENTH INSTRUCTION
7) BUILD FUNCTIONAL DEBUGGING UI
`
];console.warn(...INSTRUCTIONS); 


/*export*/ class Pillars {
    pillars = {
        0: Computation,     // COMPLETE
        1: Debugging,       // COMPLETE
        2: Algorithms,      // COMPLETE
        3: Organization,    // HELP
        4: Optimization,    
        5: AdvDebugging,
        6: Projects
    }
};
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
/*export*/ const ops = Object.freeze({
    "double": Object.freeze({
        '%'     :"modulus",
        '^'     :"xor",
        '&'     :"and",
        '*'     :"multiply",
        '-'     :"substract",
        '+'     :"addition",
        '/'     :"divide",
        '<'     :"less than",
        '>'     :"greater than",
        '|'     :"or",
        '~'     :"NOT",
        '=='    :"kinda equals",
        '==='   :"absolutely equals",
        '>>'    :"bitwise downshift",
        '<<'    :"bitwise upshift",
        '||'    :"OR",
        '&&'    :"AND",
        '**'    :"power"
    }),
    "single": Object.freeze({
        "typeof":"check datatype",
        "!":    "NOT",
        "~":    "not"
    }),
    "other": Object.freeze({
        '<='    :"less than equals",
        '>='    :"greater than equals"
    }),
    "left-hand":Object.freeze({
        '='     :"assign",
        '+='    :"addition assign",
        '-='    :"substraction assign",
        '*='    :"multiply assign",
        '/='    :"divide assign",
        '^='    :"xor assign",
        '%='    :"modulous assign",
        '**='   :"power assign",
        '>>='   :"bitwise downshift assign",
        '<<='   :"bitwise upshift assign",
        '&='    :"and assign"
    })
});
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
/*export*/ class PageManager{
    constructor(){
        new IO_Chart().render();
        new CodeInput().render();
    }
}
/*export*/ class Questionaire{}
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
/*export*/ class IO_Chart{
    populate(){}
    populateInput(){}
    populateOutput(){}
}
/*export*/ class CodeInput{
    submit(){}
    check(){}
    new(){}
}
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
let   currentProblem    = ``;
let   currentAttempt    = ``;
let   dataset           = [];
const getRandV          = v => Math.round(v*Math.random());
const getRandOp         = v => Object.keys(ops.double)[Math.round(Object.keys(ops.double).length * Math.random())];
const genProblem        = v => currentProblem+=`${getRandV(0)} ${getRandOp(100)} ${getRandV(100)}`.repeat(v); 
const checkProblem      = v => (eval(`v = (${currentProblem}) === ${currentAttempt}`),v);
const solveProblem      = (exp,v) => (eval(exp || `v = (${currentProblem})`),v);   
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
const ABSTRACT_CLASS_PILLAR = {
    static:{
        currentProblem,
        currentAttempt,
        getRandV,
        getRandOp
    },
    public:{
        genProblem,
        checkProblem,
        solveProblem
    }
};
const Computation = CLASS("Computation",ABSTRACT_CLASS_PILLAR);
const Debugging   = CLASS("Debugging",  ABSTRACT_CLASS_PILLAR,  {static:{computation: new Computation()}});
const Algorithms  = CLASS("Algorithms", ABSTRACT_CLASS_PILLAR,  {public:{genProblem:  v => genProblem(v)}});

/*export*/ class Debugging{
    static computation = new Computation();
    static currentProblem = ``;
    static scrambledProblem = ``;
    static currentAttempt;
    genProblem(n){
        Debugging.currentProblem = ``;
        for (let i = 0; i < n; i++) Debugging.currentAttempt += (` ` + Debugging.computation.genProblem());
        let str = Debugging.currentProblem.slice();
        for (let i = 0; i < str.length; i++) {
            if (str[i] === " ") { /**skip */ }
            else {
                str[i] = ["?",str[i]][Math.round(Math.random())];
            }
        }
        Debugging.scrambledProblem = str;
        return Debugging.scrambledProblem;
    }
    checkProblem(attempt){
        Debugging.currentAttempt = attempt;
        let b;
        eval(`b = (${Debugging.currentProblem}) === ${Computation.currentAttempt}`);
        return b;
    }
    solveProblem(exp){
        let b;
        if (typeof exp === "string") eval(exp || `b = (${Debugging.currentProblem})`);
        else eval(`b = ${exp}`);
        return b;   
    }
}
/*export*/ class Algorithms{
    static computation = new Computation();
    static currentProblem = ``; // str-evaled
    static currentAttempt;
    static dataset = [];
    genProblem(n){
        Algorithms.currentProblem = ``;
        for (let i = 0; i < n; i++) Algorithms.currentAttempt += (` ` + Algorithms.computation.genProblem());
        let y; for (let i = 0; i < 15;i++) eval(`y = ${Algorithms.currentProblem.replace('$',i)}`), Algorithms.dataset[i] = [i,y];
        return Algorithms.dataset;
    }
    checkProblem(attempt){
        Algorithms.dataset.forEach((e,i)=>{
            if (e[0] === attempt[i][0] && e[1] === attempt[i][1]) {/**pass */}
            else                                                  {return false;}
        });
        return true;
    }   
    solveProblem(){throw new Error("not allowed");}
}
/*export*/ class Organization{
    constructor(){
        console.warn(`Write Compartmentalization algorithms`);
    }
    public howTo(){console.log(Organization.howTo);} 
    static howTo = [
        `USE TRANSPILER MODULE PARAMS       : removes sitewide naming collisions`,
        `USE TRANSPILER MODULE FUNC         : removes functional anti-patterns`,   
        `USE TRANSPILER MODULE CLAS         : removes object oriented anti-patterns`,
        `USE TRANSPILER MODULE CODE FEED    : conversion rosseta stone code`,
        `USE TRANSPILER MODULE CODEBRARIAN  : :) :) :) :) :) :) :) :) :) :) :) :) :) :) `
    ];
}
/*export*/ class Optimization{
    constructor(){
        console.warn(`write new faster algorithms for same IO-SET`);
    }
    public lesson() {}
    static lessons = {
        "nested-loops": [],
        "tweaking-loops":[],
        "if-less":[],
        "memory-swap":[]
    };
}
/*export*/ class AdvDebugging{
    constructor(){}
    public lesson(){}
    static lessons = {
        "comparison dangers":[],
        "unknown datatype behavior":[],
        "range complications":[],
        "bermuda-triangle":[],
        "async mem manage":[]
    };
}
/*export*/ class Projects{
    public project(){}
    static projects = [
        `Alarmclock`,
        `PushNotifications`
    ];
}
/*export*/ const spec_AlarmClock = function(Alg:Function){
    const a = new Alg();
    a.user('new',{
        name:   "bob",
        pwd:    "12345678",
    });
    a.alarm({
        name:   "bob",
        pwd:    "12345678"
    },{
        day:    13,
        month:   6,
        hour:   12
    });
    a.user('new',{
        name:   "bob",
        pwd:    "12345678",
    });
    a.user('delete',{
        name:   "bob",
        pwd:    "12345678",
    });
    a.user('get',{
        name:   "bob",
        pwd:    "12345678",
    });
};
/*export*/ const spec_PushNotifications = function(){};
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
(function spec(alg){
    console.log(alg)
})();
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
const help = function(){console.log(INSTRUCTIONS);};
const viewsrc = function(){};
const Instruction = Object.assign(function(){},
{
    next: function(){},
    prev: function(){}    
});
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
const $$$ = class $$$ {
static $                                 = 0;
static earn(g:number,n:number):void      {$$$.$ += g;};
public programmed   (n):void             {$$$.earn(10*(n||1));}
public instructioned(n):void             {$$$.earn(2*(n||1));}
public observed     (n):void             {$$$.earn(1*(n||1));}
public failed       (n):void             {$$$.earn(3*(n||1));}
};
const TerminalWatch = class {
static terminals = null;
public constructor(){
    TerminalWatch.load();
}
static load(){
    TerminalWatch.terminals === null || (TerminalWatch.terminals = true); 


}
}
const TERMINAL = function(script:string){
    console.log(script);
};
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
