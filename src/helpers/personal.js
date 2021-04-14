function personal() {
  function getInitialProperties() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      zip: '',
      city: '',
    };
  }

  function onHandleChange(prevState, name, value) {
    return {
      personal: {
        ...prevState.personal,
        [name]: value,
      },
    };
  }

  return {
    getInitialProperties,
    onHandleChange,
  };
}

const PersonalHelper = personal();

export default PersonalHelper;
