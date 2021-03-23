import React from 'react';
import DeleteIcon from '../icons/DeleteIcon';
import SaveIcon from '../icons/SaveIcon';
import PlusIcon from '../icons/PlusIcon';
import NextIcon from '../icons/NextIcon';

class FormNextStepBtn extends React.Component {
  render() {
    return (
      <button type="submit" class="form__btn">
        Next Step
        <NextIcon />
      </button>
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

export { FormNextStepBtn, FormSmallBtns, FormAddAnotherBtn };
