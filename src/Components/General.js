import React from 'react';
import { FormItem, FormItemTwoColumns } from './Form';

class General extends React.Component {
  render() {
    return (
      <div className="container">
        <form className="form general-info">
          <FormSection />
          <FormFooter text="Next Step" />
        </form>
      </div>
    );
  }
}

function FormSection(props) {
  return (
    <div className="form__section">
      <FormSectionHeader title="Personal details" />
      <hr />
      <FormItem label="First name" />
      <FormItem label="Last name" type="text" />
      <FormItemTwoColumns
        firstColLabel="Email address"
        secondColLabel="Phone number"
      />
      <FormItem label="Address" />
      <FormItemTwoColumns firstColLabel="Zip code" secondColLabel="City/Town" />
      <FormSectionFooter />
    </div>
  );
}

function FormSectionHeader(props) {
  return (
    <header>
      <h2 className="general-info__title">{props.title}</h2>
    </header>
  );
}

function FormSectionFooter(props) {
  return (
    <footer>
      <FormSectionLongBtn text="Additional Infomration" />
    </footer>
  );
}

function FormSectionLongBtn(props) {
  return (
    <button className="form__long-btn">
      <i class="far fa-plus-square"></i>
      <span>{props.text}</span>
    </button>
  );
}

function FormFooter(props) {
  return (
    <footer className="form__footer">
      <div class="container">
        <button className="next-btn">
          <span>{props.text}</span>
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </footer>
  );
}

export default General;
