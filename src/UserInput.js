import React, { Component } from 'react';
import styles from './style/UserInput.css';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class UserInput extends Component{
    
    state = {
        name: '',
        birth: moment(),
        email: '',
        children: 0,
    };

    inputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if(name === 'name'){
            if(! /^[a-zA-Z\s]*$/.test(value)){
                return;
            }
        }
        if(name === 'email'){
            if(! /^[a-zA-Z0-9+@.]*$/.test(value)){
                return;
            }
        }
        if(name === 'children'){
            if(! /^[0-9]*$/.test(value)){
                return;
            }
        }

        this.setState({
            [name]: value
        });
    };

    dateChange = (birth) => {
        if(! birth._isAMomentObject){
            return;
        }
        this.setState({
            birth: birth
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.uploadUser({...this.state})
    }

    render() {
        return (
            <div id='user-input'>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type='text' id='user-name' name='name' onChange={this.inputChange} value={this.state.name} required/>
                </label>
                <label>
                    Date of birth:
                    <DatePicker dateFormat='DD/MM/YYYY' selected={this.state.birth} name='birth' onChange={this.dateChange}/>
                </label>
                <label>
                    Email address:
                    <input type='text' id='email' name='email' type='email' onChange={this.inputChange} value={this.state.email} required/>
                </label>
                <label>
                    Number of children:
                    <select id='children' name='children' onChange={this.inputChange} value={this.state.children} required>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
    
};
