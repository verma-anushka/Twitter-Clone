import React, { Component } from "react";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      profileImageUrl: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("aaya");
    // console.log(this.props.signUp);
    const authType = this.props.signUp ? "signup" : "signin";
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        console.log("LOGGED IN!");
        this.props.history.push("/");
      })
      .catch(() => {
        console.log("LOGGED IN!!!!!!!");
        return;
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      email,
      username,
      firstname,
      lastname,
      password,
      profileImageUrl
    } = this.state;

    const {
      signUp,
      heading,
      buttonText,
      errors,
      history,
      removeError
    } = this.props;

    console.log(errors);

    // Look for route change
    history.listen(() => {
      removeError();
    });

    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <h2>{heading}</h2>
              {errors.message && (
                <div className="alert alert-danger">{errors.message}</div>
              )}
              <label htmlFor="email">E-mail</label>
              <input
                autoComplete="off"
                className="form-control"
                id="email"
                name="email"
                onChange={this.handleChange}
                type="text"
                value={email}
              />
              <label htmlFor="password">Password</label>
              <input
                autoComplete="off"
                className="form-control"
                id="password"
                name="password"
                onChange={this.handleChange}
                type="password"
                value={password}
              />
              {signUp && (
                <div>
                  <label htmlFor="firstname">firstname</label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    onChange={this.handleChange}
                    type="text"
                    value={firstname}
                  />
                  <label htmlFor="lastname">lastname</label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    onChange={this.handleChange}
                    type="text"
                    value={lastname}
                  />
                  <label htmlFor="username">username</label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    id="username"
                    name="username"
                    onChange={this.handleChange}
                    type="text"
                    value={username}
                  />
                  <label htmlFor="image-url">Image URL</label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    id="image-url"
                    name="profileImageUrl"
                    onChange={this.handleChange}
                    type="text"
                    value={profileImageUrl}
                  />
                </div>
              )}
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthForm;
