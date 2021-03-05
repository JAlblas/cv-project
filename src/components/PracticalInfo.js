import React, { Component } from 'react'

class PracticalInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {isEditing: false};
    }

    render() {
        const normalTemplate = (
            <div className="info-box" id="work-box">
            <h3>Work Experience</h3>
            <button onClick={this.props.addWork}>Add Experience</button>
            <button onClick={() => this.setState({isEditing: !this.state.isEditing})}>Edit</button>
            <div>
                {this.props.data.map((work, index) => {
                        return (
                        <div className="field-boxes">
                            <div className="field-box">
                                <span>Company:</span>
                                <p>{work.company}</p>
                            </div>
                            <div className="field-box">
                                <span>Title:</span>
                                <p>{work.title}</p>
                            </div>
                            <div className="field-box">
                                <span>Tasks:</span>
                                <p>{work.tasks}</p>
                            </div>
                            <div className="field-box">
                                <span>Date:</span>
                                <p>{work.date}</p>
                            </div>
                            
                            <button className="remove" onClick={() => this.props.removeWork(index)}>Remove</button>
                        </div>
                        );
                })}
            </div>
        </div>
        )

        const editingTemplate = (
            <div className="info-box" id="work-box">
            <h3>Work Experience</h3>
            <button onClick={this.props.addWork}>Add Experience</button>
            <button onClick={() => this.setState({isEditing: !this.state.isEditing})}>Save</button>
            <div>
                {this.props.data.map((work, index) => {
                        return (
                        <div className="field-boxes">
                            <div className="field-box">
                                <span>Company:</span>
                                <input value={work.company} name="company" onChange={(evt) => this.props.handleInputChange(index, evt)}></input>
                            </div>
                            <div className="field-box">
                                <span>Title:</span>
                                <input value={work.title} name="title" onChange={(evt) => this.props.handleInputChange(index, evt)}></input>
                            </div>
                            <div className="field-box">
                                <span>Tasks:</span>
                                <input value={work.tasks} name="tasks" onChange={(evt) => this.props.handleInputChange(index, evt)}></input>
                            </div>
                            <div className="field-box">
                                <span>Date:</span>
                                <input value={work.date} name="workDate" onChange={(evt) => this.props.handleInputChange(index, evt)}></input>
                            </div>
                            
                            <button className="remove" onClick={() => this.props.removeWork(index)}>Remove</button>
                        </div>
                        );
                })}
            </div>
        </div>
        )

        return this.state.isEditing ? editingTemplate : normalTemplate;







    }
}

export default PracticalInfo