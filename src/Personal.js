import React from 'react';

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

class FormItem extends React.Component {
  render() {
    const { name, labelName, handleChange } = this.props;

    return (
      <div>
        <label>{labelName}</label>
        <input name={name} onChange={handleChange} type="text" />
      </div>
    );
  }
}

class FormItemEmail extends React.Component {
  render() {
    const { name, labelName, handleChange } = this.props;

    return (
      <div>
        <label>{labelName}</label>
        <input name={name} onChange={handleChange} type="email" />
      </div>
    );
  }
}

class FormItemTel extends React.Component {
  render() {
    const { name, labelName, handleChange } = this.props;

    return (
      <div>
        <label>{labelName}</label>
        <input name={name} onChange={handleChange} type="tel" />
      </div>
    );
  }
}

class FormItemZip extends React.Component {
  render() {
    const { name, labelName, handleChange } = this.props;

    return (
      <div>
        <label>{labelName}</label>
        <input
          name={name}
          onChange={handleChange}
          type="text"
          pattern="[0-9]*"
        />
      </div>
    );
  }
}

class SubmitBtn extends React.Component {
  render() {
    const { btnName, handleSubmit } = this.props;
    return <input type="submit" value={btnName} onClick={handleSubmit} />;
  }
}

export default Personal;
