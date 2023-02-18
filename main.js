 //Первая задача
function first(){
    let kmspeed = prompt("Укажите скорость в км/ч")
    let mspeed2 = prompt("Укажите скорость в м/с")
    let mspeed = kmspeed * 1000 / 3600
    let kmspeed2 = mspeed2 * 3600 / 1000
    console.log(kmspeed,"км/ч соответствует", mspeed, "м/с")
    console.log(mspeed2,"м/с соответствует", kmspeed2, "км/ч")    
}

//Вторая задача
function second(){
    let a = +prompt("Введите длину первой стороны")
    let b = +prompt("Введите длину второй стороны")
    let c = +prompt("Введите длину третьей стороны")
    if ((a + b <= c || a + c <= b || b + c <= a) && (a || b || c == 0)){
        console.log("Треугольника не существует")
    }
    else{
        console.log("Треугольник существует")
        let per = a + b + c
        console.log("Периметр =", per)
        let polper = per / 2
        let plosh = Math.sqrt(polper * (polper - a) * (polper - b) * (polper - c))
        console.log("Площадь =", plosh)
        console.log("Соотношение -", per/plosh)
    }
}

//Третья задача
function third(){
    let number = +prompt("Введите любое число")
    for (let i = 0; i < number + 1 ; i++){
        if (i % 5 == 0 && i != 0){
            console.log(i, "fizz buzz")
        }
        else if (i % 2 == 0){
            console.log(i, "fizz")
        }
        else{
            console.log(i, "buzz")
        }
    }
}

//Четвёртая задача
function fourth(){
    let s = 12
    for (let i = 1; i < s + 1; i++){
        if (i % 2 == 1){
            console.log(Array(i+1).join('*'))
        }
        else{
            console.log(Array(i+1).join('#'))
        }
    }
    console.log("||")
}

//Пятая задача   Починить момент со строчным ответом
function fifth(){
    const secret = Math.floor(Math.random() * 20) + 1
    let otv
    while (otv != secret){
        otv = +prompt("Напишите число, которое не больше 20")
        if (otv > 20){
            console.log("Не больше 20!")
        }
        else if (otv < secret){
            console.log("Ваше число меньше")
        }
        else if (otv > secret){
            console.log("Ваше число больше")
        }
        else if (otv == secret){
            console.log("Угадано")
            break        
        }
        else{
            console.log("Напишите число, которое не больше 20")
        }
    }
}

//Шестая задача
function sixth(){
    let n = +prompt("Напишите число, которое хотите проверить")
    let x = +prompt("Напишите первое число, на которое необходимо поделить")
    let y = +prompt("Напишите второе число, на которое необходимо поделить")
    if (n % x == 0 && n % y == 0){
        console.log("n", "=", n, ",", "x", "=", x, ",", "y", "=", y, "=>", "true")
    }
    else{
        console.log("n", "=", n, ",", "x", "=", x, ",", "y", "=", y, "=>", "false")
    }
}

//Седьмая задача
function seventh(){
    let number = +prompt("Введите номер месяца")
    if (number > 12 || number < 1){
        console.log("Такого месяца не существует")
    }
    else{
        let kvartal = Math.ceil(number / 3)
        console.log("Месяц", number, "=>", kvartal, "квартал")
    }
}