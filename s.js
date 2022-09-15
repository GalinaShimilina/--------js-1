

alert ('Ваше имя' + prompt ('Введите имя'));
function usdSum(usdSum, usdCourse){
    return(usdSum * usdCourse);
}
const course = 60;
alert ('При курсе 1доллар = 60 рублей, сумма = "+''+ usdSum (parseInt(promt('Введите сумму usd')) , course) + ' рублей);

function f(a){
    retern ( a % ==2) ? false : true;
}

alert (f(parseInt (+ prompt('Введите целое число'))));


function reverse (num){
    let temp, result=0;
    while (num){
        tmp = num % 10;
        result = (result * 10) + temp;
        num = num/10 | 0
    }
    return result;
}

function fan (a1, b1, c1){
    return ( Math.pow (a1 + b1 + c1));
}
let a1 = +prompt('Введите число A')
let b1 = +prompt('Введите число B')
let c1 = +prompt('Введите число C')
alert(' Сумма чисел в 3 степени равна = " + fun(a1, b1, c1))
