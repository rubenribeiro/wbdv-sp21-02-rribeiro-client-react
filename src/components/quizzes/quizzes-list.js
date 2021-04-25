import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import quizService from "../../services/quizzes-service";

const QuizzesList = () => {
    const [quizzes, setQuizzes] = useState([]);
    const {courseId} = useParams();
    
    useEffect(() => {
        quizService.findAllQuizzes()
            .then((quizzes) => {
                setQuizzes(quizzes);
            });
    }, []);
    
    return (
        <div>
            <h2>Quizzes ({quizzes.length})</h2>
            <ul className="list-group">
                {
                    quizzes.map((quiz) => {
                        return (
                            <li key={quiz._id} className="list-group-item d-flex justify-content-between">
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    {quiz.title}
                                </Link>
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                   <button type="button" className="btn btn-primary">Start</button>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default QuizzesList;

