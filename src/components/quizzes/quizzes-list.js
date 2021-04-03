import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

const QuizzesList = () => {
    const [quizzes, setQuizzes] = useState([]);
    const {courseId} = useParams();
    
    useEffect(() => {
        // TODO: move this to a service file
        fetch("http://localhost:4000/api/quizzes")
            .then(response => response.json())
            .then((quizzes) => {
               setQuizzes(quizzes);
            });
    }, []);
    
    return (
        <div>
            <h2>Quizzes ({quizzes.length})</h2>
            <ul>
                {
                    quizzes.map((quiz) => {
                        return (
                            <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                <li>{quiz.title}</li>
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default QuizzesList;