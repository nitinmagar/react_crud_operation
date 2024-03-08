import React, { Component } from 'react';


class AddStudent extends Component {

    divStyle={
        border:'10px',
        borderRadius:'6px', 
        padding:'50px', 
        backgroundColor:'purple', 
        margin:'170px', 
        marginLeft:'400px', 
        marginRight:'400px'

    }

    h3Styel={
        color:'white'
    }

    labelStyle={
        color:'white'
    }
    
    inputStyle={
        borderRadius:'5px'
    }

    buttonStyle={

    }

    
    render() {
        return (
            <div style={this.divStyle}>
                <h3  style={this.h3Styel}>Add Student Form</h3><br></br>
                <div>
                    <label style={this.labelStyle}><b>Name:</b></label>
                    <input style={this.inputStyle}></input>
                </div><br></br>

                <div>
                    <label style={this.labelStyle}><b>Age:</b></label>
                    <input style={this.inputStyle}></input>
                </div><br></br>

                <div>
                    <label style={this.labelStyle}><b>Class:</b></label>
                    <input style={this.inputStyle}></input>
                </div><br></br>

                <div>
                    <label style={this.labelStyle}><b>Address:</b></label>
                    <input style={this.inputStyle}></input>
                </div><br></br>

                <div>
                   <button style={this.buttonStyle}>Submit</button>
                </div>




                
            </div>
        );
    }
}

export default AddStudent;