import React, { Component } from "react";

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    
    //Call the server
    console.log("Submitted");
  };
  render() {
    return (
      <div>
        <h1 className="mb-4">Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form- mb-4">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" className="form-control" />
          </div>
          <div className="form- mb-4">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
