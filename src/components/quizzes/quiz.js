import React, {useState, useEffect} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import Question from "./questions/question";
import questionService from "../../services/question-service";
import quizService from "../../services/quizzes-service";

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    let history  = useHistory();

    const handleSubmit = () => {
        let attempts = questions.map(question => {
            delete question._id;
            return question;
        });
        quizService.submitQuiz(quizId, attempts).then((attempt) => {
            history.push(`/courses/${courseId}/quizzes/${quizId}/attempts`);
        });
    }

    useEffect(() => {

        questionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions);
            });

    }, [quizId]);
    return (
        <div>
            <h3>Quiz {quizId} - (Total Questions: {questions.length})</h3>
            <Link to={`/courses/${courseId}/quizzes/${quizId}/attempts`}>
                See Previous Attempts
            </Link>
            <ul className="list-group">
                {
                    questions.map((question) => {
                        return(
                            <li key={question._id} className="list-group-item">
                                <Question question={question} questions = {questions} setQuestions={setQuestions} />
                            </li>
                        )
                    })
                }
            </ul>
            <br />
            <br />
               <button
                   type="button"
                   className="btn btn-primary btn-lg btn-block"
                   onClick={handleSubmit}
               >
                   Submit
               </button>
            <br />
        </div>
    )
}

export default Quiz;