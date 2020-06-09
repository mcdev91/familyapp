import React, { Component } from 'react';

// class ListTodo extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             data: null,
//         };
//     }

//     componentDidMount() {
//         fetch('https://safe-basin-15384.herokuapp.com/todos')
//             .then(response => response.json())
//             .then(data => this.setState({ data }));
//     }
//     render() {
//         return (
//             <ul>
//                 <div>

//                 </div>
//             </ul>
//         );
//     }
// }

componentDidMount() 
    var that = this;
    var url = 'https://safe-basin-15384.herokuapp.com/todos'

    fetch(url)
        .then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(function (data) {
            that.setState({ todo: data.description });
        });


const ListTodo = Object.keys(this.state.description.loc).map((content, idx) => {
    const items = this.state.description.loc[content].map((item, i) => (
        <p key={i}>{item.text}</p>
    ))

    return <div key={idx}>{items}</div>
})

export default ListTodo;