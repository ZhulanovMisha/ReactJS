function *survey(){
    let name = prompt("Input your name:", "Micheal");
    yield;
    let surname = prompt("Input your surname:", "Zhulanov");
    yield;
    let country = prompt("Where are you from?", "Russia");
    yield;
    let age = prompt("How old are you?", "33");
    yield;
    let brother = prompt("Do you have brother?", "no");
    yield;
    let sister = prompt("Do you have brother?", "yes");

    return {name, surname, country, age, brother, sister};
}

// Создаём опрос с помощью функции генератора
const myFirstSurvey = survey();
myFirstSurvey.next();
myFirstSurvey.next();
myFirstSurvey.next();
myFirstSurvey.next();
myFirstSurvey.next();

// Выводим получившийся результат ввиде объекта
console.log(myFirstSurvey.next().value);