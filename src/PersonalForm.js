import React from 'react';
import NextIcon from './icons/NextIcon';

class PersonalForm extends React.Component {
  render() {
    return (
      <form className="form">
        <div className="form__content">
          <FormTitle title="Personal Details" />
          <PersonalInfoField />
        </div>
        <div className="form__footer">
          <FormBtn />
        </div>
      </form>
    );
  }
}

class FormTitle extends React.Component {
  render() {
    const title = this.props.title;

    return (
      <header className="form__header">
        <h2 className="form__title">{title}</h2>
      </header>
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

class FormRow extends React.Component {
  render() {
    const children = this.props.children;

    return children.length >= 2 ? (
      <div className="form__row row">{children}</div>
    ) : (
      <div className="form__row">{children}</div>
    );
  }
}

class TwoColumnsFormRow extends React.Component {
  render() {
    const firstItem = this.props.firstItem;
    const secondItem = this.props.secondItem;

    return (
      <FormRow>
        {firstItem}
        {secondItem}
      </FormRow>
    );
  }
}

class FormItem extends React.Component {
  render() {
    const name = this.props.name;
    const type = this.props.type;

    return (
      <div className="col">
        <label className="form__label">{name}</label>
        <input className="form__input" name={name} type={type} />
      </div>
    );
  }
}

class FormBtn extends React.Component {
  render() {
    return (
      <button type="submit" class="form__btn">
        Next Step
        <NextIcon />
      </button>
    );
  }
}

export {
  PersonalForm,
  FormTitle,
  FormRow,
  TwoColumnsFormRow,
  FormItem,
  FormBtn,
};
