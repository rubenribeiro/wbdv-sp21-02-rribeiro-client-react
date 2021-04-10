import React, { useState, useEffect, Fragment } from  'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import moduleReducer from "../reducers/module-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import topicReducer from "../reducers/topic-reducer";
import widgetReducer from "../reducers/widget-reducer";
import quizReducer from "../reducers/quiz-reducer";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import WidgetList from "./course-editor/widgets/widget-list";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer,
    quizReducer: quizReducer
});
//const store = createStore(moduleReducer);
//const store = createStore(lessonReducer);
const store = createStore(reducer);

const CourseEditor = ({history, location}) => {
    const { layout} = useParams();
    const [cachedTitle, setCachedTitle] = useState("Course");


    useEffect(() => {
        if(location.state !== "undefined" && typeof location.state !== "undefined" ) {
            setCachedTitle(location.state.title);
        }

    }, [location]);

    return (
        <Provider store={store}>
        <Fragment>
            <div className="d-flex justify-content-between">
                <Link className="text-secondary d-flex justify-content-between" to={`/courses/${layout}`}>
                    <h4><i className="fas fa-window-close pt-4"></i><span className="pl-2">Editing Course</span></h4>
                </Link>
            </div>
            <nav className="navbar navbar-light bg-dark rounded-top">
                <span className="navbar-brand mb-0 h6 text-light">{cachedTitle}</span>
                <div className="nav navbar-nav navbar-right">
                    <div className="btn-group rr-course-editor" role="group" aria-label="Course Widgets">
                        <LessonTabs />
                    </div>
                </div>
            </nav>
            <div className="row">
                <div className="col-4 pr-0">
                    <div className="bg-dark">
                        <div className="btn-group-vertical d-flex ml-3 mr-3 pt-2 rr-course-editor" role="group"
                             aria-label="Module Items">
                            <ModuleList />
                        </div>
                    </div>
                </div>
                <div className="col-8 pl-0">
                    <div className="border border-secondary pt-2 pl-2 h-100 text-light rr-course-editor">

                        <WidgetList />
                    </div>
                </div>
            </div>
        </Fragment>
    </Provider>);
};
export default CourseEditor;