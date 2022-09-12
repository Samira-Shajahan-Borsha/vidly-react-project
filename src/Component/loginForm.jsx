import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  //   username = React.createRef();
  /* componentDidMount(){
        this.username.current.focus();
      } */

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is required";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    //Call the server
    // const username = this.username.current.value;
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account,errors } = this.state;

    return (
      <div>
        <h1 className="mb-4">Login</h1>
        <form onSubmit={this.handleSubmit} className="row row-cols-2 mt-5">
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />

          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />

          <div className="col">
            <button className="btn btn-primary col-2">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
