import React from 'react';
import {
  FormTitle,
  FormRow,
  TwoColumnsFormRow,
  FormItem,
  FormItemTextArea,
  FormItemMonth,
  FormItemYear,
} from './Form/Form';
import { FormCard } from './Form/FormCard';
import { FormSmallBtns, FormAddAnotherBtn } from './Form/FormBtns';

class WorkForm extends React.Component {
  render() {
    return (
      <form className="form">
        <div className="form__content">
          <FormTitle title="Work Experiences" />
          <FormInfoField />
        </div>
      </form>
    );
  }
}

class FormInfoField extends React.Component {
  render() {
    return (
      <div className="form__info-field">
        <TwoColumnsFormRow
          firstItem={<FormItem name="Job Title" type="text" />}
          secondItem={<FormItem name="City/Town" type="text" />}
        />

        <FormRow>
          <FormItem name="Employer" type="text" />
        </FormRow>

        <TwoColumnsFormRow
          firstItem={<FirstItem name="Start Date" />}
          secondItem={<SecondItem name="End Date" />}
        />

        <FormRow>
          <FormItemTextArea name="Description" />
        </FormRow>

        <FormSmallBtns />
        <FormAddAnotherBtn />
      </div>
    );
  }
}

class FirstItem extends React.Component {
  render() {
    const name = this.props.name;

    return (
      <div className="col">
        <label className="form__label">{name}</label>
        <div className="row">
          <FormItemMonth />
          <FormItemYear />
        </div>
      </div>
    );
  }
}

class SecondItem extends React.Component {
  render() {
    const name = this.props.name;

    return (
      <div className="col">
        <label className="form__label">{name}</label>
        <div className="row">
          <FormItemMonth />
          <FormItemYear />
        </div>
      </div>
    );
  }
}

export default WorkForm;
