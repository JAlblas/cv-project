import React, { Component } from 'react'

import './App.css';

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
      ]
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
    this.addWork = this.addWork.bind(this);
    this.removeWork = this.removeWork.bind(this);
  }
  
  handleInputChange(index, e) {
    let targetName = e.target.name;
    
    if (targetName === "school" || targetName === "study" || targetName === "date" ) {
      this.setState(state => {
        state.educationInfo[index][targetName] = e.target.value
        console.log(state);
        return state;
      })
    }
    else if (targetName === "name" || targetName === "email" || targetName === "telephone" ) {
      this.setState(state => {
        state.generalInfo[targetName] = e.target.value
        console.log(state);
        return state;
      })
    } 
    else
    {
      this.setState(state => {
        state.practicalInfo[index][targetName] = e.target.value
        console.log(state);
        return state;
      })
    }

  }

  addEducation() {
    let newList = this.state.educationInfo.slice();
    newList.push({school: "", study: "", date: ""});
    this.setState({educationInfo: newList});
  }

  removeEducation(index) {
    let newList = this.state.educationInfo.slice();
    newList.splice(index, 1);
    this.setState({educationInfo: newList});
  }

  addWork() {
    let newList = this.state.practicalInfo.slice();
    newList.push({school: "", study: "", date: ""});
    this.setState({practicalInfo: newList});
  }

  removeWork(index) {
    let newList = this.state.practicalInfo.slice();
    newList.splice(index, 1);
    this.setState({practicalInfo: newList});
  }

  render() {
    return (
      <div className="App">
        <h1>Curriculum Vitae</h1>
        <GeneralInfo data={this.state.generalInfo} handleInputChange={this.handleInputChange}/>
        <EducationInfo data={this.state.educationInfo} addEducation={this.addEducation} removeEducation={this.removeEducation} handleInputChange={this.handleInputChange}/>
        <PracticalInfo  data={this.state.practicalInfo} addWork={this.addWork} removeWork={this.removeWork} handleInputChange={this.handleInputChange}/>
      </div>

    );
  }
}

export default App;
