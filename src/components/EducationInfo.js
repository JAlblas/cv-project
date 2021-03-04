import React, { Component } from 'react'
import '../styles/EducationInfo.css'

class EducationInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {isEditing: false};
    }

    render() {
        const normalTemplate = (
            <div className="info-box" id="education-box">
            <h3 className="orange">Educational Info</h3>
            <button onClick={this.props.addEducation}>Add Education</button>
            <button onClick={() => this.setState({isEditing: !this.state.isEditing})}>Edit</button>

            <div>
                {this.props.data.map((education, index) => {
                    return (
                    <div className="field-boxes">
                        <div className="field-box">
                            <span>School:</span>
                            <p>{education.school}</p>
                        </div>
                        <div className="field-box">
                            <span>Study:</span>
                            <p>{education.study}</p>
                        </div>
                        <div className="field-box">
                            <span>Date:</span>
                            <p>{education.date}</p>
                        </div>
                        
                        <button className="remove" onClick={() => this.props.removeEducation(index)}>Remove</button>
                    </div>
                    );
                })}
            </div>
        </div>
        )

        const editingTemplate = (
            <div className="info-box" id="education-box">
            <h3 className="orange">Educational Info</h3>
            <button onClick={this.props.addEducation}>Add Education</button>
            <button onClick={() => this.setState({isEditing: !this.state.isEditing})}>Save</button>

            <div>
                {this.props.data.map((education, index) => {
                    return (
                    <div className="field-boxes">
                        <div className="field-box">
                            <span>School:</span>
                            <input value={education.school} name="school" onChange={(evt) => this.props.handleInputChange(index, evt)}></input>
                        </div>
                        <div className="field-box">
                            <span>Study:</span>
                            <input value={education.study} name="study" onChange={(evt) => this.props.handleInputChange(index, evt)}></input>

                        </div>
                        <div className="field-box">
                            <span>Date:</span>
                            <input value={education.date} name="date" onChange={(evt) => this.props.handleInputChange(index, evt)}></input>
                        </div>
                        <button className="remove" onClick={() => this.props.removeEducation(index)}>Remove</button>
                    </div>
                    );
                })}
            </div>
        </div>
        )

        return this.state.isEditing ? editingTemplate : normalTemplate;


    }


    
}

export default EducationInfo