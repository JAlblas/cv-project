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
            <div className="info-box">
                <h3>General</h3>
                <div className="field-box">
                    <label>Name:</label>
                    <p>{name}</p>
                </div>
                <div className="field-box">
                    <label>Email:</label>
                    <p>{email}</p>
                </div>
                <div className="field-box">
                    <label>Telephone:</label>
                    <p>{telephone}</p>
                </div>
                <button onClick={this.toggleEdit}>Edit</button>
            </div>
        )

        const editingTemplate = (
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
                <button onClick={this.toggleEdit}>Edit</button>
            </div>
        )

        return (
            <div>
            {this.state.isEditing ? editingTemplate : normalTemplate}
            </div>
        )
    }
}

export default GeneralInfo