import React from "react";

const getTodos = async () => {
    try {
        const response = await fetch("https://listsoftodo.herokuapp.com/todos");
        const jsonData = await response.json();
        console.log(jsonData);
    } catch (err) {
        console.error(err.message);
    }
};

// function getTodos() {
//     fetch('https://listsoftodo.herokuapp.com/todos')
//         .then(response => {
//             return JSON.stringify(response);
//         })
//         .then(data => {
//             console.log(data);
//         });
// }

const Todo = () => {
    return (
        <div className='flex flex-column'>
            <button onClick={getTodos}>Get</button>
        </div>
    );
}

export default Todo;