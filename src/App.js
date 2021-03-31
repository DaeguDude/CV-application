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

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'personal',
    };

    this.handleNext = this.handleNext.bind(this);
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

  render() {
    const currentPage = this.state.currentPage;
    let page;
    if (currentPage === 'personal') {
      page = <PersonalForm />;
    } else if (currentPage === 'experiences') {
      page = (
        <div>
          <WorkForm />
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
