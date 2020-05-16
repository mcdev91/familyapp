import React from 'react';

const ShoppingList = ({ name }) => {
    return (
        <div className='flex flex-column'>
            <div className='white f3 outline w-25 pa3 mr2'>
                {`Hello: ${name}, this is what you added to shopping list:`}
            </div>
        </div>
    );
}

export default ShoppingList;