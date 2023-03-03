//Первая задача
function convertSpeed(speed, convert){
    // speed = prompt("Укажите значение скорости, которую вы хотите преобразовать")
    if (speed < 0){
        console.log("Error!")
    }
    else {
        // convert = prompt("Укажите как преобразовать: toMS (в м/с) или toKMH (в км/с)")
        let newspeed
        if (convert == "toMS"){
            newspeed = speed * 1000 / 3600
            console.log(`${speed} км/ч -> ${newspeed} м/с`)
            return newspeed
        }
        else if (convert == "toKMH"){
            newspeed = speed * 3600 / 1000
            console.log(`${speed} м/с -> ${newspeed} км/ч`)
            return newspeed
        }
        else {
            console.log("Error!")
            return "Error!"
        }
    }
}

//Вторая задача
function absValue(number){
    // let number = +prompt("Введите число, значение модуля которого вы хотите узнать")
    let newnumber
    if (number < 0){
        newnumber = -number
        console.log(`(${number}) -> ${newnumber}`)
        return newnumber
    }
    else if (number >= 0){
        console.log(`(${number}) -> ${number}`)
        return number
    }
    else {
        console.log("Error!")
        return "Error!"
    }
}

//Третья задача
function createObject(){
    let student = {
        group: prompt("Укажите номер учебной группы, в которой обучается студент"),
        last_name: prompt("Введите фамилию студента"),
        first_name: prompt("Введите имя студента")
    }
    console.log(`Список свойств: ${Object.keys(student)[0]}, ${Object.keys(student)[1]}, ${Object.keys(student)[2]}`)
    console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`)
}

//Четвёртая задача
function randomNumber(min, max){
    // let min = +prompt("Укажите минимальное значение")
    // let max = +prompt("Укажите максимальное значение")
    if (max <= min){
        console.log("Error!")
        return "Error!"
    }
    else {
        let rand = Math.floor(Math.random() * max) + min
        console.log(`(${min}, ${max}) -> ${rand}`)
        // return `(${min}, ${max}) -> ${rand}`
        return rand
    }
}

//Пятая задача
function sampleArray(){
    let a = +prompt('Введите, сколько цифр будет в массиве')
    // let b = +prompt('Введите, сколько цифр должно вывести рандомно из массива')
    let b = randomNumber(0, 10)
    const massarray = []
    for (let i = 0; i < a; i++){
        massarray.push(Math.floor(Math.random() * 9) + 1)
    }
    const massarray2 = []
    for (let y = 0; y < b; y++){
        let rand = (Math.floor(Math.random() * massarray.length))
        massarray2.push(massarray[rand])
    }
    console.log(`([${massarray}], ${a}) -> [${massarray2}]`)
    return `[${massarray2}]`
}