import React from 'react';

const ShoppingList = ({ name }) => {
    return (
        <div>
            <div className="ba1 bw1">
                {`Hello: ${name}, this is what (user) added to shopping list: (content: need some work on this)`}
                <ol>
                    <li>Content</li>
                    <li>Content</li>
                    <li>Content</li>
                </ol>
                <div>
                    <input
                        type="text"
                    />
                    <button
                        className=''>ADD
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ShoppingList;