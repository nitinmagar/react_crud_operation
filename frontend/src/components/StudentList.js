import React, { Component } from 'react';

class StudentList extends Component {
    render() {




        return (
            <div>
                <table style={{padding:'90px', margin:'90px'}}>
                    <tr style={{border:'1px solid black', padding:'10px'}}>
                        <th style={{border:'1px solid black',backgroundColor:'orange',width:'90px'}}>Name</th>
                        <th style={{border:'1px solid black',backgroundColor:'orange',width:'90px'}}>Age</th>
                        <th style={{border:'1px solid black',backgroundColor:'orange',width:'90px'}}>Class</th>
                        <th style={{border:'1px solid black',backgroundColor:'orange',width:'90px'}}>Address</th>

                    </tr>
                </table>
            </div>
        );
    }
}

export default StudentList;