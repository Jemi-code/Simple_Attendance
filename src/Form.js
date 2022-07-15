import React, {Component} from 'react';

class Form extends Component {
    template = {
        "name" : "",
        "title": "",
        "department" : "",
        "id" : "",
    }

    state = this.template;

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name] : value,
        })
    }

    submitData = () => {
        if(this.state.name === "" || this.state.department === "" || this.state.title === "" || this.state.id === ""){
            document.querySelector('.notification').innerHTML = `No field must be left empty`;
        } else {
            this.props.addData(this.state);
        this.setState(this.template);
        this.showNotification(this.state.name);
        }
    }

    showNotification = (name) => {
        let notification = `Your data has been submitted ${name}`;
        const noti = document.querySelector('.notification');
        noti.innerHTML = notification;
        setInterval(() => {
            noti.style.display = "none"
        }, 2000)
    }
    
    render(){
        const {name, title, department, id} = this.state;
        return(
            <form>
                <label htmlFor='name'>Name</label>
                <input
                type = "text"
                name = "name"
                id = "name"
                value= {name} 
                onChange = {this.handleChange}
                />
                <label htmlFor='title'>Title</label>
                <input
                type = "text"
                name = "title"
                id = "title"
                value= {title}
                onChange = {this.handleChange} />
                <label htmlFor='department'>Department</label>
                <input
                type = "text"
                name = "department"
                id = "department"
                value= {department}
                onChange = {this.handleChange} />
                <label htmlFor='id'>ID</label>
                <input
                type = "number"
                name = "id"
                id = "id"
                value= {id}
                onChange = {this.handleChange} />
    
                <input type = 'button' onClick={this.submitData} value = "Submit" />
                <p className='notification'></p>
            </form>
            )
    }
}

export default Form;