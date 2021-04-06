import React from 'react';
import {
  FormItem,
  SubmitBtn,
  FormItemMonth,
  FormItemYear,
  EditBtn,
} from './Form';
import uniqid from 'uniqid';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      current: {
        jobTitle: '',
        city: '',
        employer: '',
        description: '',
        startMonth: "Don't Show This",
        startYear: 1960,
        endMonth: "Don't Show This",
        endYear: 1960,
      },
      workNumber: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddWork = this.handleAddWork.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      history: this.state.history.concat(this.state.current),
      current: {
        jobTitle: '',
        city: '',
        employer: '',
        description: '',
        startMonth: "Don't Show This",
        startYear: 1960,
        endMonth: "Don't Show This",
        endYear: 1960,
      },
    });
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      current: Object.assign({}, this.state.current, {
        [name]: value,
      }),
    });
  }

  handleAddWork(e) {
    e.preventDefault();
  }

  render() {
    const { history, current } = this.state;

    return (
      <div>
        <h1>Work</h1>
        {history.length >= 1 && <WorkList history={history} />}
        <WorkForm
          info={current}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        {/* Extract it to component */}
        <AddMoreBtn />
      </div>
    );
  }
}

class WorkForm extends React.Component {
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

class WorkList extends React.Component {
  // It should show the list of work experiences
  // It will get history as props
  render() {
    // There will be a list of histories.
    // How can I render a list of histories?
    const history = this.props.history;

    const listItem = history.map((work) => (
      <li key={uniqid()}>
        <div>
          <h4>{work.jobTitle}</h4>
          <p>
            <span>{work.startYear}</span> -<span>{work.endYear}</span>
          </p>
        </div>
        <div>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </li>
    ));

    return <ul>{listItem}</ul>;
  }
}

class AddMoreBtn extends React.Component {
  render() {
    return (
      <button className="add-section-btn" onClick={this.props.handleAddWork}>
        Add another work experience
      </button>
    );
  }
}

export default Work;
