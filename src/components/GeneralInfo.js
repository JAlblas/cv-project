import React, { Component } from 'react'

class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };

        this.toggleEdit = this.toggleEdit.bind(this);
        console.log(this.props.data);
    }

    toggleEdit() {
        this.setState({isEditing: !this.state.isEditing});
    }

    render() {

        const { name, email, telephone } = this.props.data;

        const normalTemplate = (
            <div className="info-box" id="general-box">
                <h3>General Information</h3>
                <div className="field-box">
                    <span>Name:</span>
                    <p>{name}</p>
                </div>
                <div className="field-box">
                    <span>Email:</span>
                    <p>{email}</p>
                </div>
                <div className="field-box">
                    <span>Telephone:</span>
                    <p>{telephone}</p>
                </div>
                <button onClick={this.toggleEdit}>Edit</button>
            </div>
        )

        const editingTemplate = (
            <div className="info-box" id="general-box">
                <h3>General Information</h3>
                <div className="field-box">
                    <span>Name:</span>
                    <input value={name} name="name" onChange={(evt) => this.props.handleInputChange(null, evt)}></input>
                </div>
                <div className="field-box">
                    <span>Email:</span>
                    <input value={email} name="email" onChange={(evt) => this.props.handleInputChange(null, evt)}></input>
                </div>
                <div className="field-box">
                    <span>Telephone:</span>
                    <input value={telephone} name="telephone" onChange={(evt) => this.props.handleInputChange(null, evt)} ></input>
                </div>
                <button onClick={this.toggleEdit}>Save</button>
            </div>
        )

        return this.state.isEditing ? editingTemplate : normalTemplate;
    }
}

export default GeneralInfo