import React, { Component } from 'react';

class StudentList extends Component {
    
        containerStyle= {
          margin: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '10px',
          backgroundColor: '#f9f9f9',
        };
        tableStyle= {
          width: '100%',
          borderCollapse: 'collapse',
        };
        thStyle= {
          backgroundColor: 'purple',
          color: '#fff',
          padding: '10px',
          textAlign: 'left',
        };

        buttonstyle={

        };
      
      

    render() {
        return (
            <div style={this.containerStyle}>
                <table style={this.tableStyle}>
                    <thead>
                        <tr>
                            <th style={this.thStyle}>Name</th>
                            <th style={this.thStyle}>Age</th>
                            <th style={this.thStyle}>Class</th>
                            <th style={this.thStyle}>Address</th>
                            <th style={this.thStyle}>Action</th>
                        </tr>
                    </thead>
                    
                </table>
            </div>
        );
    }
}

export default StudentList;