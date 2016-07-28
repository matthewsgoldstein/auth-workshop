import React, { Component } from 'react';
import * as firebaseui from '../firebaseui';

class FirebaseApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      photo: '',
      signedIn: false,
    };
    this.onSignIn = this.onSignIn.bind(this);
    this.renderFirebase = this.renderFirebase.bind(this);
  }

  componentDidMount() {
    firebaseui.start(this.onSignIn);
  }

  onSignIn(user) {
    if (user) {
      this.setState({
        name: user.displayName,
        email: user.email,
        photo: user.photoUrl,
      });
    }
  }

  renderFirebase() {
    if (this.state.signedIn) {
      return (
        <div id="firebase-info">
          Name: {this.state.name} <br />
          Email: {this.state.email} <br />
          Photo: <img src={this.state.photo} alt="none available" />
        </div>
      );
    } else {
      // Put in the firebase div tag
      return (<div />);
    }
  }

  render() {
    return (
      <div id="firebase">
          {this.renderFirebase()}
      </div>
    );
  }
}

export default FirebaseApp;
