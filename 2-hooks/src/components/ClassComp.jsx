
import React, { Component } from 'react';

class ClassComp extends Component {

    /* constructor(props){
        super(props)
        this.state = {
            name: '',
        }
    } */

    state = {
        name: '',
    }

    handleChange = (evt) => {
        this.setState({name: evt.target.value})
    }


    render() {

        const {name} = this.state;

        return (
            <div>
                <h1>Class</h1>
                <p>My Name is: {name}</p>
                <input type="text" value={name} onChange={this.handleChange}/>
            </div>
        );
    }


    
}

export default ClassComp;