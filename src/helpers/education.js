import uniqid from 'uniqid';

function Education() {
  function getInitialProperties() {
    return {
      history: [],
      currentInfo: getNewInfo(),
      isEditing: false,
      editCardNumber: null,
      formInfoIsPresent: false,
    };
  }

  function getNewInfo() {
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
  function addAnotherExperience(prevState) {
    return {
      education: {
        ...prevState.education,
        formInfoIsPresent: true,
        isEditing: false,
        editCardNumber: null,
        currentInfo: getNewInfo(),
      },
    };
  }

  function onHandleChange(prevState, name, value) {
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

  function onHandleSave(prevState) {
    const education = prevState.education;

    if (education.isEditing) {
      const newHistory = [...education.history];
      newHistory.splice(education.editCardNumber, 1, education.currentInfo);
      return {
        education: {
          ...education,
          history: newHistory,
          currentInfo: getNewInfo(),
          isEditing: false,
          editCardNumber: null,
        },
      };
    } else {
      return {
        education: {
          ...prevState.education,
          history: [
            ...prevState.education.history,
            prevState.education.currentInfo,
          ],
          currentInfo: getNewInfo(),
          formInfoIsPresent: false,
        },
      };
    }
  }

  function onHandleDelete(prevState, id) {
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
          currentInfo: getNewInfo(),
        },
      };
    }

    return {
      education: {
        ...education,
        currentInfo: getNewInfo(),
        formInfoIsPresent: false,
      },
    };
  }

  function onHandleFormCardDelete(prevState, id) {
    const newHistory = [...prevState.education.history];
    const filteredHistory = newHistory.filter(
      (education) => education.id !== id
    );
    return {
      education: {
        ...prevState.education,
        history: filteredHistory,
      },
    };
  }

  function onHandleFormEdit(prevState, idToFind) {
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

  return {
    getInitialProperties,
    getNewInfo,
    addAnotherExperience,
    onHandleChange,
    onHandleSave,
    onHandleDelete,
    onHandleFormEdit,
    onHandleFormCardDelete,
  };
}

const EducationHelpers = Education();

export default EducationHelpers;
