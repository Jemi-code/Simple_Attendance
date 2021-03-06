import React, {Component} from 'react';
import People from './People';
import Form from './Form';
import {people} from './data';

class App extends Component{
    state = {
        peoples : [...people],
    }

    removeData = (index) => {
        const {peoples} = this.state;

        this.setState({
            peoples: peoples.filter((peoples, i) => {
                return i !== index
            }),
        })
    }

    addData = (character) => {
        const {peoples} = this.state;

        this.setState({
            peoples: [...peoples, character]
        })
    }

    render(){
        const {peoples} = this.state;
        return(
            <div className='main'>
                <div className='formy'>
                <h1>Attendance System</h1>
                <i>Kindly input your details</i>
                <Form addData = {this.addData} />
                <strong>Number of people in meeting {peoples.length}</strong>
                </div>
                <People className = "app" characterData = {peoples} removeData = {this.removeData} />
            </div>
        )
    }
}

export default App;