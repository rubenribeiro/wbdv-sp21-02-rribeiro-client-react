import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import EditableItem from "./editable-item";

const LessonTabs = (
    { lessons = [
        {_id: "123", title: "Lesson A"},
        {_id: "123", title: "Lesson B"},
        {_id: "123", title: "Lesson C"}
    ]
    }) =>
    <Fragment>
        {
            lessons.map(lesson =>
                <button key={lesson._id} type="button" className="btn btn-secondary active">
                    <EditableItem item={lesson} />
                </button>
            )
        }
        <button type="button" className="btn btn-light"><i className="fa fa-plus"></i></button>
    </Fragment>

const stateToPropsMapper = (state) => {
    return {
        lessons: state.lessonReducer.lessons
    }
};

const dispatchToPropsMapper = (dispatch) => {

};
export default connect(stateToPropsMapper, dispatchToPropsMapper)(LessonTabs);