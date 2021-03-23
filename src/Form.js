import React from 'react';
import FormCardDeleteIcon from './icons/FormCardDeleteIcon';
import FormCardEditIcon from './icons/FormCardEditIcon';

class FormCard extends React.Component {
  render() {
    return (
      <div className="form__card">
        <div className="form__card-info">
          <p className="form__card-job-title">Sales Manager</p>
          <p className="form__card-date">october 2021 - july 2021</p>
        </div>
        <div className="form__card-icons">
          <FormCardDeleteIcon />
          <FormCardEditIcon />
        </div>
      </div>
    );
  }
}

export { FormCard };
