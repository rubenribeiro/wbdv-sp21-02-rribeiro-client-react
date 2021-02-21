import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const CourseRow = (
    {
        course,
        title,
        owner,
        lastModified,
        deleteCourse,
        updateCourse
    }) => {
    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    const saveTitle = () => {
        setEditing(false);
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(course);

    }

    return (<React.Fragment>
        <tr>
            <td>
                {!editing &&
                    <Link to="/courses/editor">
                        {title}
                    </Link>

                }
                {editing &&
                    <input
                        onChange={ (event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }
            </td>
            <td>{owner}</td>
            <td>{lastModified}</td>
            <td>

                <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
                { !editing && <i onClick = { () => setEditing(true)} className="fas fa-edit"></i> }
                { editing && <i onClick = { () => saveTitle() } className="fas fa-check"></i> }
            </td>
        </tr>
    </React.Fragment>);
}

export default CourseRow;