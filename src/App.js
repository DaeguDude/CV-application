import PersonalForm from './components/PersonalForm';
import WorkForm from './components/WorkForm';
import EducationForm from './components/EducationForm';
import ProgressBar from './components/ProgressBar';
import React from 'react';
import HeadingBg from './components/HeadingBg';
import NextStep from './components/NextStep';
import Template from './components/Template';
import EducationHelpers from './helpers/education';
import WorkHelper from './helpers/work';
import PersonalHelper from './helpers/personal';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <HeadingBg />
    </div>
  );
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

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'personal',
      personal: PersonalHelper.getInitialProperties(),
      work: WorkHelper.getInitialProperties(),
      education: EducationHelpers.getInitialProperties(),
    };

    this.handleNext = this.handleNext.bind(this);
    this.onHandleAddAnotherExperience = this.onHandleAddAnotherExperience.bind(
      this
    );
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleDelete = this.onHandleDelete.bind(this);
    this.onHandleSave = this.onHandleSave.bind(this);
    this.onHandleFormCardEdit = this.onHandleFormCardEdit.bind(this);
    this.onHandleFormCardDelete = this.onHandleFormCardDelete.bind(this);
    this.onHandleChangePage = this.onHandleChangePage.bind(this);
  }

  onHandleChangePage(e, name) {
    this.setState({
      currentPage: name,
    });
  }

  handleNext(e) {
    this.setState((prevState) => {
      switch (prevState.currentPage) {
        case 'personal':
          prevState.currentPage = 'experiences';
          break;
        case 'experiences':
          prevState.currentPage = 'template';
          break;
        default:
          break;
      }

      return { currentPage: prevState.currentPage };
    });
  }

  onHandleAddAnotherExperience(e, componentName) {
    e.preventDefault();
    switch (componentName) {
      case 'education':
        this.setState(EducationHelpers.addAnotherExperience);
        break;
      case 'work':
        this.setState(WorkHelper.addAnotherExperience);
        break;
      default:
        break;
    }
  }

  onHandleChange(e, componentName) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    switch (componentName) {
      case 'education':
        this.setState((prevState) =>
          EducationHelpers.onHandleChange(prevState, name, value)
        );
        break;
      case 'work':
        this.setState((prevState) =>
          WorkHelper.onHandleChange(prevState, name, value)
        );
        break;
      case 'personal':
        this.setState((prevState) =>
          PersonalHelper.onHandleChange(prevState, name, value)
        );
      default:
        break;
    }
  }

  onHandleDelete(e, id, componentName) {
    e.preventDefault();
    switch (componentName) {
      case 'education':
        this.setState((prevState) =>
          EducationHelpers.onHandleDelete(prevState, id)
        );
        break;
      case 'work':
        this.setState((prevState) => WorkHelper.onHandleDelete(prevState, id));
      default:
        break;
    }
  }

  onHandleFormCardDelete(id, componentName) {
    switch (componentName) {
      case 'education':
        this.setState((prevState) =>
          EducationHelpers.onHandleFormCardDelete(prevState, id)
        );
        break;
      case 'work':
        this.setState((prevState) =>
          WorkHelper.onHandleFormCardDelete(prevState, id)
        );
      default:
        break;
    }
  }

  onHandleSave(e, componentName) {
    e.preventDefault();

    switch (componentName) {
      case 'education':
        this.setState(EducationHelpers.onHandleSave);
        break;
      case 'work':
        this.setState(WorkHelper.onHandleSave);
      default:
        break;
    }
  }

  onHandleFormCardEdit(id, componentName) {
    switch (componentName) {
      case 'education':
        this.setState((prevState) =>
          EducationHelpers.onHandleFormEdit(prevState, id)
        );
        break;
      case 'work':
        this.setState((prevState) =>
          WorkHelper.onHandleFormCardEdit(prevState, id)
        );
      default:
        break;
    }
  }

  render() {
    const currentPage = this.state.currentPage;
    let page;
    if (currentPage === 'personal') {
      page = (
        <PersonalForm
          personal={this.state.personal}
          onHandleChange={this.onHandleChange}
        />
      );
    } else if (currentPage === 'experiences') {
      page = (
        <div>
          <WorkForm
            work={this.state.work}
            onHandleAddAnotherExperience={this.onHandleAddAnotherExperience}
            onHandleChange={this.onHandleChange}
            onHandleDelete={this.onHandleDelete}
            onHandleSave={this.onHandleSave}
            onHandleFormCardEdit={this.onHandleFormCardEdit}
            onHandleFormCardDelete={this.onHandleFormCardDelete}
          />
          <EducationForm
            education={this.state.education}
            onHandleAddAnotherExperience={this.onHandleAddAnotherExperience}
            onHandleChange={this.onHandleChange}
            onHandleSave={this.onHandleSave}
            onHandleDelete={this.onHandleDelete}
            onHandleFormCardEdit={this.onHandleFormCardEdit}
            onHandleFormCardDelete={this.onHandleFormCardDelete}
          />
        </div>
      );
    } else {
      page = (
        <Template
          personal={this.state.personal}
          work={this.state.work}
          education={this.state.education}
        />
      );
    }

    return (
      <div>
        <main class="container">
          <h1 class="page-title">Personal Details</h1>
          <ProgressBar
            currentPage={currentPage}
            onHandleChangePage={this.onHandleChangePage}
          />
          {page}
          <NextStep handleNext={this.handleNext} />
        </main>
      </div>
    );
  }
}

export default App;
