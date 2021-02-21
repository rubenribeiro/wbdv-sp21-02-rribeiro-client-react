import React from 'react';

const CourseEditor = ({history}) => {
    return (
        <div>
                <i onClick={history.goBack} className="fas fa-arrow-left"></i>

            <h2>Course Editor</h2>
        </div>
    );
};

export default CourseEditor;