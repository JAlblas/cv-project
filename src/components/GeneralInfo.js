import React, { Component } from 'react'

class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };

        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit() {
        this.setState({isEditing: !this.state.isEditing});
    }

    render() {
        /*
        return (
            <div>
                {this.state.isEditing ? editingTemplate : normalTemplate}
                <h3>Count: {this.props.count}</h3>
                <ul>
                    {this.props.todos.map((todo) => {
                        return <li key={todo.index}>{todo.title} - {todo.index}
                        <button onClick={() => this.props.removeTodo(todo.index)}>Delete</button>
                        <button onClick={() => this.setState({isEditing: !this.state.isEditing})}>Edit</button>
                        </li>;
                    })}
                </ul>
            </div>
        )
        */
        const normalTemplate = (
            <div className="info-box">
                <h3>General</h3>
                <div className="field-box">
                    <p>Name:</p>
                    <p>test</p>
                </div>
                <div className="field-box">
                    <p>Email:</p>
                    <p>test</p>
                </div>
                <div className="field-box">
                    <p>Telephone:</p>
                    <p>test</p>
                </div>
                <button onClick={this.toggleEdit}>Edit</button>
            </div>
        )

        const editingTemplate = (
            <div className="info-box">
                <h3>General</h3>
                <div className="field-box">
                    <p>Name:</p>
                    <input value="test"></input>
                </div>
                <div className="field-box">
                    <p>Email:</p>
                    <input value="test"></input>
                </div>
                <div className="field-box">
                    <p>Telephone:</p>
                    <input value="test"></input>
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