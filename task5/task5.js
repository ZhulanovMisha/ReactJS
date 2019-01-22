/*
Не получилось подключить/импортировать библиотеку jQuery, используя вызов import,
поэтому подключал модель "ajax" через тэг "script" в коде "html":
// import {$,jQuery} from 'https://code.jquery.com/jquery-3.3.1.min.js';
// import * as jQuery from 'https://code.jquery.com/jquery-3.3.1.min.js';
// import $ from 'https://code.jquery.com/jquery-3.3.1.min.js';
 */

const promiseArray = [];
for (let i = 0; i < 10; i++){
    promiseArray[i] = new Promise((resolve, reject) => {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users/" + (i+1),
            type: "GET",
            dataType: "html",
            success: function(response){
                resolve(response);
            },
            error: function(error) {
                reject(error);
            }
        });
    });
}

Promise.all(promiseArray).then(
    result => {
        console.log(result);
    }, error => {
        console.log('Error:', error);
    }
);