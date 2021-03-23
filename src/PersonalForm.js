import React from 'react';

class PersonalForm extends React.Component {
  render() {
    return (
      <form class="form">
        <div class="form__content">
          <FormTitle title="Personal Details" />
          <PersonalInfoField />
        </div>
        <div class="form__footer">
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
      <header class="form__header">
        <h2 class="form__title">{title}</h2>
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
    console.log(children.length);

    return children.length >= 2 ? (
      <div class="form__row row">{children}</div>
    ) : (
      <div class="form__row">{children}</div>
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
        <label class="form__label">{name}</label>
        <input class="form__input" name={name} type={type} />
      </div>
    );
  }
}

class FormBtn extends React.Component {
  render() {
    return (
      <button type="submit" class="form__btn">
        Next Step
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          class="next-icon"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
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
