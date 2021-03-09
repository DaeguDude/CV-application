import React from 'react';
import uniqid from 'uniqid';

class FormItem extends React.Component {
  render() {
    const { name, labelName, handleChange, value } = this.props;

    return (
      <div>
        <label>{labelName}</label>
        <input name={name} value={value} onChange={handleChange} type="text" />
      </div>
    );
  }
}

class FormItemEmail extends React.Component {
  render() {
    const { name, labelName, handleChange, value } = this.props;

    return (
      <div>
        <label>{labelName}</label>
        <input name={name} value={value} onChange={handleChange} type="email" />
      </div>
    );
  }
}

class FormItemTel extends React.Component {
  render() {
    const { name, labelName, handleChange, value } = this.props;

    return (
      <div>
        <label>{labelName}</label>
        <input name={name} value={value} onChange={handleChange} type="tel" />
      </div>
    );
  }
}

class FormItemZip extends React.Component {
  render() {
    const { name, labelName, handleChange, value } = this.props;

    return (
      <div>
        <label>{labelName}</label>
        <input
          name={name}
          value={value}
          onChange={handleChange}
          type="text"
          pattern="[0-9]*"
        />
      </div>
    );
  }
}

class FormItemMonth extends React.Component {
  render() {
    const { name, labelName, handleChange, value } = this.props;

    return (
      <div>
        <label>{labelName}</label>
        <select name={name} value={value} onChange={handleChange}>
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
      </div>
    );
  }
}

class FormItemYear extends React.Component {
  render() {
    const { name, labelName, handleChange, value } = this.props;
    const startYear = 1960;
    const currentYear = 2021;
    const emptyArray = Array(currentYear - startYear).fill(null);
    const years = emptyArray.map((year, index) => {
      return index + 1 + startYear;
    });

    // const listItems = numbers.map((number) => <li>{number}</li>);

    return (
      <div>
        <label>{labelName}</label>
        <select name={name} value={value} onChange={handleChange}>
          {years.map((year) => (
            <option key={uniqid()}>{year}</option>
          ))}
        </select>
      </div>
    );
  }
}

class EditBtn extends React.Component {
  render() {
    return <button onClick={this.props.handleEdit}>Edit</button>;
  }
}

class SubmitBtn extends React.Component {
  render() {
    const { btnName, handleSubmit } = this.props;
    return <input type="submit" value={btnName} onClick={handleSubmit} />;
  }
}

export {
  FormItem,
  FormItemEmail,
  FormItemTel,
  FormItemZip,
  EditBtn,
  SubmitBtn,
  FormItemMonth,
  FormItemYear,
};
