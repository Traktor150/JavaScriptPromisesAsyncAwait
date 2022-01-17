'use strict';

console.log('main is alive');

const fetchData = async () => {
    const response = await fetch('http://localhost:3000/data');

    if (!response.ok) {
        throw new Error(response.status);
    }

    let json = response.json();

    return await json;
}; 

fetchData()
.then(data => showData(data))
.catch(err => console.error(err))

const showData = (data) => {
    const list = document.getElementById('list');

    data.forEach(element => {
        let listObject = document.createElement('li');
        listObject.innerText = element;
        list.append(listObject);
    });
}