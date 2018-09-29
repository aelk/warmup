import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

const exerciseOptions = [
  { value: 'squat', label: 'Squat' },
  { value: 'bench', label: 'Bench Press' },
  { value: 'deadlift', label: 'Deadlift' }
];

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedExercise: '',
      numberReps: 0,
      weight: 0,
    };

    this.handleRepChange = this.handleRepChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
  }

  handleExerciseChange = (selectedExercise) => {
    this.setState({ selectedExercise });
  }

  handleRepChange(evt) {
    if (getNumber(evt.target.value)) {
      this.setState({ numberReps: evt.target.value });
    }
  }

  handleWeightChange(evt) {
    if (getNumber(evt.target.value)) {
      this.setState({ weight: evt.target.value});
    }
  }

  render() {
    const { selectedExercise } = this.state;

    return (
      <div>
        <Select
          value={selectedExercise}
          onChange={this.handleExerciseChange}
          options={exerciseOptions}
        />

        <input
          label="Reps"
          value={this.state.numberReps}
          onChange={this.handleRepChange}
        />

        <input
          label="Weight"
          value={this.state.weight}
          onChange={this.handleWeightChange}
        />
      </div>
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

function getNumber(data) {
  const re = /^[0-9\b]+$/;
  return data === '' || re.test(data);
}
