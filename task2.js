// Функция, вычисляющая площадь фигуры по её сторонам
function calculateArea(...arg){
    // Выходим, если указаны неверные параметры
    if (arg.length <=1 || arg.length > 4){
        console.log('Warning. The function support the counts of input parameters from 2 to 4!');
        return;
    }

    // По количеству аргументов и их размерности определяем тип фигуры и вычисляем её площадь
    let area, figure;
    let p; // Переменная полупериметра
    switch (arg.length) {
        case 2:
            figure = (arg[0] === arg[1]) ? figure = 'square': 'rectangle';
            area = arg[0] * arg[1];
            break;
        case 3:
            figure = "triangle";
            p = (arg[0] + arg[1] + arg[2])/2;
            area =  Math.round(Math.sqrt(p*(p - arg[0])*(p - arg[1])*(p - arg[2])));
            break;
        case 4:
            figure = ((arg[0] === arg[1]) && (arg[0] === arg[2]) && (arg[0] === arg[3])) ? 'square':
                (arg[0] === arg[2] && arg[1] === arg[3]) ? 'rectangle': 'polygon';
            p = (arg[0] + arg[1] + arg[2] + arg[3])/2;
            area =  Math.round(Math.sqrt((p - arg[0])*(p - arg[1])*(p - arg[2])*(p - arg[3])));
            break;
    }

    return {area, figure, arg};
}

// Вычисляем площадь квадрата
console.log(calculateArea(3,3));
console.log(calculateArea(3,3,3,3));

// Вычисляем площадь прямоугольника
console.log(calculateArea(2,3));
console.log(calculateArea(2,3,2,3));

// Вычисляем площадь многоугольника
console.log(calculateArea(5,4,3,6));

// Вычисляем площадь треугольника
console.log(calculateArea(2,3,4));
