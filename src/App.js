// import Personal from './components/Personal';
// import Work from './components/Work';
// import Education from './components/Education';

import PersonalForm from './PersonalForm';
import WorkForm from './WorkForm';
import EducationForm from './EducationForm';
import ProgressBar from './ProgressBar';
import React from 'react';
import HeadingBg from './HeadingBg';
import NextStep from './NextStep';
import Template from './Template';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <HeadingBg />
    </div>
  );
  // return <PersonalForm />;
}

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <a class="page-logo">
          <span>CV</span>maker
        </a>
      </header>
    );
  }
}

const initialWorkInfo = {
  jobTitle: '',
  city: '',
  employer: '',
  description: '',
  startMonth: "Don't Show This",
  startYear: 1960,
  endMonth: "Don't Show This",
  endYear: 1960,
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'personal',
      work: {
        history: [],
        currentInfo: initialWorkInfo,
        isEditing: false,
        editCardNumber: null,
        formInfoIsPresent: false,
      },
    };

    this.handleNext = this.handleNext.bind(this);
    this.onHandleAddAnotherExperience = this.onHandleAddAnotherExperience.bind(
      this
    );
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  handleNext(e) {
    console.log('handle Next');
    if (this.state.currentPage === 'personal') {
      this.setState({
        currentPage: 'experiences',
      });
    }

    if (this.state.currentPage === 'experiences') {
      this.setState({
        currentPage: 'template',
      });
    }
  }

  onHandleAddAnotherExperience(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      work: {
        ...prevState.work,
        formInfoIsPresent: true,
      },
    }));
  }

  onHandleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState((prevState) => ({
      work: {
        ...prevState.work,
        currentInfo: {
          ...prevState.work.currentInfo,
          [name]: value,
        },
      },
    }));
  }

  render() {
    const currentPage = this.state.currentPage;
    let page;
    if (currentPage === 'personal') {
      page = <PersonalForm />;
    } else if (currentPage === 'experiences') {
      page = (
        <div>
          <WorkForm
            work={this.state.work}
            onHandleAddAnotherExperience={this.onHandleAddAnotherExperience}
            onHandleChange={this.onHandleChange}
          />
          <EducationForm />
        </div>
      );
    } else {
      page = <Template />;
    }

    return (
      <div>
        <main class="container">
          <h1 class="page-title">Personal Details</h1>
          <ProgressBar currentPage={currentPage} />
          {page}
          <NextStep handleNext={this.handleNext} />
        </main>
      </div>
    );
  }
}

export default App;
