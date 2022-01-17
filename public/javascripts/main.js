'use strict';

console.log('main is alive');

const XHR = new XMLHttpRequest();
XHR.open('GET', 'http://localhost:3000/data');
XHR.responseType = 'json';
XHR.send();

XHR.onload = () => {
    const data = XHR.response;
    console.log('reseved data');
    
    const list = document.getElementById('list');

    data.forEach(element => {
        let listObject = document.createElement('li');
        listObject.innerText = element;
        list.append(listObject);
    });

};