import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
// import Register from './components/Register/Register';
import UserInfo from './components/UserInfo/UserInfo';
import AddToList from './components/AddToList/AddToList';
import ListTodo from './components/ListTodo/ListTodo';
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
      }
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
              />
              <AddToList />
              <ListTodo />
              <div className="cf-ns nl2 nr2">

              </div>

            </div>
            : (
              this.state.route === "signin"
                ? <SignIn
                  loadUser={this.loadUser}
                  onRouteChange={this.onRouteChange}
                />
                : <SignIn
                  loadUser={this.loadUser}
                  onRouteChange={this.onRouteChange}
                />
            )
        }
      </div>
    );
  }
}

{/* <Register
loadUser={this.loadUser}
onRouteChange={this.onRouteChange} /> */}

export default App;