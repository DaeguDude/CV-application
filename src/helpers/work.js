import uniqid from 'uniqid';

function work() {
  function getInitialProperties() {
    return {
      history: [],
      currentInfo: getNewInfo(),
      isEditing: false,
      editCardNumber: null,
      formInfoIsPresent: false,
    };
  }

  function addAnotherExperience(prevState) {
    return {
      work: {
        ...prevState.work,
        formInfoIsPresent: true,
        isEditing: false,
        editCardNumber: null,
        currentInfo: getNewInfo(),
      },
    };
  }

  function getNewInfo() {
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

  function onHandleChange(prevState, name, value) {
    return {
      work: {
        ...prevState.work,
        currentInfo: {
          ...prevState.work.currentInfo,
          [name]: value,
        },
      },
    };
  }

  function onHandleDelete(prevState, id) {
    const work = prevState.work;
    if (work.isEditing) {
      console.log('Item to delete: ', id);
    }

    return {
      work: {
        ...prevState.work,
        history: prevState.work.history.filter(
          (workInfo) => workInfo.id !== id
        ),
        isEditing: false,
        editCardNumber: null,
        formInfoIsPresent: false,
        currentInfo: getNewInfo(),
      },
    };
  }

  function onHandleFormCardDelete(prevState, id) {
    const newWork = Object.assign({}, prevState.work);
    const historyWithRemovedWorkInfo = newWork.history.filter(
      (workInfo) => workInfo.id !== id
    );
    newWork.history = historyWithRemovedWorkInfo;

    return { work: newWork };
  }

  function onHandleSave(prevState) {
    const work = prevState.work;

    if (work.isEditing) {
      const work = Object.assign({}, prevState.work);
      const newHistory = work.history.slice();
      newHistory.splice(
        prevState.work.editCardNumber,
        1,
        prevState.work.currentInfo
      );

      work.history = newHistory;
      work.currentInfo = getNewInfo();
      work.isEditing = false;
      work.editCardNumber = null;

      return { work };
    } else {
      return {
        work: {
          ...prevState.work,
          history: [...work.history, prevState.work.currentInfo],
          currentInfo: getNewInfo(),
          isEditing: false,
          editCardNumber: null,
          formInfoIsPresent: false,
        },
      };
    }
  }

  function onHandleFormCardEdit(prevState, id) {
    const newWorkHistory = prevState.work.history.slice();
    const workInfoToEdit = newWorkHistory.find(
      (workInfo) => workInfo.id === id
    );
    const indexOfWorkInfoToEdit = newWorkHistory.findIndex(
      (workInfo) => workInfo.id === id
    );

    return {
      work: {
        ...prevState.work,
        isEditing: true,
        editCardNumber: indexOfWorkInfoToEdit,
        currentInfo: workInfoToEdit,
        formInfoIsPresent: false,
      },
    };
  }

  return {
    addAnotherExperience,
    getNewInfo,
    onHandleChange,
    onHandleDelete,
    onHandleFormCardDelete,
    onHandleSave,
    onHandleFormCardEdit,
    getInitialProperties,
  };
}

const WorkHelper = work();

export default WorkHelper;
