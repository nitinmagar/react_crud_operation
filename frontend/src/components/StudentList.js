import React, { Component } from 'react';

class StudentList extends Component {
    
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

    render() {
        const { students, loading } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h3>Student List</h3>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Name</th>
                            <th style={styles.th}>Age</th>
                            <th style={styles.th}>Class</th>
                            <th style={styles.th}>Address</th>
                            <th style={styles.th}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.id}>
                                <td style={styles.td}>{student.name}</td>
                                <td style={styles.td}>{student.age}</td>
                                <td style={styles.td}>{student.class}</td>
                                <td style={styles.td}>{student.address}</td>
                                <td style={styles.td}>{student.action}</td>
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
        textAlign: 'left',
        backgroundColor: '#f2f2f2',
        borderBottom: '2px solid #dddddd'
    },
    td: {
        border: '1px solid #dddddd',
        padding: '8px',
        borderBottom: '1px solid #dddddd'
    }
};

export default StudentList;