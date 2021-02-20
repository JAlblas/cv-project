import React, { Component } from 'react'
import '../styles/EducationInfo.css';

class EducationInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {isEditing: false};
    }

    render() {
        const normalTemplate = (
            <div className="info-box" id="education-box">
                <h3>Educational Info</h3>
                <button onClick={this.props.addEducation}>Add Education</button>
                <button onClick={() => this.setState({isEditing: !this.state.isEditing})}>Edit</button>

                <ul>
                    {this.props.data.map((education, index) => {
                        return (
                        <div className="info-box">
                            <div className="field-box">
                                <label>School:</label>
                                <p>{education.school}</p>
                            </div>
                            <div className="field-box">
                                <label>Study:</label>
                                <p>{education.study}</p>
                            </div>
                            <div className="field-box">
                                <label>Date:</label>
                                <p>{education.date}</p>
                            </div>
                            
                            <button onClick={() => this.props.removeEducation(index)}>Remove</button>
                        </div>
                        );
                    })}
                </ul>
            </div>
        )

        const editingTemplate = (
            <div className="info-box" id="education-box">
                <h3>Educational Info Edit</h3>
                <button onClick={this.props.addEducation}>Add Education</button>
                <button onClick={() => this.setState({isEditing: !this.state.isEditing})}>Edit</button>

                <ul>
                    {this.props.data.map((education, index) => {
                        console.log(index);
                        return (
                        <div className="info-box">
                            <div className="field-box">
                                <label>School:</label>
                                <input value={education.school} name="school" onChange={(evt) => this.props.handleInputChange(index, evt)}></input>
                            </div>
                            <div className="field-box">
                                <label>Study:</label>
                                <input value={education.email} name="study" onChange={(evt) => this.props.handleInputChange(index, evt)}></input>
                            </div>
                            <div className="field-box">
                                <label>Date:</label>
                                <input value={education.date} name="date" onChange={(evt) => this.props.handleInputChange(index, evt)}></input>
                            </div>
                            
                            <button onClick={() => this.props.removeEducation(index)}>Remove</button>

                        </div>
                        );
                    })}
                </ul>
            </div>
        )

        return (
            <div>
            {this.state.isEditing ? editingTemplate : normalTemplate}
            </div>
        )
    }
}

export default EducationInfo