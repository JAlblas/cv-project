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
                <button onClick={this.addEducation}>Add Education</button>

                <ul>
                    {this.props.data.map((education) => {
                        return (
                        <div className="info-box">
                            <h3>General</h3>
                            <div className="field-box">
                                <label>Name:</label>
                                <input value={name} name="name" onChange={this.props.handleInputChange}></input>
                            </div>
                            <div className="field-box">
                                <label>Email:</label>
                                <input value={email} name="email" onChange={this.props.handleInputChange}></input>
                            </div>
                            <div className="field-box">
                                <label>Telephone:</label>
                                <input value={telephone} name="telephone" onChange={this.props.handleInputChange} ></input>
                            </div>
                            
                            <p key={education.index}>{education.school}-{education.study}-{education.date}</p>
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