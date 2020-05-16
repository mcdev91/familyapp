import React from 'react';

const UserInfo = ({ name, id }) => {
    return (
        <div className='flex flex-column'>
            <div className='white f3 outline w-25 pa3 mr2'>
                {`User: ${name}`}
            </div>
            <div className='white f3 outline w-25 pa3 mr2'>
                {`Id: ${id}`}
            </div>
        </div>
    );
}

export default UserInfo;