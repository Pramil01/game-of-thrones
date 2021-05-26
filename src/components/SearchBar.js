import React, { Component } from 'react';
import './SearchBar.css'

export default class SearchBar extends Component {
    state = {term : ''};
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={(e)=>e.preventDefault()}>
                    <div className ="field">
                    <label>Character Search</label>
                    <input type="text" 
                    placeholder="Search your character here" 
                    value={this.term} 
                    onChange={(e)=>{this.setState({term :e.target.value});this.props.onChange(e.target.value)}}
                    />
                    </div>
                </form>
            </div>
        )
    }
}
