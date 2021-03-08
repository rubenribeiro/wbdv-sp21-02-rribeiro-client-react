import React, { Fragment } from  'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import { useParams } from 'react-router-dom';
import moduleReducer from "../reducers/module-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer
});
//const store = createStore(moduleReducer);
//const store = createStore(lessonReducer);
const store = createStore(reducer);

const CourseEditor = ({history}) => {
    const { layout, courseId, moduleId } = useParams();

    return (
        <Provider store={store}>
        <Fragment>
            <div className="d-flex justify-content-between">
                <h4><i onClick={history.goBack} className="fas fa-arrow-left"></i>&nbsp;&nbsp;Editing Course {layout} {courseId}</h4>
                <i onClick={history.goBack} className="fas fa-window-close pt-2 pr-4"></i>
            </div>
            <nav className="navbar navbar-light bg-dark rounded-top">
                <span className="navbar-brand mb-0 h6 text-light">CS5610 - WebDev</span>
                <div className="nav navbar-nav navbar-right">
                    <div className="btn-group" role="group" aria-label="Course Widgets">
                        <LessonTabs />
                    </div>
                </div>
            </nav>
            <div className="row">
                <div className="col-4 pr-0">
                    <div className="bg-dark">
                        <div className="btn-group-vertical d-flex ml-3 mr-3 pt-2" role="group"
                             aria-label="Module Items">
                            <ModuleList />
                        </div>
                    </div>
                </div>
                <div className="col-8 pl-0">
                    <div className="border border-secondary pt-2 pl-2 h-100 text-light">
                        <button type="button" className="btn btn-secondary btn-sm active">Topic 1</button>
                        <button type="button" className="btn btn-secondary btn-sm">Topic 2</button>
                        <button type="button" className="btn btn-secondary btn-sm">Topic 3</button>
                        <button type="button" className="btn btn-secondary btn-sm">Topic 4</button>
                        <button type="button" className="btn ml-2 btn-dark btn-sm">
                            <i className="pt-1 text-light fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    </Provider>);
};
export default CourseEditor;