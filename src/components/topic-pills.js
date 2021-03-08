import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import EditableItem from "./editable-item";
import topicService from '../services/topic-service';

const TopicPills = ({
       topics = [],
       findTopicsForLesson,
       createTopic,
       updateTopic,
       deleteTopic
   }) => {

    const { lessonId } = useParams();

    useEffect(() => {
        if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId);
        }

    }, [lessonId, findTopicsForLesson]);

    return (<Fragment>
        {
            topics.map(topic =>
                    <button key={topic._id} type="button" className="btn btn-secondary btn-sm editor mr-2" disabled>
                        <EditableItem
                            to="#"
                            updateItem={updateTopic}
                            deleteItem={deleteTopic}
                            item={topic}
                        />
                    </button>
            )
        }
        <button onClick={() => createTopic(lessonId)} type="button" className="btn btn-dark btn-sm">
            <i className="pt-1 text-light fa fa-plus"></i>
        </button>
    </Fragment>);
};

const stateToPropsMapper = (state) => {
    return {
        topics: state.topicReducer.topics
    }
};

const dispatchToPropsMapper = (dispatch) => {
    return {
        findTopicsForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId)
                .then(topics => dispatch({
                    type: "FIND_TOPICS",
                    topics
                }));
        },
        createTopic: (lessonId) => {
            topicService.createTopic(lessonId,  {title: "New Topic"})
                .then(topic => dispatch({
                    type: "CREATE_TOPIC",
                    topic
                }));
        },
        updateTopic: (topic) => {
            topicService.updateTopic(topic._id, topic)
                .then(status => dispatch({
                    type: "UPDATE_TOPIC",
                    topic
                }));
        },
        deleteTopic: (topicToDelete) => {
            topicService.deleteTopic(topicToDelete._id)
                .then(status => dispatch({
                    type: "DELETE_TOPIC",
                    topicToDelete
                }));
        }
    }
};

export default connect(stateToPropsMapper, dispatchToPropsMapper)(TopicPills);