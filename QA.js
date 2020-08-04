class QA {
    currentProblem = "";
    currentAttempt = "";
    checkProblem(v) { 
        return (eval("v = (" + this.currentProblem + ") === " + this.currentAttempt), v); 
    };
    solveProblem(exp, v) { 
        return (eval(exp || "v = (" + this.currentProblem + ")"), v); 
    };
}