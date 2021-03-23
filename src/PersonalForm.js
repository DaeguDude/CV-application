import React from 'react';
import { FormNextStepBtn } from './Form/FormBtns';
import { FormTitle, FormRow, TwoColumnsFormRow, FormItem } from './Form/Form';

class PersonalForm extends React.Component {
  render() {
    return (
      <form className="form">
        <div className="form__content">
          <FormTitle title="Personal Details" />
          <PersonalInfoField />
        </div>
        <div className="form__footer">
          <FormNextStepBtn />
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
          <FormItem name="First name" type="text" />
        </FormRow>

        <FormRow>
          <FormItem name="Last name" type="text" />
        </FormRow>

        <TwoColumnsFormRow
          firstItem={<FormItem name="Email" type="email" />}
          secondItem={<FormItem name="Phone number" type="tel" />}
        />

        <FormRow>
          <FormItem name="Last name" type="text" />
        </FormRow>

        <TwoColumnsFormRow
          firstItem={<FormItem name="Zip code" type="text" />}
          secondItem={<FormItem name="City/Town" type="text" />}
        />
      </div>
    );
  }
}

export { PersonalForm, FormTitle, FormRow, TwoColumnsFormRow, FormItem };
