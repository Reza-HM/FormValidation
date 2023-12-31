import React from "react";
import "./Form.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNameData: "",
      lastNameData: "",
      emailData: "",

      submitted: false,

      allValid: false,
    };
  }

  firstNameHandler(event) {
    this.setState({
      firstNameData: event.nativeEvent.target.value,
    });
  }

  lastNameHandler(event) {
    this.setState({
      lastNameData: event.nativeEvent.target.value,
    });
  }

  emailHandler(event) {
    this.setState({
      emailData: event.nativeEvent.target.value,
    });
  }

  submitHandler(event) {
    event.preventDefault();
    this.setState({
      submitted: true,
    });

    if (
      this.state.firstNameData &&
      this.state.lastNameData &&
      this.state.emailData
    ) {
      this.setState({
        allValid: true,
      });

      setTimeout(() => {
        this.setState({
          allValid: false,
        });
      }, 5000);
    }
  }

  render() {
    return (
      <div className="form-container">
        <form
          className="register-form"
          autoComplete="off"
          onSubmit={(event) => this.submitHandler(event)}
        >
          {/* Uncomment the next line to show the success message */}
          {this.state.submitted && this.state.allValid && (
            <div className="success-message hidden">
              Success! Thank you for registering
            </div>
          )}

          <input
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={this.state.firstNameData}
            onChange={(event) => this.firstNameHandler(event)}
          />
          {/* Uncomment the next line to show the error message */}
          {!this.state.firstNameData && this.state.submitted && (
            <span id="first-name-error">Please enter a first name</span>
          )}
          <input
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastNameData}
            onChange={(event) => this.lastNameHandler(event)}
          />
          {/* Uncomment the next line to show the error message */}
          {!this.state.lastNameData && this.state.submitted && (
            <span id="last-name-error">Please enter a last name</span>
          )}
          <input
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.emailData}
            onChange={(event) => this.emailHandler(event)}
          />
          {/* Uncomment the next line to show the error message */}
          {!this.state.emailData && this.state.submitted && (
            <span id="email-error">Please enter an email address</span>
          )}
          <button className="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}
