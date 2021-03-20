import React from 'react';

class PersonalForm extends React.Component {
  render() {
    return (
      <form>
        <FormTitle title="Personal Details" />
        <PersonalInfoField />
      </form>
    );
  }
}

class FormTitle extends React.Component {
  render() {
    const title = this.props.title;

    return (
      <div>
        <h2>{title}</h2>
      </div>
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

    return <div>{children}</div>;
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
      <div>
        <label>{name}</label>
        <input name={name} type={type} />
      </div>
    );
  }
}

export default PersonalForm;
