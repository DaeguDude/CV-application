import React from 'react';
import { FormTitle, FormRow, TwoColumnsFormRow, FormItem } from './Form/Form';

class PersonalForm extends React.Component {
  render() {
    return (
      <form className="form">
        <div className="form__content">
          <FormTitle title="Personal Details" />
          <PersonalInfoField />
        </div>
      </form>
    );
  }
}

class PersonalInfoField extends React.Component {
  render() {
    return (
      <div>
        <FormRow>
          <FormItem labelName="First name" name="First name" type="text" />
        </FormRow>

        <FormRow>
          <FormItem labelName="Last name" name="Last name" type="text" />
        </FormRow>

        <TwoColumnsFormRow
          firstItem={<FormItem labelName="Email" name="Email" type="email" />}
          secondItem={
            <FormItem labelName="Phone number" name="Phone number" type="tel" />
          }
        />

        <FormRow>
          <FormItem labelName="Last name" name="Last name" type="text" />
        </FormRow>

        <TwoColumnsFormRow
          firstItem={
            <FormItem labelName="Zip code" name="Zip code" type="text" />
          }
          secondItem={
            <FormItem labelName="City/Town" name="City/Town" type="text" />
          }
        />
      </div>
    );
  }
}

export default PersonalForm;
