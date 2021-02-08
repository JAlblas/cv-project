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
      }
    };

  }
    
  render() {
    return (
      <div className="App">
        <h1>Curriculum Vitae</h1>
        <GeneralInfo data={this.state.generalInfo}/>
        <EducationInfo />
        <PracticalInfo />
      </div>

    );
  }
}

export default App;
