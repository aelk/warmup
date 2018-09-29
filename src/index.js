import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

/*
  Calculator
  Exercise
  Reps
  Weight

  ...
  Units

*/

const exerciseOptions = [
  { value: 'squat', label: 'Squat' },
  { value: 'bench', label: 'Bench Press' },
  { value: 'deadlift', label: 'Deadlift' }
];

class Exercise extends React.Component {
  state = {
    selectedExercise: null,
  }

  handleChange = (selectedExercise) => {
    this.setState({ selectedExercise });
  }

  render() {
    const { selectedExercise } = this.state;

    return (
      <Select
        value={selectedExercise}
        onChange={this.handleChange}
        options={exerciseOptions}
      />
    );
  }
}

class Calculator extends React.Component {
  render() {
    return (
      <Exercise>
      </Exercise>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);