import React from 'react';
import CourseCard from "./course-card";

const CourseGrid = ({courses, deleteCourse}) => {
    return (
        <div>
            <h2>Course Grid</h2>
            <div className="row">
            {
                courses.map((course, ndx) => (
                   <CourseCard
                       key={ndx}
                       deleteCourse={deleteCourse}
                       course={course}
                   />
                ))
            }
            </div>
        </div>

    );
};

export default CourseGrid;