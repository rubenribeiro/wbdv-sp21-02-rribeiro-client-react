import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const CourseRow = (
    {
        course,
        title,
        owner,
        lastModified,
        deleteCourse,
        updateCourse,
    }) => {
    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    const saveTitle = () => {
        setEditing(false);
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse);
    }

    return (
        <div className="d-flex bg-light border border-secondary border-bottom-0">
            <div className="flex-fill px-3 py-2">
                {!editing &&
                    <Link className="text-secondary" to="/courses/editor">
                        <i className="mr-2 fa fa-file-alt"></i>
                        {course.title}
                    </Link>
                }
                { editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }

            </div>
            <div className="col-3 px-3 py-2 flex-fill text-center d-none d-md-block">
                {owner}
            </div>
            <div className="col-3 px-3 py-2 text-center d-none d-lg-block">{lastModified}</div>
            <div className="col-2 col-md-2 px-3 py-2 text-right">
                <i onClick={() => deleteCourse(course)} className="fas fa-trash pr-2"></i>
                { !editing && <i onClick = { () => setEditing(true)} className="fas fa-edit"></i> }
                { editing && <i onClick = { () => saveTitle() } className="fas fa-check"></i> }
            </div>
        </div>);
}

export default CourseRow;