import React  from 'react';
import {Link} from 'react-router-dom';
import CourseRow from "./course-row";

export default class CourseTable
    extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="d-flex bg-dark bg-fade border border-secondary text-light border-bottom-0">
                    <div className="flex-fill px-3 py-2">Title</div>
                    <div className="col-3 px-3 py-2 flex-fill text-center d-none d-md-block">
                        Owned by
                        <i className="fa fa-sort-down"></i>
                    </div>
                    <div className="col-3 px-3 py-2 text-center d-none d-lg-block">Last modified</div>
                    <div className="col-2 col-md-2 px-3 py-2 text-right">
                        <i className="fa  fa-folder pr-2"></i>
                        <i className="fa fa-sort-alpha-up pr-3"></i>
                        <Link to="/courses/grid">
                            <i className="fa  fa-th text-light"></i>
                        </Link>
                    </div>
                </div>
                       {
                           this.props.courses.map( (course, ndx) =>
                               <CourseRow
                                   key={ndx}
                                   deleteCourse={this.props.deleteCourse}
                                   updateCourse={this.props.updateCourse}
                                   course={course}
                                   title={course.title}
                                   owner={course.owner}
                                   lastModified={course.lastModified}
                               />)
                       }
            </React.Fragment>
        );
    }
}