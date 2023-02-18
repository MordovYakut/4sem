//Первая задача
function convertSpeed(){
    let speed = prompt("Укажите значение скорости, которую вы хотите преобразовать")
    if (speed < 0){
        console.log("Error!")
    }
    else {
        let convert = prompt("Укажите как преобразовать: toMS (в м/с) или toKMH (в км/с)")
        let newspeed
        if (convert == "toMS"){
            newspeed = speed * 1000 / 3600
            console.log(`${speed} км/ч -> ${newspeed} м/с`)
        }
        else if (convert == "toKMH"){
            newspeed = speed * 3600 / 1000
            console.log(`${speed} м/с -> ${newspeed} км/ч`)
        }
        else {
            console.log("Error!")
        }
    }
}

//Вторая задача
function absValue(){
    let number = +prompt("Введите число, значение модуля которого вы хотите узнать")
    let newnumber
    if (number < 0){
        newnumber = -number
        console.log(`(${number}) -> ${newnumber}`)
    }
    else if (number >= 0){
        console.log(`(${number}) -> ${number}`)
    }
    else {
        console.log("Error!")
    }
}

//Третья задача
function createObject(){
    let student = {
        group: prompt("Укажите номер учебной группы, в которой обучается студент"),
        last_name: prompt("Введите фамилию студента"),
        first_name: prompt("Введите имя студента")
    }
    console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`)
}

//Четвёртая задача
function randomNumber(){
    let min = +prompt("Укажите минимальное значение")
    let max = +prompt("Укажите максимальное значение")
    if (max <= min){
        console.log("Error!")
    }
    else {
        let rand = Math.floor(Math.random() * max) + min
        console.log(`(${min}, ${max}) -> ${rand}`)
    }
    }

//Пятая задача
function sampleArray(){
    let a = +prompt('Введите, сколько цифр будет в массиве')
    let b = +prompt('Введите, сколько цифр должно вывести рандомно из массива')
    const massarray = []
    for (let i = 0; i < a; i++){
        massarray.push(Math.floor(Math.random() * 9) + 1)
    }
    console.log(massarray)
    const massarray2 = []
    for (let y = 0; y < b; y++){
        let rand = (Math.floor(Math.random() * massarray.length))
        massarray2.push(massarray[rand])
    }
    console.log(massarray2)
}