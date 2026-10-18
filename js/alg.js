function verify() {
    console.log("a")
    let a = parseFloat(elementA.value);
    console.log(a)


    if (isNaN(a)) {
        result = "Введите число a";
        check = false
    }
    else if (a < 62) {
        let x = a**2+4+5
        result = "x =" + x
        check = true;

    }
    else {
        let x = 1/(a**2) + 4*a + 5
        result = "x =" + x
        check = true;
    }
    document.getElementById("result").value = result;
}


function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

let result;
let check = false;

const elementA = document.getElementById("a");


const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)