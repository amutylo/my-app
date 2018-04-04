import React, { Component } from "react";
import './emailform.css'

export default class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputNameLabel = 'Your Name(required)';
    this.inputEmailLabel = 'Your Email(required)';
    this.inputPhoneLabel = 'Your Phone';
    this.inputPostcodeLabel = 'Your Postcode(required)';

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
        [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.inputName.value);
    event.preventDefault();
  }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <p>
            <span className="input input--yoshiko">
            <input
              className="input__field input__field--yoshiko"
              type="text"
              name="name"
              ref={(inputName) => this.inputName = inputName}
              onChange={this.handleInputChange}
            />
            <label className="input__label input__label--yoshiko">
              <span className="input__label-content input__label-content--yoshiko" data-content={this.inputNameLabel}>
                {this.inputNameLabel}
              </span>
            </label>
            </span>
          </p>
          <p>
            <span className="input input--yoshiko">
            <input
              type="email"
              name="email"
              ref={(inputEmail) => this.inputEmail = inputEmail}
              onChange={this.handleInputChange}
            />
            <label className="input__label input__label--yoshiko">
              <span className="input__label-content input__label-content--yoshiko" data-content={this.inputEmailLabel}>
                {this.inputEmailLabel}
              </span>
            </label>
            </span>
          </p>
          <p>
            <span className="input input--yoshiko">
            <input
              type="phone"
              name="phone"
              ref={(inputPhone) => this.inputPhone = inputPhone}
              onChange={this.handleInputChange}
            />
            <label className="input__label input__label--yoshiko">
              <span className="input__label-content input__label-content--yoshiko" data-content={this.inputPhoneLabel}>
                {this.inputPhoneLabel}
              </span>
            </label>
            </span>
          </p>
          <p>
            <span className="input input--yoshiko">
            <input
              type="text"
              name="postcode"
              ref={(inputPostcode) => this.inputPostcode = inputPostcode}
              onChange={this.handleInputChange}
            />
            <label className="input__label input__label--yoshiko">
              <span className="input__label-content input__label-content--yoshiko" data-content={this.inputPostcodeLabel}>
                {this.inputPostcodeLabel}
              </span>
            </label>
            </span>
          </p>
          <p><input type="submit" value="Send these documents " /></p>
        </form>
      );
    }
}