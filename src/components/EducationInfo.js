import React, { Component } from 'react'
import '../styles/EducationInfo.css';

class EducationInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, email, telephone } = this.props.data;
        this.props.data.forEach(element => {
            console.log("HI")
            console.log(element);
        }); {}

        return (
            <div className="info-box" id="education-box">
                <h3>Education</h3>
                <button onClick={this.props.addEducation}>Add Education</button>

                <ul>
                    {this.props.data.map((education) => {
                        return (
                        <div className="info-box">
                            <h3>General</h3>
                            <div className="field-box">
                                <label>School:</label>
                                <input value={education.school} name="name" onChange={this.props.handleInputChange}></input>
                            </div>
                            <div className="field-box">
                                <label>Study:</label>
                                <input value={education.email} name="email" onChange={this.props.handleInputChange}></input>
                            </div>
                            <div className="field-box">
                                <label>Date:</label>
                                <input value={education.date} name="telephone" onChange={this.props.handleInputChange} ></input>
                            </div>
                            
                            <button onClick={() => this.setState({isEditing: !this.state.isEditing})}>Edit</button>
                            <button onClick={() => this.setState({})}>Remove</button>

                        </div>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default EducationInfo