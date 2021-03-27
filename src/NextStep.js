import React from 'react';
import NextIcon from './icons/NextIcon';

class NextStep extends React.Component {
  render() {
    const { handleNext } = this.props;

    return (
      <div className="next-step">
        <button onClick={handleNext} className="next-step__btn">
          Next Step
          <NextIcon />
        </button>
      </div>
    );
  }
}

export default NextStep;
