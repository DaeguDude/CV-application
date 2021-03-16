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
      history: [{}],
      current: {},
      workNumber: 0,
      isDisplay: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleAddWork = this.handleAddWork.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => {
      return { history: state.history };
    });

    // this.setState({
    //   isDisplay: true,
    // });
  }

  handleChange(e) {
    this.setState({
      current: Object.assign({}, this.state.current, {
        [e.target.name]: e.target.value,
      }),
    });
  }

  handleEdit(e) {
    this.setState({
      isDisplay: false,
    });
  }

  handleAddWork(e) {
    // console.log('Add work my bro');
    e.preventDefault();
    this.setState({
      isDisplay: true,
    });
  }

  render() {
    if (this.state.isDisplay) {
      return <FormDisplay info={this.state} handleEdit={this.handleEdit} />;
    } else {
      return (
        <div>
          <h1>Work</h1>
          <WorkForm
            info={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <button className="add-section-btn" onClick={this.handleAddWork}>
            Add another work experience
          </button>
        </div>
      );
    }
  }
}

class WorkForm extends React.Component {
  render() {
    const {
      current,
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
      <form>
        <FormItem
          name="jobTitle"
          labelName="Job Title"
          value={jobTitle}
          handleChange={this.props.handleChange}
        />
        <FormItem
          name="city"
          labelName="City/Town"
          value={city}
          handleChange={this.props.handleChange}
        />
        <FormItem
          name="employer"
          labelName="Employer"
          value={employer}
          handleChange={this.props.handleChange}
        />
        <FormItemMonth
          name="startMonth"
          labelName="Start Month"
          value={startMonth}
          handleChange={this.props.handleChange}
        />
        <FormItemYear
          name="startYear"
          labelName="Start Year"
          value={startYear}
          handleChange={this.props.handleChange}
        />
        <FormItemMonth
          name="endMonth"
          labelName="End Month"
          value={endMonth}
          handleChange={this.props.handleChange}
        />
        <FormItemYear
          name="endYear"
          labelName="End Year"
          value={endYear}
          handleChange={this.props.handleChange}
        />
        <FormItem
          name="description"
          labelName="Description"
          value={description}
          handleChange={this.props.handleChange}
        />
        <SubmitBtn btnName="save" handleSubmit={this.props.handleSubmit} />
      </form>
    );
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
