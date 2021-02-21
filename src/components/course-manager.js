import React from 'react';
import {Route} from 'react-router-dom';
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";

class CourseManager extends React.Component {
    state = {
        courses : [
            {title: "CS4321", owner: "frank", lastModified: "1/3/32"},
            {title: "CS5432", owner: "greg", lastModified: "1/4/32"},
            {title: "CS6543", owner: "herbert", lastModified: "1/2/32"},
            {title: "CS7654", owner: "frank", lastModified: "1/2/32"},
        ]
    }

    componentDidMount() {
        findAllCourses()
            .then(courses => this.setState({
                courses
            }));
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "New Onwer",
            lastModified: "Never",
        }
        //this.state.courses.push(newCourse);
        //this.setState(this.state);
        courseService.createCourse(newCourse)
            .then(course => this.setState( (prevState) => ({
                ...prevState,
                courses: [
                    ...prevState.courses,
                    course
                ]
            })));
    };

    deleteCourse = (courseToDelete) => {

        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {
                        ...prevState,
                        courses: prevState.courses.filter(course => course !== courseToDelete)
                    };
                })
            });
    };

    updateCourse = (course) => {
        console.log(course);
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(c => c._id === course._id? course: c)
            })));
    }

    render() {
        return (
            <div>
                <h1>Course Manager</h1>
                <button onClick={this.addCourse}>Add Course</button>
                <Route path="/courses/table">
                    <CourseTable
                        deleteCourse={this.deleteCourse}
                        updateCourse={this.updateCourse}
                        courses={this.state.courses}
                    />
                </Route>
                <Route path="/courses/grid">
                    <CourseGrid
                        deleteCourse={this.deleteCourse}
                        updateCourse={this.updateCourse}
                        courses={this.state.courses}
                    />
                </Route>
                <Route
                    path="/courses/editor"
                    render={ (props) => <CourseEditor {...props} />}
                >
                </Route>
            </div>
        );
    }
}

export default CourseManager;


