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

class WorkForm extends React.Component {
  render() {
    return (
      <form class="form">
        <div class="form__content">
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
      <div class="form__info-field">
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
      <div class="col">
        <label class="form__label">{name}</label>
        <div class="row">
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
      <div class="col">
        <label class="form__label">{name}</label>
        <div class="row">
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
      <select class="form__input col">
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
    const startYear = 1960;
    const currentYear = 2021;
    const emptyArray = Array(currentYear - startYear + 1).fill(null);
    const years = emptyArray.map((year, yearToAdd) => {
      return startYear + yearToAdd;
    });

    return (
      <select class="form__input col">
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
      <button class="form__small-btn">
        <svg
          className="small-btn__icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
        </svg>
        <span>Delete</span>
      </button>
    );
  }
}

class FormSaveBtn extends React.Component {
  render() {
    return (
      <button class="form__small-btn">
        <svg
          className="small-btn__icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
        </svg>
        <span>Save</span>
      </button>
    );
  }
}

class FormAddAnotherBtn extends React.Component {
  render() {
    return (
      <button className="form__add-another-btn">
        <svg
          class="add-another-btn__icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
        <span>Add another work experience</span>
      </button>
    );
  }
}

class FormCard extends React.Component {
  render() {
    return (
      <div className="form__card">
        <div className="form__card-info">
          <p className="form__card-job-title">Sales Manager</p>
          <p className="form__card-date">october 2021 - july 2021</p>
        </div>
        <div className="form__card-icons">
          <FormCardDelete />
          <FormCardEdit />
        </div>
      </div>
    );
  }
}

class FormCardDelete extends React.Component {
  render() {
    return (
      <svg
        className="form__card-icon form__card-delete"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    );
  }
}

class FormCardEdit extends React.Component {
  render() {
    return (
      <svg
        className="form__card-icon form__card-edit"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      </svg>
    );
  }
}

export default WorkForm;
