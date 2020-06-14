import React from 'react';

class AddToList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ''
        }
    }

    onInputChange = (event) => {
        this.setState({ description: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('https://safe-basin-15384.herokuapp.com/todos', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                description: this.state.description
            })
        })
            .then(response => response.json())
        // .then(user => {
        //     if (user.id) {
        //         this.props.loadUser(user);
        //         this.props.onRouteChange('home');
        //     }
        // })
    }

    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 white-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0" />
                        <legend className="f1 fw6 ph0 mh0 center">ADD TO LIST</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="text">TASK</label>
                            <input
                                className="pa2 input-reset ba bg-transparent hover-white w-100 outline-0"
                                type="text"
                                name="description"
                                id="todotask"
                                onChange={this.onInputChange}
                            />
                        </div>
                        <hr />
                        <div>
                            <input
                                onClick={this.onSubmitSignIn}
                                className="white ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib outline-0"
                                type="submit"
                                value="addToList"
                            />
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default AddToList;