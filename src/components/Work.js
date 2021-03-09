import React from 'react';
import {
  FormItem,
  SubmitBtn,
  FormItemMonth,
  FormItemYear,
  EditBtn,
} from './Form';

class Work extends React.Component {
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
          <h1>Work</h1>
          <form>
            <FormItem
              name="jobTitle"
              labelName="Job Title"
              value={this.state.jobTitle}
              handleChange={this.handleChange}
            />
            <FormItem
              name="city"
              labelName="City/Town"
              value={this.state.city}
              handleChange={this.handleChange}
            />
            <FormItem
              name="employer"
              labelName="Employer"
              value={this.state.employer}
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
      jobTitle,
      city,
      employer,
      startMonth,
      startYear,
      endMonth,
      endYear,
      description,
    } = this.props.info;

    return (
      <div>
        <h1>Work</h1>
        <p>Job Title: {jobTitle}</p>
        <p>City: {city}</p>
        <p>Employer: {employer}</p>
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

export default Work;
