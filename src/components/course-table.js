import React  from 'react';
import {Link} from 'react-router-dom';
import CourseRow from "./course-row";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Course Table</h2>
                <Link to="/courses/grid">
                    <i className="fas fa-2x fa-th float-right"></i>
                </Link>
                <table className="table">
                    <tbody>
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
                    </tbody>
                </table>
            </div>
        );
    }
}