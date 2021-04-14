import React from 'react';
import FormCardDeleteIcon from '../../icons/FormCardDeleteIcon';
import FormCardEditIcon from '../../icons/FormCardEditIcon';

class FormCard extends React.Component {
  render() {
    const {
      jobTitle,
      startMonth,
      startYear,
      endMonth,
      endYear,
    } = this.props.workInfo;
    const handleFormCardDelete = this.props.handleFormCardDelete;
    const handleFormCardEdit = this.props.handleFormCardEdit;

    return (
      <div className="form__card">
        <div className="form__card-info">
          <p className="form__card-job-title">{jobTitle}</p>
          <p className="form__card-date">
            {startMonth} {startYear} - {endMonth} {endYear}
          </p>
        </div>
        <div className="form__card-icons">
          <FormCardDeleteIcon handleFormCardDelete={handleFormCardDelete} />
          <FormCardEditIcon handleFormCardEdit={handleFormCardEdit} />
        </div>
      </div>
    );
  }
}

class EducationFormCard extends React.Component {
  render() {
    const {
      degree,
      startMonth,
      startYear,
      endMonth,
      endYear,
    } = this.props.educationInfo;
    const handleFormCardDelete = this.props.handleFormCardDelete;
    const handleFormCardEdit = this.props.handleFormCardEdit;

    return (
      <div className="form__card">
        <div className="form__card-info">
          <p className="form__card-job-title">{degree}</p>
          <p className="form__card-date">
            {startMonth} {startYear} - {endMonth} {endYear}
          </p>
        </div>
        <div className="form__card-icons">
          <FormCardDeleteIcon handleFormCardDelete={handleFormCardDelete} />
          <FormCardEditIcon handleFormCardEdit={handleFormCardEdit} />
        </div>
      </div>
    );
  }
}

export { FormCard, EducationFormCard };
