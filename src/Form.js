import React from 'react';

class FormItem extends React.Component {
  render() {
    const { name, labelName, handleChange } = this.props;

    return (
      <div>
        <label>{labelName}</label>
        <input name={name} onChange={handleChange} type="text" />
      </div>
    );
  }
}

class FormItemEmail extends React.Component {
  render() {
    const { name, labelName, handleChange } = this.props;

    return (
      <div>
        <label>{labelName}</label>
        <input name={name} onChange={handleChange} type="email" />
      </div>
    );
  }
}

class FormItemTel extends React.Component {
  render() {
    const { name, labelName, handleChange } = this.props;

    return (
      <div>
        <label>{labelName}</label>
        <input name={name} onChange={handleChange} type="tel" />
      </div>
    );
  }
}

class FormItemZip extends React.Component {
  render() {
    const { name, labelName, handleChange } = this.props;

    return (
      <div>
        <label>{labelName}</label>
        <input
          name={name}
          onChange={handleChange}
          type="text"
          pattern="[0-9]*"
        />
      </div>
    );
  }
}

class SubmitBtn extends React.Component {
  render() {
    const { btnName, handleSubmit } = this.props;
    return <input type="submit" value={btnName} onClick={handleSubmit} />;
  }
}

export { FormItem, FormItemEmail, FormItemTel, FormItemZip, SubmitBtn };
