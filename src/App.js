import './App.css';
import React, { Component } from 'react'

import GeneralInfo from './components/GeneralInfo';
import EducationInfo from './components/EducationInfo';
import PracticalInfo from './components/PracticalInfo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: {
        name: "",
        telephone: "",
        email: ""
      },
      educationInfo: [
        {test: ""}
      ],
      practicalInfo: [
        {test: ""}
      ]
    };

    this.handleInputChange = this.handleInputChange.bind(this);

  }
  
  handleInputChange(e) {
    console.log(e.target.name);
    let targetName = e.target.name;

    this.setState(state => {
      state.generalInfo[targetName] = e.target.value
      console.log(state);
      return state;
    })
}

  render() {
    return (
      <div className="App">
        <h1>Curriculum Vitae</h1>
        <GeneralInfo data={this.state.generalInfo} handleInputChange={this.handleInputChange}/>
        <EducationInfo />
        <PracticalInfo />
      </div>

    );
  }
}

export default App;
