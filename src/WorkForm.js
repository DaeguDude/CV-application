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
import uniqid from 'uniqid';

class WorkForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleAddAnotherExperience = this.handleAddAnotherExperience.bind(
      this
    );
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFormCardDelete = this.handleFormCardDelete.bind(this);
    this.handleFormCardEdit = this.handleFormCardEdit.bind(this);
  }

  handleChange(e) {
    this.props.onHandleChange(e, 'work');
  }

  handleSave(e) {
    this.props.onHandleSave(e, 'work');
  }

  handleAddAnotherExperience(e) {
    this.props.onHandleAddAnotherExperience(e, 'work');
  }

  handleDelete(e, id) {
    this.props.onHandleDelete(e, id, 'work');
  }

  handleFormCardDelete(id) {
    this.props.onHandleFormCardDelete(id, 'work');
  }

  handleFormCardEdit(id) {
    this.props.onHandleFormCardEdit(id, 'work');
  }

  render() {
    const workInformation = this.props.work;

    let listItem;
    const { history, editCardNumber } = workInformation;
    if (history.length > 0) {
      listItem = history.map((workInfo, itemNumber) => {
        if (editCardNumber === itemNumber) {
          return (
            <FormInfoField
              key={workInfo.id}
              currentInfo={workInformation.currentInfo}
              handleChange={this.handleChange}
              handleSave={this.handleSave}
              handleDelete={(e) => this.handleDelete(e, workInfo.id)}
            />
          );
        }

        return (
          <FormCard
            key={workInfo.id}
            workInfo={workInfo}
            handleFormCardDelete={(e) => this.handleFormCardDelete(workInfo.id)}
            handleFormCardEdit={() => this.handleFormCardEdit(workInfo.id)}
          />
        );
      });
    }

    return (
      <form className="form">
        <div className="form__content">
          <FormTitle title="Work Experiences" />
          {listItem}
          {workInformation.formInfoIsPresent && (
            <FormInfoField
              currentInfo={workInformation.currentInfo}
              handleChange={this.handleChange}
              handleSave={this.handleSave}
              handleDelete={this.handleDelete}
            />
          )}

          <FormAddAnotherBtn
            handleAddAnotherExperience={this.handleAddAnotherExperience}
            text="Add Another Work Experience"
          />
        </div>
      </form>
    );
  }
}

class FormInfoField extends React.Component {
  render() {
    const handleChange = this.props.handleChange;
    const handleSave = this.props.handleSave;
    const currentInfo = this.props.currentInfo;
    const handleDelete = this.props.handleDelete;

    return (
      <div className="form__info-field">
        <TwoColumnsFormRow
          firstItem={
            <FormItem
              labelName="Job Title"
              name="jobTitle"
              type="text"
              handleChange={handleChange}
              value={currentInfo.jobTitle}
            />
          }
          secondItem={
            <FormItem
              labelName="City/Town"
              name="city"
              type="text"
              handleChange={handleChange}
              value={currentInfo.city}
            />
          }
        />

        <FormRow>
          <FormItem
            labelName="Employer"
            name="employer"
            type="text"
            handleChange={handleChange}
            value={currentInfo.employer}
          />
        </FormRow>

        <TwoColumnsFormRow
          firstItem={
            <FirstItem
              labelName="Start Date"
              handleChange={handleChange}
              startMonth={currentInfo.startMonth}
              startYear={currentInfo.startYear}
            />
          }
          secondItem={
            <SecondItem
              labelName="End Date"
              handleChange={handleChange}
              endMonth={currentInfo.endMonth}
              endYear={currentInfo.endYear}
            />
          }
        />

        <FormRow>
          <FormItemTextArea
            name="description"
            labelName="Description"
            handleChange={handleChange}
            value={currentInfo.description}
          />
        </FormRow>

        <FormSmallBtns handleSave={handleSave} handleDelete={handleDelete} />
      </div>
    );
  }
}

class FirstItem extends React.Component {
  render() {
    const { labelName, handleChange, startMonth, startYear } = this.props;

    return (
      <div className="col">
        <label className="form__label">{labelName}</label>
        <div className="row">
          <FormItemMonth
            month={startMonth}
            name="startMonth"
            handleChange={handleChange}
          />
          <FormItemYear
            year={startYear}
            name="startYear"
            handleChange={handleChange}
          />
        </div>
      </div>
    );
  }
}

class SecondItem extends React.Component {
  render() {
    const { labelName, handleChange, endMonth, endYear } = this.props;

    return (
      <div className="col">
        <label className="form__label">{labelName}</label>
        <div className="row">
          <FormItemMonth
            month={endMonth}
            name="endMonth"
            handleChange={handleChange}
          />
          <FormItemYear
            year={endYear}
            name="endYear"
            handleChange={handleChange}
          />
        </div>
      </div>
    );
  }
}

export default WorkForm;
