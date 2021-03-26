import React from 'react';
import FormCardDeleteIcon from '../icons/FormCardDeleteIcon';
import FormCardEditIcon from '../icons/FormCardEditIcon';

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
          <FormCardEditIcon />
        </div>
      </div>
    );
  }
}

export { FormCard };
