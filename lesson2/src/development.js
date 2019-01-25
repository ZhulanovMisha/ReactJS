export class Developer {
    constructor(name, age, dateOfBirth, salary, department, manager = null){
        this.manager = manager;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.salary = salary;
        this.department = department;
        this.manager = manager;
    }
}