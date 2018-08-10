import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: ''
        }
        this.inputHandler = this.inputHandler.bind(this)
    }
    inputHandler(event) {
        this.setState({
            inputText: event.target.value
        })
        this.props.search(event.target.value);
    }
    render() {


        return (
            <div className="col s12">
                <div className="input-field col s12">
                    <i className="material-icons prefix">search</i>
                    <input onChange={this.inputHandler} value={this.state.inputText} placeholder="Search shows" />
                </div>
            </div>
        );

    }
};

export default SearchBar;