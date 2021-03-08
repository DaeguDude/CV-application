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
    this.state = {
      isDisplay: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isDisplay: true,
    });
  }

  handleEdit(e) {
    this.setState({
      isDisplay: false,
    });
  }

  render() {
    if (this.state.isDisplay) {
      return <FormDisplay info={this.state} handleEdit={this.handleEdit} />;
    } else {
      return (
        <div>
          <h1>Personal</h1>
          <FormInputField
            info={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      );
    }
  }
}

class FormDisplay extends React.Component {
  render() {
    const {
      address,
      city,
      email,
      firstName,
      lastName,
      phoneNumber,
      zip,
    } = this.props.info;

    return (
      <div>
        <h1>Personal</h1>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email Address: {email}</p>
        <p>Phone Number: {phoneNumber}</p>
        <p>Address: {address}</p>
        <p>Zip Code: {zip}</p>
        <p>City: {city}</p>
        <EditBtn handleEdit={this.props.handleEdit} />
      </div>
    );
  }
}

class FormInputField extends React.Component {
  render() {
    const {
      address,
      city,
      email,
      firstName,
      lastName,
      phoneNumber,
      zip,
    } = this.props.info;
    return (
      <form>
        <FormItem
          name="firstName"
          labelName="First name"
          value={firstName}
          handleChange={this.props.handleChange}
        />
        <FormItem
          name="lastName"
          labelName="Last name"
          value={lastName}
          handleChange={this.props.handleChange}
        />
        <FormItemEmail
          name="email"
          labelName="Email address"
          value={email}
          handleChange={this.props.handleChange}
        />
        <FormItemTel
          name="phoneNumber"
          labelName="Phone number"
          value={phoneNumber}
          handleChange={this.props.handleChange}
        />
        <FormItem
          name="address"
          labelName="Address"
          value={address}
          handleChange={this.props.handleChange}
        />
        <FormItemZip
          name="zip"
          labelName="Zip code"
          value={zip}
          handleChange={this.props.handleChange}
        />
        <FormItem
          name="city"
          labelName="City/Town"
          value={city}
          handleChange={this.props.handleChange}
        />

        <SubmitBtn btnName="Display" handleSubmit={this.props.handleSubmit} />
      </form>
    );
  }
}

class EditBtn extends React.Component {
  render() {
    return <button onClick={this.props.handleEdit}>Edit</button>;
  }
}

export default Personal;
