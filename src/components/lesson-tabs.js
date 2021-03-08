import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import EditableItem from "./editable-item";
import lessonService from "../services/lesson-service";

const LessonTabs = (
    { lessons = [
        {_id: "123", title: "Lesson A"},
        {_id: "123", title: "Lesson B"},
        {_id: "123", title: "Lesson C"}
    ],
      findLessonsForModule,
      createLessonForModule,
      updateLesson,
      deleteLesson
    }) => {
    const { layout, courseId, moduleId, lessonId} = useParams();

    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId);
        }

    }, [moduleId, findLessonsForModule]);

    return (<Fragment>
        {
            lessons.map(lesson =>
                <button
                    key={lesson._id}
                    type="button"
                    className={`btn btn-outline-secondary text-left text-light editor ${lesson._id === lessonId ? 'active' : '' }`}
                    disabled>
                    <EditableItem
                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                        updateItem={updateLesson}
                        deleteItem={deleteLesson}
                        item={lesson}/>
                </button>
            )
        }
        <button onClick={() => createLessonForModule(moduleId)} type="button" className="btn btn-light"><i className="fa fa-plus"></i></button>
    </Fragment>);
}

const stateToPropsMapper = (state) => {
    return {
        lessons: state.lessonReducer.lessons
    }
};

const dispatchToPropsMapper = (dispatch) => {
    return {
        findLessonsForModule: (moduleId) => {
           lessonService.findLessonsForModule(moduleId)
               .then(lessons => dispatch({
                   type: "FIND_LESSONS",
                   lessons
               }));
        },
        createLessonForModule: (moduleId) => {
            lessonService.createLessonForModule(moduleId,  {title: "New Lesson"})
                .then(lesson => dispatch({
                    type: "CREATE_LESSON",
                    lesson
            }));
        },
        updateLesson: (lesson) => {
            lessonService.updateLesson(lesson._id, lesson)
                .then(status => dispatch({
                    type: "UPDATE_LESSON",
                    lesson
                }));
        },
        deleteLesson: (lessonToDelete) => {
            lessonService.deleteLesson(lessonToDelete._id)
                .then(status => dispatch({
                    type: "DELETE_LESSON",
                    lessonToDelete
                }));
        },
    }
};


export default connect(stateToPropsMapper, dispatchToPropsMapper)(LessonTabs);