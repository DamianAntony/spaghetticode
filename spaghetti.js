let x = Math.floor(Math.random() * 10);
let y = 5;
let data = [];

function start() {
    console.log("Starting the process...");
    processA(x);
}

function processA(n) {
    if (n > 5) {
        console.log("Processing A:", n);
        y += n;
        processB(y);
    } else {
        console.log("A is small, calling C");
        processC(n * 2);
    }
}

function processB(m) {
    for (let i = 0; i < m; i++) {
        data.push(i * 2);
        if (i % 3 === 0) {
            processD(i);
        }
    }
    console.log("Process B done, calling E");
    processE();
}

function processC(p) {
    console.log("Processing C:", p);
    if (p % 2 === 0) {
        processF(p / 2);
    } else {
        for (let j = 0; j < p; j++) {
            console.log("Looping in C:", j);
            if (j > 3) processD(j);
        }
    }
}

function processD(q) {
    console.log("Processing D:", q);
    if (q > 7) {
        processA(q - 3);
    } else {
        processF(q + 2);
    }
}

function processE() {
    let sum = data.reduce((a, b) => a + b, 0);
    console.log("Sum in E:", sum);
    if (sum > 50) {
        processG();
    } else {
        processF(sum % 10);
    }
}

function processF(r) {
    console.log("Processing F:", r);
    if (r < 5) {
        processA(r + 1);
    } else {
        processD(r - 2);
    }
}

function processG() {
    console.log("Final Process G executed, resetting...");
    data = [];
    if (Math.random() > 0.5) {
        start();
    } else {
        console.log("End of execution.");
    }
}

start();
