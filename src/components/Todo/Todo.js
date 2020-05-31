import React from 'react';

function getTodos() {
    fetch('https://listsoftodo.herokuapp.com/todos')
        .then(response => {
            return response.text();
        })
        .then(data => {
            console.log(data);
        });
}

const Todo = () => {
    return (
        <div className='flex flex-column'>
            <button onClick={getTodos}>Get</button>
        </div>
    );
}

export default Todo;