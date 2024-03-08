import React, { Component } from 'react';


class AddStudent extends Component {
    

    divStyle = {
        border: '2px solid purple',
        borderRadius: '6px',
        padding: '50px',
        backgroundColor: 'white',
        margin: '170px auto',
        maxWidth: '600px',
        textAlign: 'center',
    };

    h3Style = {
        color: 'purple',
    };

    labelStyle = {
        color: 'purple',
        fontWeight: 'bold',
    };

    inputStyle = {
        borderRadius: '5px',
        border: '1px solid #ccc',
        padding: '8px',
        width: 'calc(100% - 20px)',
        marginTop: '5px',
        marginBottom: '15px',
    };

    textareaStyle={
        borderRadius: '5px',
        border: '1px solid #ccc',
        padding: '8px',
        width: 'calc(100% - 20px)',
        marginTop: '5px',
        marginBottom: '15px',
    }

    buttonStyle = {
        borderRadius: '5px',
        backgroundColor: 'green',
        color: 'white',
        height: '40px',
        width: '90px',
        border: 'none',
        cursor: 'pointer',
    };


    state = {
        name: '',
        age: '',
        class: '',
        address: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        
        fetch('http://localhost:5000/api/poststudents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Data posted:', data);
            alert("Student added successfully")
            
            this.setState({
                name: '',
                age: '',
                class: '',
                address: ''
            });
        })
        .catch(error => {
            console.error('Error posting data:', error);
        });
    };

    render() {
        return (
            
            <div style={this.divStyle}>
            <h3 style={this.h3Style}>Add Student Form</h3>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label style={this.labelStyle}><b>Name:</b></label>
                    <input 
                        style={this.inputStyle}
                        type="text" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                    />
                </div>
                <div>
                    <label style={this.labelStyle}><b>Age:</b></label>
                    <input 
                        style={this.inputStyle}
                        type="text" 
                        name="age" 
                        value={this.state.age} 
                        onChange={this.handleChange} 
                    />
                </div>
                <div>
                    <label style={this.labelStyle}><b>Class:</b></label>
                    <input 
                        style={this.inputStyle}
                        type="text" 
                        name="class" 
                        value={this.state.class} 
                        onChange={this.handleChange} 
                    />
                </div>
                <div>
                    <label style={this.labelStyle}><b>Address:</b></label>
                    <textarea 
                        style={this.textareaStyle}
                        name="address" 
                        value={this.state.address} 
                        onChange={this.handleChange} 
                    />
                </div>
                <div>
                    <button style={this.buttonStyle} type="submit">Submit</button>
                </div>
            </form>
        </div>
            
        );
    }
}

export default AddStudent;