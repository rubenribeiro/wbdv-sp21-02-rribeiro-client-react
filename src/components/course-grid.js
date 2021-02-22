import React from 'react';
import {Link} from 'react-router-dom';
import CourseCard from "./course-card";
import CourseRow from "./course-row";

const CourseGrid = (
    {
        courses,
        deleteCourse,
        updateCourse
    }) => {
    return (
        <React.Fragment>
            <div className="d-flex bg-dark bg-fade border border-secondary text-light border-bottom-0">
                <div className="flex-fill px-3 py-2">Documents</div>
                <div className="col-8 px-3 py-2 flex-fill text-center d-none d-md-block">
                    Owned by
                    <i className="fa fa-sort-down"></i>
                </div>
                <div className="col-2 col-md-2 px-3 py-2 text-right">
                    <i className="fa  fa-folder pr-2"></i>
                    <i className="fa fa-sort-alpha-up pr-3"></i>
                    <Link to="/courses/table">
                        <i className="fa  fa-list text-light"></i>
                    </Link>
                </div>
            </div>
            <div className="row">
                {
                    courses.map((course, ndx) => (
                        <CourseCard
                            key={ndx}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}
                            course={course}
                            title={course.title}
                            owner={course.owner}
                            lastModified={course.lastModified}
                        />
                    ))
                }
            </div>
        </React.Fragment>

    );
};

export default CourseGrid;