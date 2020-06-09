import React, { Component } from 'react';

class ListTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projectInfo: null,
            isLoading: false,
            error: null
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        let projectInfoApi;

        projectInfoApi = 'https://safe-basin-15384.herokuapp.com/todos' + this.props.projectId;

        fetch(projectInfoApi)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Encountered problem fetching project info')
                }
            })
            .then(data => this.setState({
                projectInfo: data
            }))
            .catch(fetchError => this.setState({
                isLoading: false,
                error: fetchError
            }));
    }

    componentWillUnmount() {
        // this.setState({
        //     projectInfo: null
        // });
    }

    render() {
        const { isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>
        }

        if (isLoading) {
            return <p>Loading...</p>
        }

        return (
            <div className="myReportSummary">
                 Summary of Project name: {this.projectInfo.name}                    
                 Number of events: {this.props.data.length}
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
//         console.log(this.state.data);
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