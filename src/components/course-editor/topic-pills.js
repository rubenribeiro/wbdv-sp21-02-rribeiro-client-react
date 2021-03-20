import React from 'react';
import { Link, useParams} from 'react-router-dom';

const TopicPills = () => {
    const { layout, courseId, moduleId, lessonId, topicId} = useParams();
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/ABC123`} className="nav-link">
                      Topic 1
                </Link>
                <Link to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/ABC234`} className="nav-link">
                    Topic 1
                </Link>
            </li>

        </ul>
    );
}

export default TopicPills;