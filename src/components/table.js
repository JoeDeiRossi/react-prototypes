
import React from 'react';

export default props => {
    const tableRows = props.data.map((arrayItem, itemIndex) => {
        return (
            <tr key={itemIndex}>
                <td>{arrayItem.student}</td>
                <td>{arrayItem.course}</td>
                <td>{arrayItem.grade}</td>
            </tr>
        )
    });

    return (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}
