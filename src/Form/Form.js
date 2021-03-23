import React from 'react';
import uniqid from 'uniqid';

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
      <select className="form__input col">
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
    console.log(this.props);

    const startYear = 1960;
    const currentYear = 2021;
    const emptyArray = Array(currentYear - startYear + 1).fill(null);
    const years = emptyArray.map((year, yearToAdd) => {
      return startYear + yearToAdd;
    });

    return (
      <select className="form__input col">
        {years.map((year) => (
          <option key={uniqid()}>{year}</option>
        ))}
      </select>
    );
  }
}

export {
  FormTitle,
  FormRow,
  TwoColumnsFormRow,
  FormItem,
  FormItemTextArea,
  FormItemMonth,
  FormItemYear,
};
