import React, { Component } from 'react';

class ListTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        fetch('https://safe-basin-15384.herokuapp.com/todos')
            .then(response => response.json())
            .then(data => this.setState({ data }));

    }
    render() {
        return (
            <ul>
                <div>
                    {data}
                </div>
            </ul>
        );
    }
}


export default ListTodo;