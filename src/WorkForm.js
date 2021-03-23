import React from 'react';
import uniqid from 'uniqid';
import {
  PersonalForm,
  FormTitle,
  FormRow,
  TwoColumnsFormRow,
  FormItem,
  FormBtn,
} from './PersonalForm';

import { FormCard } from './Form';
import PlusIcon from './icons/PlusIcon';
import SaveIcon from './icons/SaveIcon';
import DeleteIcon from './icons/DeleteIcon';

class WorkForm extends React.Component {
  render() {
    return (
      <form className="form">
        <div className="form__content">
          <FormTitle title="Work Experiences" />
          <FormCard />
          <FormCard />
          <FormCard />
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

class FormItemTextArea extends React.Component {
  render() {
    const name = this.props.name;

    return (
      <div className="col">
        <label className="form__label">{name}</label>
        <textarea className="form__input" name={name} />
      </div>
    );
  }
}

class FormItemMonth extends React.Component {
  render() {
    return (
      <select className="form__input col">
        <option>Don't Show This</option>
        <option>Show Year Only</option>
        <option>January</option>
        <option>February</option>
        <option>March</option>
        <option>April</option>
        <option>May</option>
        <option>June</option>
        <option>July</option>
        <option>September</option>
        <option>October</option>
        <option>November</option>
        <option>December</option>
      </select>
    );
  }
}

class FormItemYear extends React.Component {
  render() {
    console.log(this.props);

    const startYear = 1960;
    const currentYear = 2021;
    const emptyArray = Array(currentYear - startYear + 1).fill(null);
    const years = emptyArray.map((year, yearToAdd) => {
      return startYear + yearToAdd;
    });

    return (
      <select className="form__input col">
        {years.map((year) => (
          <option key={uniqid()}>{year}</option>
        ))}
      </select>
    );
  }
}

class FormSmallBtns extends React.Component {
  render() {
    return (
      <div className="form__small-btns">
        <FormDeleteBtn />
        <FormSaveBtn />
      </div>
    );
  }
}

class FormDeleteBtn extends React.Component {
  render() {
    return (
      <button className="form__small-btn">
        <DeleteIcon />
        <span>Delete</span>
      </button>
    );
  }
}

class FormSaveBtn extends React.Component {
  render() {
    return (
      <button className="form__small-btn">
        <SaveIcon />
        <span>Save</span>
      </button>
    );
  }
}

class FormAddAnotherBtn extends React.Component {
  render() {
    return (
      <button className="form__add-another-btn">
        <PlusIcon />
        <span>Add another work experience</span>
      </button>
    );
  }
}

export default WorkForm;
