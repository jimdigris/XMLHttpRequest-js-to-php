'use strict';

(function () {

    const dataGet = 'get';
    const dataPost = 'post';
    const getBtn = document.querySelector('.get-btn');
    const postBtn = document.querySelector('.post-btn');


    getBtn.addEventListener('click', () => { getSend(dataGet); });
    postBtn.addEventListener('click', () => { postSend(dataPost); });


    function getSend(getData) {                                                             // передаем данные методом GET
        const request = new XMLHttpRequest();                                               // создаём объект класса XMLHttpRequest
        const url = 'script.php?data=' + getData;                                           // создаём строку запроса (обработчик + передаваемые значения)
        request.open('GET', url);                                                           // указываем параметры соединения с сервером
        request.setRequestHeader('Content-Type', 'application/x-www-form-url');             // указываем заголовки для сервера
        request.send();                                                                     // выполняем запрос
        request.onload = () => { console.log(request.response); };                          // получим ответ от php
    }

    function postSend(getData) {                                                            // передаем данные методом POST
        const request = new XMLHttpRequest();                                               // создаём объект класса XMLHttpRequest
        const url = 'script.php'                                                            // указываем обработчик
        const params = 'data=' + getData;                                                   // передаваемые параметры
        request.open('POST', url);                                                          // указываем параметры соединения с сервером
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');      // указываем заголовки для сервера
        request.send(params);                                                               // выполняем запрос
        request.onload = () => { console.log(request.response); };                          // получим ответ от php
    }
})();