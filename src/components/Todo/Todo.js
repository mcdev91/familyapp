import React from 'react';

// function getTodos() {
//     fetch('https://listsoftodo.herokuapp.com/todos')
//         .then(response => {
//             return response.text();
//         })
//         .then(data => {
//             console.log(data);
//         });
// }

function getTodos(){
    fetch('https://listsoftodo.herokuapp.com/todos')
      .then(response => response.json())
      .then(items => this.setState({items}))
      .catch(err => console.log(err))
  }

const Todo = () => {
    return (
        <div className='flex flex-column'>
            <button onClick={getTodos}>Get</button>
        </div>
    );
}

export default Todo;