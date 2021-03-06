import React,  { Component } from 'react';

class search extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.query(this.state);
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search: </label><br></br>
                    <input type="text" onChange={this.handleChange} value={this.state.content} placeholder="name, username, category" />
                </form>
            </div>
        )
    }
}

export default search;