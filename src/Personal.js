import React from 'react';
import {
  FormItem,
  FormItemEmail,
  FormItemTel,
  FormItemZip,
  SubmitBtn,
} from './Form';

class Personal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.email);
    console.log(this.state.phoneNumber);
    console.log(this.state.address);
    console.log(this.state.zip);
    console.log(this.state.city);
  }

  render() {
    return (
      <form>
        <FormItem
          name="firstName"
          labelName="First name"
          handleChange={this.handleChange}
        />
        <FormItem
          name="lastName"
          labelName="Last name"
          handleChange={this.handleChange}
        />
        <FormItemEmail
          name="email"
          labelName="Email address"
          handleChange={this.handleChange}
        />
        <FormItemTel
          name="phoneNumber"
          labelName="Phone number"
          handleChange={this.handleChange}
        />
        <FormItem
          name="address"
          labelName="Address"
          handleChange={this.handleChange}
        />
        <FormItemZip
          name="zip"
          labelName="Zip code"
          handleChange={this.handleChange}
        />
        <FormItem
          name="city"
          labelName="City/Town"
          handleChange={this.handleChange}
        />

        <SubmitBtn btnName="Display" handleSubmit={this.handleSubmit} />
      </form>
    );
  }
}

export default Personal;
