import React, { Component } from 'react';

class ListTodo extends React.Component {
    state = {
      isLoading: true,
      description: [],
      error: null
    };
  
    fechtodos() {
      fetch(`https://safe-basin-15384.herokuapp.com/todos`)
        .then(response => response.json())
        .then(data =>
          this.setState({
            description: data,
            isLoading: false,
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }
  
    componentDidMount() {
      this.fechtodos();
    }
    render() {
      const { isLoading, description, error } = this.state;
      return (
        <div>
          <h1>ALL LIST</h1>
          {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            description.map(todo => {
              const { todo_id, description } = todo;
              return (
                <div>
                  <p>ID: {todo_id}</p>
                  <p>DESCRIPTION: {description}</p>
                  <hr />
                </div>
              );
            })
          ) : (
            <h3>Loading...</h3>
          )}
          </div>
      );
    }
  }

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


export default ListTodo;