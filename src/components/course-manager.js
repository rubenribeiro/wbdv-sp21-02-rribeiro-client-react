import React from 'react';
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";



class CourseManager extends React.Component {
    state = {
        courses : [
            {title: "CS4321", owner: "frank", lastModified: "1/3/32"},
            {title: "CS5432", owner: "greg", lastModified: "1/4/32"},
            {title: "CS6543", owner: "herbert", lastModified: "1/2/32"},
            {title: "CS7654", owner: "frank", lastModified: "1/2/32"},
        ]
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "New Onwer",
            lastModified: "Never",
        }
        this.state.courses.push(newCourse);
        this.setState(this.state);
    };

    deleteCourse = (courseToDelete) => {
        //console.log(course);

        const newCourses = this.state.courses.filter( course => course !== courseToDelete);
        this.setState({
            courses: newCourses
        })
    };

    render() {
        return (
            <div>
                <h1>Course Manager</h1>
                <button onClick={this.addCourse}>Add Course</button>
                <CourseTable deleteCourse={this.deleteCourse} courses={this.state.courses}/>
                <CourseGrid deleteCourse={this.deleteCourse} courses={this.state.courses} />
                <CourseEditor />
            </div>
        );
    }
}

export default CourseManager;


