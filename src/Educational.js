import React from 'react';
import { FormItem, SubmitBtn } from './Form';
import uniqid from 'uniqid';

// Degree, city/town, school, date , description

class Educational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startMonth: "Don't Show This",
      startYear: 1961,
      endMonth: "Dont' Show This",
      endYear: 1961,
      isDisplay: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isDisplay: true,
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleEdit(e) {
    this.setState({
      isDisplay: false,
    });
  }

  render() {
    if (this.state.isDisplay) {
      return <FormDisplay info={this.state} handleEdit={this.handleEdit} />;
    } else {
      return (
        <div>
          <h1>Education</h1>
          <form>
            <FormItem
              name="degree"
              labelName="Degree"
              value={this.state.degree}
              handleChange={this.handleChange}
            />
            <FormItem
              name="city"
              labelName="City/Town"
              value={this.state.city}
              handleChange={this.handleChange}
            />
            <FormItem
              name="school"
              labelName="School"
              value={this.state.school}
              handleChange={this.handleChange}
            />
            <FormItemMonth
              name="startMonth"
              labelName="Start Month"
              value={this.state.startMonth}
              handleChange={this.handleChange}
            />
            <FormItemYear
              name="startYear"
              labelName="Start Year"
              value={this.state.startYear}
              handleChange={this.handleChange}
            />
            <FormItemMonth
              name="endMonth"
              labelName="End Month"
              value={this.state.endMonth}
              handleChange={this.handleChange}
            />
            <FormItemYear
              name="endYear"
              labelName="End Year"
              value={this.state.endYear}
              handleChange={this.handleChange}
            />
            <FormItem
              name="description"
              labelName="Description"
              value={this.state.description}
              handleChange={this.handleChange}
            />
            <SubmitBtn btnName="save" handleSubmit={this.handleSubmit} />
          </form>
        </div>
      );
    }
  }
}

class FormDisplay extends React.Component {
  render() {
    const {
      degree,
      city,
      school,
      startMonth,
      startYear,
      endMonth,
      endYear,
      description,
    } = this.props.info;

    return (
      <div>
        <h1>Educational</h1>
        <p>Degree: {degree}</p>
        <p>City: {city}</p>
        <p>School: {school}</p>
        <p>Start Month: {startMonth}</p>
        <p>Start Year: {startYear}</p>
        <p>End Month: {endMonth}</p>
        <p>End Year: {endYear}</p>
        <p>Description: {description}</p>
        <EditBtn handleEdit={this.props.handleEdit} />
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

export default Educational;
