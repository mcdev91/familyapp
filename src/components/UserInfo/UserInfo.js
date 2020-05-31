import React from 'react';

function getTodos() {
    fetch('https://listsoftodo.herokuapp.com/todos')
        .then(response => {
            return response.text();
        })
        .then(data => {
            setMerchants(data);
        });
}

const UserInfo = ({ name, id }) => {
    return (
        <div className='flex flex-column'>
            <button onClick={getTodos}>Get</button>
            <div className='white f3 fl w-100 pa2'>
                {`User: ${name}`}
            </div>
            <div className='white f3 fl w-100 pa2'>
                {`Id: ${id}`}
            </div>
        </div>
    );
}

export default UserInfo;