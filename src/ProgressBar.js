import React from 'react';

class ProgressBar extends React.Component {
  render() {
    return (
      <div className="progress-bar">
        <div className="progress-bar__bar">
          <div className="progress-bar__filler"></div>
        </div>
        <div className="progress-bar__buttons">
          <button className="progress-bar__button">
            <PersonIcon />
            <ProgressBarLabel label="Personal" />
          </button>
          <button className="progress-bar__button">
            <DocumentIcon />
            <ProgressBarLabel label="Experiences" />
          </button>
          <button className="progress-bar__button">
            <CreateIcon />
            <ProgressBarLabel label="Template" />
          </button>
        </div>
      </div>
    );
  }
}

class ProgressBarLabel extends React.Component {
  render() {
    const label = this.props.label;

    return <div class="progress-bar__label">{label}</div>;
  }
}

class PersonIcon extends React.Component {
  render() {
    return (
      <svg
        className="progress-bar__icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    );
  }
}

class DocumentIcon extends React.Component {
  render() {
    return (
      <svg
        className="progress-bar__icon"
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <g>
          <rect fill="none" height="24" width="24" />
          <path d="M20.41,8.41l-4.83-4.83C15.21,3.21,14.7,3,14.17,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V9.83 C21,9.3,20.79,8.79,20.41,8.41z M7,7h7v2H7V7z M17,17H7v-2h10V17z M17,13H7v-2h10V13z" />
        </g>
      </svg>
    );
  }
}

class CreateIcon extends React.Component {
  render() {
    return (
      <svg
        className="progress-bar__icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      </svg>
    );
  }
}

export default ProgressBar;
