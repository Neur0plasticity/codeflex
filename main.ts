console.warn("CURRENT GENERATING NUMBER PROBLEMS ONLY");
console.warn(`
    HOW TO PLAY
    * TERMINAL ONLY GAME
    * PLAY WITH THE APIS
    * SOLVE THERE PROBLEMS
    * ALL ON THE TERMINAL
    * Uses numbers, other datatypes coming soon
`);
export class Pillars {
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
export const ops = {
    double: {
        '%'     :"modulus",
        '^'     :"xor",
        '&'     :"and",
        '*'     :"multiply",
        '-'     :"substract",
        '+'     :"addition",
        '='     :"assign",
        '/'     :"divide",
        '<'     :"less than",
        '>'     :"greater than",
        '|'     :"or",
        '~'     :"NOT",
        '=='    :"kinda equals",
        '==='   :"absolutely equals",
        '>>'    :"bitwise downshift",
        '<<'    :"bitwise upshift",
        '>>='   :"bitwise downshift assign",
        '<<='   :"bitwise upshift assign",
        '||'    :"OR",
        '&&'    :"AND",
        '**'    :"power"
    },
    single: {
        "typeof":"check datatype",
        "!":    "NOT",
        "~":    "not"
    }
};
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
export class PageManager{}
export class Questionaire{}
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
export class IO_Chart{
    populate(){}
    populateInput(){}
    populateOutput(){}
}
export class CodeInput{
    submit(){}
    check(){}
    new(){}
}
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////s
export class Computation{
    static currentProblem;
    static currentAttempt;
    static getRandV     = v => Math.round(100*Math.random());
    static getRandOp    = v => Object.keys(ops.single)[Math.round(Object.keys(ops.single).length * Math.random())];
    genProblem  (){  
        Computation.currentProblem = `${Computation.getRandV(0)} ${Computation.getRandOp(0)} ${Computation.getRandV(0)}`; 
        return Computation.currentProblem;
    }
    checkProblem(attempt){
        Computation.currentAttempt = attempt;
        let b;
        eval(`b = (${Computation.currentProblem}) === ${Computation.currentAttempt}`);
        return b;
    }
    solveProblem(exp){
        let b;
        if (typeof exp === "string") eval(exp || `b = (${Computation.currentProblem})`);
        else eval(`b = ${exp}`);
        return b;   
    }
}
export class Debugging{
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
export class Algorithms{
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
export class Organization{
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
export class Optimization{
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
export class AdvDebugging{
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
export class Projects{
    public project(){}
    static projects = [
        `Alarmclock`,
        `PushNotifications`
    ];
}
export const spec_AlarmClock = function(Alg:Function){
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
export const spec_PushNotifications = function(){};
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
(function spec(alg){
    console.log(alg)
})();
