
import React from 'react';
import Table from './table';

export default () => {
    const students = [
        {
            student: 'Jason Voorhees',
            course: 'Machete',
            grade: 100
        },
        {
            student: 'Michael Myers',
            course: 'Knife',
            grade: 32
        },
        {
            student: 'Freddy Krueger',
            course: 'Gloves',
            grade: 78
        }
    ];
    
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}
