import PersonalForm from './PersonalForm';
import WorkForm from './WorkForm';
import EducationForm from './EducationForm';
import ProgressBar from './ProgressBar';
import React from 'react';
import HeadingBg from './HeadingBg';
import NextStep from './NextStep';
import Template from './Template';
import uniqid from 'uniqid';

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

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'personal',
      work: {
        history: [],
        currentInfo: getNewWorkInfo(),
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
    this.onHandleDelete = this.onHandleDelete.bind(this);
    this.onHandleSave = this.onHandleSave.bind(this);
    this.onHandleFormCardEdit = this.onHandleFormCardEdit.bind(this);
    this.onHandleFormCardDelete = this.onHandleFormCardDelete.bind(this);
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
        isEditing: false,
        editCardNumber: null,
        currentInfo: getNewWorkInfo(),
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

  onHandleDelete(e, id) {
    e.preventDefault();
    const work = this.state.work;
    if (work.isEditing) {
      console.log('Item to delete: ', id);
    }

    this.setState((prevState) => ({
      work: {
        ...prevState.work,
        history: prevState.work.history.filter(
          (workInfo) => workInfo.id !== id
        ),
        isEditing: false,
        editCardNumber: null,
        formInfoIsPresent: false,
        currentInfo: getNewWorkInfo(),
      },
    }));
  }

  onHandleFormCardDelete(id) {
    this.setState((prevState) => {
      const newWork = Object.assign({}, prevState.work);
      const historyWithRemovedWorkInfo = newWork.history.filter(
        (workInfo) => workInfo.id !== id
      );
      newWork.history = historyWithRemovedWorkInfo;

      return { work: newWork };
    });
  }

  onHandleSave(e) {
    e.preventDefault();
    const work = this.state.work;
    if (work.isEditing) {
      this.setState((prevState) => {
        const work = Object.assign({}, prevState.work);
        const newHistory = work.history.slice();
        newHistory.splice(
          prevState.work.editCardNumber,
          1,
          prevState.work.currentInfo
        );

        work.history = newHistory;
        work.currentInfo = getNewWorkInfo();
        work.isEditing = false;
        work.editCardNumber = null;

        return { work };
      });
    } else {
      this.setState((prevState) => ({
        work: {
          ...prevState.work,
          history: [...work.history, prevState.work.currentInfo],
          currentInfo: getNewWorkInfo(),
          isEditing: false,
          editCardNumber: null,
          formInfoIsPresent: false,
        },
      }));
    }
  }

  onHandleFormCardEdit(id) {
    const newWorkHistory = this.state.work.history.slice();
    const workInfoToEdit = newWorkHistory.find(
      (workInfo) => workInfo.id === id
    );
    const indexOfWorkInfoToEdit = newWorkHistory.findIndex(
      (workInfo) => workInfo.id === id
    );

    this.setState((prevState) => ({
      work: {
        ...prevState.work,
        isEditing: true,
        editCardNumber: indexOfWorkInfoToEdit,
        currentInfo: workInfoToEdit,
        formInfoIsPresent: false,
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
            onHandleDelete={this.onHandleDelete}
            onHandleSave={this.onHandleSave}
            onHandleFormCardEdit={this.onHandleFormCardEdit}
            onHandleFormCardDelete={this.onHandleFormCardDelete}
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

function getNewWorkInfo() {
  return {
    id: uniqid(),
    jobTitle: '',
    city: '',
    employer: '',
    description: '',
    startMonth: "Don't Show This",
    startYear: 1960,
    endMonth: "Don't Show This",
    endYear: 1960,
  };
}

export default App;
