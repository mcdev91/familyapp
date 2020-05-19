import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import UserInfo from './components/UserInfo/UserInfo';
import ShoppingList from './components/ShoppingList/ShoppingList';
import TodoList from './components/ToDoList/ToDoList';
import './App.css';

const initialState = {
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        joined: data.joined
      },
      //
      todo: {
        task: data.task
      }
      //
    })
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }

  render() {
    return (
      <div className="App">
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        {
          this.state.route === "home"
            ? <div>
              <UserInfo
                name={this.state.user.name}
                id={this.state.user.id}
                //
                todo={this.state.todo.task}
                //
              />
              <div className="cf-ns nl2 nr2">
                <TodoList
                  name={this.state.user.name}
                  className="fl-ns w-25-ns ph2"
                />
                <ShoppingList
                  name={this.state.user.name}
                  className="fl-ns w-25-ns ph2"
                />
              </div>

            </div>
            : (
              this.state.route === "signin"
                ? <SignIn
                  loadUser={this.loadUser}
                  onRouteChange={this.onRouteChange}
                />
                : <Register
                  loadUser={this.loadUser}
                  onRouteChange={this.onRouteChange} />
            )
        }
      </div>
    );
  }
}

//

export default App;