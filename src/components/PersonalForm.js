import React from 'react';
import { FormTitle, FormRow, TwoColumnsFormRow, FormItem } from '../Form/Form';

class PersonalForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onHandleChange(e, 'personal');
  }

  render() {
    return (
      <form className="form">
        <div className="form__content">
          <FormTitle title="Personal Details" />
          <PersonalInfoField
            info={this.props.personal}
            handleChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

class PersonalInfoField extends React.Component {
  render() {
    const handleChange = this.props.handleChange;
    const info = this.props.info;

    return (
      <div>
        <FormRow>
          <FormItem
            labelName="First name"
            name="firstName"
            type="text"
            handleChange={handleChange}
            value={info.firstName}
          />
        </FormRow>

        <FormRow>
          <FormItem
            labelName="Last name"
            name="lastName"
            type="text"
            handleChange={handleChange}
            value={info.lastName}
          />
        </FormRow>

        <TwoColumnsFormRow
          firstItem={
            <FormItem
              labelName="Email"
              name="email"
              type="email"
              handleChange={handleChange}
              value={info.email}
            />
          }
          secondItem={
            <FormItem
              labelName="Phone number"
              name="phoneNumber"
              type="tel"
              handleChange={handleChange}
              value={info.phoneNumber}
            />
          }
        />

        <FormRow>
          <FormItem
            labelName="Address"
            name="address"
            type="text"
            handleChange={handleChange}
            value={info.address}
          />
        </FormRow>

        <TwoColumnsFormRow
          firstItem={
            <FormItem
              labelName="Zip code"
              name="zip"
              type="text"
              handleChange={handleChange}
              value={info.zip}
            />
          }
          secondItem={
            <FormItem
              labelName="City/Town"
              name="city"
              type="text"
              handleChange={handleChange}
              value={info.city}
            />
          }
        />
      </div>
    );
  }
}

export default PersonalForm;
