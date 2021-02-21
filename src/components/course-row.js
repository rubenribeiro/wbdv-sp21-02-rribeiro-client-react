import React from 'react';

const CourseRow = ({course, title, owner, lastModified, deleteCourse}) => {
    return (
        <React.Fragment>
            <tr>
                <td>{title}</td>
                <td>{owner}</td>
                <td>{lastModified}</td>
                <td>
                    <i className="fas fa-check"></i>
                    <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
                    <i className="fas fa-edit"></i>
                </td>
            </tr>
        </React.Fragment>
    );
};

export default CourseRow;