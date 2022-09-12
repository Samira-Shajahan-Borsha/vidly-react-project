import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";


class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  //   username = React.createRef();
  /* componentDidMount(){
        this.username.current.focus();
    } */

  validate = () => {
    const option = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, option);

    if (!error) return null;

    const errors = {};

    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
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
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;

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
            <button disabled={this.validate()} className="btn btn-primary col-2">Login</button>
          </div>
          
        </form>
      </div>
    );
  }
}

export default LoginForm;
