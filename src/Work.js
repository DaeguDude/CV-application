import React from 'react';
import { FormItem, SubmitBtn } from './Form';
import uniqid from 'uniqid';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startMonth: "Don't Show This",
      startYear: 1961,
      endMonth: "Dont' Show This",
      endYear: 1961,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.jobTitle);
    console.log(this.state.city);
    console.log(this.state.employer);
    console.log(this.state.startMonth);
    console.log(this.state.startYear);
    console.log(this.state.endMonth);
    console.log(this.state.endYear);
    console.log(this.state.description);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <form>
        <FormItem
          name="jobTitle"
          labelName="Job Title"
          handleChange={this.handleChange}
        />
        <FormItem
          name="city"
          labelName="City/Town"
          handleChange={this.handleChange}
        />
        <FormItem
          name="employer"
          labelName="Employer"
          handleChange={this.handleChange}
        />
        <FormItemMonth
          name="startMonth"
          labelName="Start Month"
          handleChange={this.handleChange}
        />
        <FormItemYear
          name="startYear"
          labelName="Start Year"
          handleChange={this.handleChange}
        />
        <FormItemMonth
          name="endMonth"
          labelName="End Month"
          handleChange={this.handleChange}
        />
        <FormItemYear
          name="endYear"
          labelName="End Year"
          handleChange={this.handleChange}
        />
        <FormItem
          name="description"
          labelName="Description"
          handleChange={this.handleChange}
        />
        <SubmitBtn btnName="save" handleSubmit={this.handleSubmit} />
      </form>
    );
  }
}

class FormItemMonth extends React.Component {
  render() {
    const { name, labelName, handleChange } = this.props;

    return (
      <div>
        <label>{labelName}</label>
        <select name={name} onChange={handleChange}>
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
    const { name, labelName, handleChange } = this.props;
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
        <select name={name} onChange={handleChange}>
          {years.map((year) => (
            <option key={uniqid()}>{year}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default Work;
