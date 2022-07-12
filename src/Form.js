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
        this.props.addData(this.state);
        this.setState(this.state);
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
            </form>
            )
    }
}

export default Form;