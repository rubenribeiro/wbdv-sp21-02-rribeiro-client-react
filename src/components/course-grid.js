import React from 'react';
import {Link} from 'react-router-dom';
import CourseCard from "./course-card";

const CourseGrid = ({courses, deleteCourse}) => {
    return (
        <div>
            <h2>Course Grid</h2>
            <Link to="/courses/table">
                <i className="fas fa-2x fa-list float-right"></i>
            </Link>
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