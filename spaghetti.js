let a = prompt("Enter number:");
function f1() {
    let b = a * 2;
    if (b > 10) {
        f2(b);
    } else {
        f3();
    }
}

function f2(val) {
    let c = val / 2;
    if (c < 5) {
        console.log("Too small");
        f3();
    } else {
        f4(c);
    }
}

function f3() {
    for (let i = 0; i < 3; i++) {
        console.log("Looping:", i);
    }
    if (Math.random() > 0.5) {
        f5();
    }
}

function f4(num) {
    console.log("Final Value:", num);
    if (num % 2 === 0) {
        f6();
    } else {
        f5();
    }
}

function f5() {
    console.log("Executing function f5");
    if (Math.random() > 0.3) {
        f1();
    } else {
        console.log("End reached");
    }
}

function f6() {
    console.log("Function f6 executed");
    f2(8);
}

f1();
