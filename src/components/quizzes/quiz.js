import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Question from "./questions/question";

const Quiz = () => {
    const {quizId} = useParams();
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        // TODO: Move this to a service file
        fetch(`http://localhost:4000/api/quizzes/${quizId}/questions`)
            .then(response => response.json())
            .then((questions) => {
                setQuestions(questions)
            });
    }, []);
    return (
        <div>
            <h3>Quiz {quizId} ({questions.length})</h3>
            <ul className="list-group">
                {
                    questions.map((question) => {
                        return(
                            <li key={question._id} className="list-group-item">
                                <Question question={question} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Quiz;