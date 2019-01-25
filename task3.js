class Human {
    constructor(name, age, dateOfBirth){
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    displayInfo(){
        return "Name: " + this.name + " Age: " + this.age + " dateOfBirth: " + this.dateOfBirth;
    }
}

class Employee extends Human{
    constructor(name, age, dateOfBirth, salary, department){
        super(name, age, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }

    displayInfo(){
        return super.displayInfo() + " Salary: " + this.salary + " Department: " + this.department;
    }
}

class Manager extends Employee{
    constructor(name, age, dateOfBirth, salary, department, array = []){
        super(name, age, dateOfBirth, salary, department);
        this.array = array;
    }

    add(objDeveloper){
        this.array.push(objDeveloper);
    };

    remove(objDeveloper){
        let index;
        while ((index = this.array.indexOf(objDeveloper)) > -1) {
            this.array.splice(index, 1);
        }
    }
}

class Developer extends Employee{
    constructor(name, age, dateOfBirth, salary, department, manager = null){
        super(name, age, dateOfBirth, salary, department);
        this.manager = manager;
    }

    changeManager(objManager){
        this.manager = objManager;
    };
}

// Список менеджеров
let managerFirst = new Manager('Anastasia',39,'04.10.1979','1000', 'Дирекция информационных технологий');
let managerSecond = new Manager('Vladimir',35,'23.01.1983','1000', 'Дирекция информационных технологий');

// Список разработчиков
let developerFirst = new Developer('Sergey',29,'16.10.1989','800', 'Дирекция информационных технологий');
let developerSecond = new Developer('Andrey',25,'13.02.1993','800', 'Дирекция информационных технологий');
let developerThird = new Developer('Nicholas',46,'19.12.1972','800', 'Дирекция информационных технологий');
let developerFourth = new Developer('Eugene',27,'09.03.1991','800', 'Дирекция информационных технологий');
let developerFifth = new Developer('Micheal',33,'15.12.1985','800', 'Дирекция информационных технологий');

// Проверяем методы класса Manager по удалению/добавлению разработчиков
managerFirst.add(developerFirst);
managerFirst.add(developerSecond);
managerFirst.add(developerThird);

managerFirst.remove(developerSecond);

managerSecond.add(developerSecond);
managerSecond.add(developerFourth);

// Проверяем методы класса Developer для изменения менеджера
developerFifth.changeManager(managerSecond);
developerFifth.changeManager(managerFirst);

// Проверяем результаты
console.log(managerFirst);
console.log(managerSecond);

console.log(managerFirst.displayInfo());
console.log(managerSecond.displayInfo());

console.log(developerFifth);

