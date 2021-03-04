import React, { Component } from 'react'

class PracticalInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="info-box" id="work-box">
            <h3>Work Info</h3>
            <button onClick={this.props.addWork}>Add Education</button>
            <button onClick={() => this.setState({isEditing: !this.state.isEditing})}>Edit</button>
            <div>
                {this.props.data.map((work, index) => {
                        return (
                        <div className="field-boxes">
                            <div className="field-box">
                                <span>School:</span>
                                <p>{work.school}</p>
                            </div>
                            <div className="field-box">
                                <span>Study:</span>
                                <p>{work.study}</p>
                            </div>
                            <div className="field-box">
                                <span>Date:</span>
                                <p>{work.date}</p>
                            </div>
                            
                            <button onClick={() => this.props.removeWork(index)}>Remove</button>
                        </div>
                        );
                })}
            </div>
        </div>
        )
    }
}

export default PracticalInfo