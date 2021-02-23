import React from 'react';
import {Route} from 'react-router-dom';
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import AppBar from "./course-appbar";
import courseService, {findAllCourses} from "../services/course-service";

class CourseManager extends React.Component {

    state = {
        courses : [
            {title: "CS4321", owner: "frank", lastModified: "1/3/32"},
            {title: "CS5432", owner: "greg", lastModified: "1/4/32"},
            {title: "CS6543", owner: "herbert", lastModified: "1/2/32"},
            {title: "CS7654", owner: "frank", lastModified: "1/2/32"},
        ],
        newCourseTitle: ''
    }

    componentDidMount() {
        findAllCourses()
            .then(courses => this.setState({
                courses
            }));
    }

    handleCourseTitleInput = (event) => {
        this.setState((prevState) => ({
            ...prevState,
            newCourseTitle: event.target.value
        }));
    }

    addCourse = () => {
        const newCourse = {
            title: this.state.newCourseTitle,
            owner: "me",
            lastModified: new Date().toLocaleDateString().split(",")[0]
        }

        courseService.createCourse(newCourse)
            .then(course => this.setState( (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ],
                    newCourseTitle: ' ',
                }
            )));
    };

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                        ...prevState,
                        courses: prevState.courses.filter(course => course !== courseToDelete)
                }))
            });
    };

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(c => c._id === course._id ? course: c)
            })));
    }

    render() {
        return (
            <React.Fragment>
            <AppBar />
            <main className="container position-relative">
                <div className="mt-4 mb-3">
                    <h1>Dashboard</h1>
                </div>
                <nav className="navbar navbar-expand-sm navbar-light bg-dark rounded-top justify-content-start">
                    <span className="navbar-brand mb-0 h6 text-light d-none d-md-block"><i className="fa fa-bars"></i>&nbsp;&nbsp;&nbsp;Course Manager</span>
                    <form className="mx-2 my-auto d-inline w-100">
                        <input onChange={this.handleCourseTitleInput} type="text" className="form-control border border-right-0" value={this.state.newCourseTitle} placeholder="New Course Title" />
                    </form>
                    <button onClick={this.addCourse} type="button" className="btn btn-light  ml-2 mt-2 mt-sm-0 ml-sm-0"><i className="fa fa-plus"></i></button>
                </nav>
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
                <button onClick={this.addCourse} type="button" className="btn btn-dark shadow rounded rr-btn-add-course"><i className="fa fa-plus"></i></button>
            </main>
            </React.Fragment>
        );
    }
}

export default CourseManager;


