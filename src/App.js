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
      ],
      practicalInfo: [
        {test: ""}
      ]
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addWork = this.addWork.bind(this);
  }
  
  handleInputChange(e) {
    let targetName = e.target.name;

    this.setState(state => {
      state.generalInfo[targetName] = e.target.value
      console.log(state);
      return state;
    })
  }

  addEducation() {
    let newList = this.state.educationInfo.slice();
    newList.push({school: "haha", study: "study", date: "06/01/2020"});
    this.setState({educationInfo: newList});
  }

  addWork() {
    let newList = this.state.practicalInfo.slice();
    newList.push({school: "haha", study: "study", date: "06/01/2020"});
    this.setState({practicalInfo: newList});
  }


  render() {
    return (
      <div className="App">
        <h1>Curriculum Vitae</h1>
        <GeneralInfo data={this.state.generalInfo} handleInputChange={this.handleInputChange}/>
        <EducationInfo data={this.state.educationInfo} addEducation={this.addEducation}/>
        <PracticalInfo />
      </div>

    );
  }
}

export default App;
