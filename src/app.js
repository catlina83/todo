/*
File: index.html
Author: Juhász Kata
Copyright: 2023, Juhász Kata
Group: Szoft I-1 E
Date: 2023-03-21
Github: https://github.com/catlina83/
Licenc: GNU GPL
*/

const doc = {
    tbody: null
};
const state = {
    todos: []
}
window.addEventListener('load', () => {
    init();
    getTodos();
    
});
function init() {
    doc.tbody = document.querySelector('#tbody');
}

function getTodos() {
    let host = 'http://localhost:8000/';
    let endpoint = 'todos';
    let url = host + endpoint;
    fetch(url)
    .then(respone => respone.json())
    .then(result => {
        state.todos = result;
        render();
    });
}
function render() {
    let rows = '';
    state.todos.forEach(todo => {
        console.log(todo.name);
        rows += `
            <tr>
            <td>${todo.id}</td>
            <td>${todo.name}</td>
            <td>${todo.ready}</td>
            </tr>
        `;

    });
    doc.tbody.innerHTML = rows;
}