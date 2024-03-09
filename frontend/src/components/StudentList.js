import React, { Component } from 'react';

class StudentList extends Component {
//get student
    state = {
        students: [],
        loading: true
    };

    componentDidMount() {
        fetch('http://localhost:5000/api/getstudents')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    students: data,
                    loading: false
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                this.setState({ loading: false });
            });
    }
//delete student by id

handleDelete = (_id) => {
    fetch(`http://localhost:5000/api/students/${_id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            this.setState(prevState => ({
                students: prevState.students.filter(student => student._id !== _id)
                
            }));
            alert('Student deleted Successfully');
            
        } else {
            console.error('Failed to delete student');
        }
    })
    .catch(error => {
        console.error('Error deleting student:', error);
    });
};


    render() {
        const { students, loading } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h3 style={{ textAlign: 'center', backgroundColor: 'gold', color: 'white' }}> Student List</h3>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Sr.no</th>
                            <th style={styles.th}>Name</th>
                            <th style={styles.th}>Age</th>
                            <th style={styles.th}>Class</th>
                            <th style={styles.th}>Address</th>
                            <th style={styles.th}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={student.id}>
                                <td style={styles.td}>{index + 1}</td>
                                <td style={styles.td}>{student.name}</td>
                                <td style={styles.td}>{student.age}</td>
                                <td style={styles.td}>{student.class}</td>
                                <td style={styles.td}>{student.address}</td>
                                <td style={styles.td}>
                                    <button style={styles.button} onClick={() => this.handleDelete(student._id)}>Delete</button>
                                    <button style={styles.button}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const styles = {
    table: {
        width: '100%',
        borderCollapse: 'collapse'
    },
    th: {
        border: '1px solid #dddddd',
        padding: '8px',
        backgroundColor: 'green',
        borderBottom: '2px solid #dddddd',
        textAlign: 'center',
        color: 'white'
    },
    td: {
        border: '1px solid #dddddd',
        padding: '8px',
        borderBottom: '1px solid #dddddd',
        textAlign: 'center'
    },

    button: {
        borderRadius: '5px',
        backgroundColor: 'red',
        color: 'white',
        height: '40px',
        width: '90px',
        border: 'none',
        cursor: 'pointer',
        marginRight:'5px'


    }
};

export default StudentList;