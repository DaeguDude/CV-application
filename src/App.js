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
      education: getInitialEducationProperties(),
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

  onHandleAddAnotherExperience(e, componentName) {
    e.preventDefault();
    if (componentName === 'education') {
      this.setState(educationAddAnotherExperience);
    } else {
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
  }

  onHandleChange(e, componentName) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    switch (componentName) {
      case 'education':
        this.setState((prevState) =>
          educationOnHandleChange(prevState, name, value)
        );
        break;
      default:
        break;
    }

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

  onHandleDelete(e, id, componentName) {
    e.preventDefault();
    switch (componentName) {
      case 'education':
        this.setState((prevState) => educationOnHandleDelete(prevState, id));
        break;
      default:
        break;
    }

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

  onHandleFormCardDelete(id, componentName) {
    switch (componentName) {
      case 'education':
        this.setState((prevState) =>
          educationOnHandleFormCardDelete(prevState, id)
        );
        break;
      default:
        break;
    }

    // this.setState((prevState) => {
    //   const newWork = Object.assign({}, prevState.work);
    //   const historyWithRemovedWorkInfo = newWork.history.filter(
    //     (workInfo) => workInfo.id !== id
    //   );
    //   newWork.history = historyWithRemovedWorkInfo;

    //   return { work: newWork };
    // });
  }

  onHandleSave(e, componentName) {
    e.preventDefault();
    const work = this.state.work;

    switch (componentName) {
      case 'education':
        this.setState(educationOnHandleSave);
        break;
      default:
        break;
    }

    // if (work.isEditing) {
    //   this.setState((prevState) => {
    //     const work = Object.assign({}, prevState.work);
    //     const newHistory = work.history.slice();
    //     newHistory.splice(
    //       prevState.work.editCardNumber,
    //       1,
    //       prevState.work.currentInfo
    //     );

    //     work.history = newHistory;
    //     work.currentInfo = getNewWorkInfo();
    //     work.isEditing = false;
    //     work.editCardNumber = null;

    //     return { work };
    //   });
    // } else {
    //   this.setState((prevState) => ({
    //     work: {
    //       ...prevState.work,
    //       history: [...work.history, prevState.work.currentInfo],
    //       currentInfo: getNewWorkInfo(),
    //       isEditing: false,
    //       editCardNumber: null,
    //       formInfoIsPresent: false,
    //     },
    //   }));
    // }
  }

  onHandleFormCardEdit(id, componentName) {
    switch (componentName) {
      case 'education':
        this.setState((prevState) => educationOnHandleFormEdit(prevState, id));
        break;
      default:
        break;
    }
    // const newWorkHistory = this.state.work.history.slice();
    // const workInfoToEdit = newWorkHistory.find(
    //   (workInfo) => workInfo.id === id
    // );
    // const indexOfWorkInfoToEdit = newWorkHistory.findIndex(
    //   (workInfo) => workInfo.id === id
    // );

    // this.setState((prevState) => ({
    //   work: {
    //     ...prevState.work,
    //     isEditing: true,
    //     editCardNumber: indexOfWorkInfoToEdit,
    //     currentInfo: workInfoToEdit,
    //     formInfoIsPresent: false,
    //   },
    // }));
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

function getInitialEducationProperties() {
  return {
    history: [],
    currentInfo: getNewEducationInfo(),
    isEditing: false,
    editCardNumber: null,
    formInfoIsPresent: false,
  };
}

function getNewEducationInfo() {
  return {
    id: uniqid(),
    degree: '',
    city: '',
    school: '',
    startMonth: "Don't Show This",
    startYear: 1960,
    endMonth: "Don't Show This",
    endYear: 1960,
    description: '',
  };
}

// ADD ANOTHER EXPERIENCE
function educationAddAnotherExperience(prevState) {
  return {
    education: {
      ...prevState.education,
      formInfoIsPresent: true,
      isEditing: false,
      editCardNumber: null,
      currentInfo: getNewEducationInfo(),
    },
  };
}

function educationOnHandleChange(prevState, name, value) {
  return {
    education: {
      ...prevState.education,
      currentInfo: {
        ...prevState.education.currentInfo,
        [name]: value,
      },
    },
  };
}

function educationOnHandleSave(prevState) {
  const education = prevState.education;

  if (education.isEditing) {
    const newHistory = [...education.history];
    console.log(
      newHistory.splice(education.editCardNumber, 1, education.currentInfo)
    );
    // return {
    //   education: {
    //     ...education,
    //     history:
    //     isEditing: false,
    //     editCardNumber: null,
    //     currentInfo: getNewEducationInfo(),
    //   },
    // };
  } else {
    return {
      education: {
        ...prevState.education,
        history: [
          ...prevState.education.history,
          prevState.education.currentInfo,
        ],
        currentInfo: getNewEducationInfo(),
        formInfoIsPresent: false,
      },
    };
  }
}

function educationOnHandleDelete(prevState, id) {
  const education = prevState.education;

  if (education.isEditing) {
    return {
      education: {
        ...education,
        history: education.history.filter(
          (educationInfo) => educationInfo.id !== id
        ),
        isEditing: false,
        editCardNumber: null,
        currentInfo: getNewEducationInfo(),
      },
    };
  }

  return {
    education: {
      ...education,
      currentInfo: getNewEducationInfo(),
      formInfoIsPresent: false,
    },
  };
}

function educationOnHandleFormCardDelete(prevState, id) {
  const newHistory = [...prevState.education.history];
  const filteredHistory = newHistory.filter((education) => education.id !== id);
  return {
    education: {
      ...prevState.education,
      history: filteredHistory,
    },
  };
}

function educationOnHandleFormEdit(prevState, idToFind) {
  const history = prevState.education.history;
  const educationInfoToEdit = history.find(({ id }) => id === idToFind);
  const indexOfEducationInfoToEdit = history.findIndex(
    ({ id }) => id === idToFind
  );

  return {
    education: {
      ...prevState.education,
      editCardNumber: indexOfEducationInfoToEdit,
      currentInfo: educationInfoToEdit,
      isEditing: true,
      formInfoIsPresent: false,
    },
  };
}

export default App;
