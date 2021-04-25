import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import questionService from "../../../services/quizzes-service";

const QuizAttempts = () => {
    const {quizId} = useParams();
    const [attempts, setAttempts] = useState([]);
    const [lastScore, setLastScore] = useState("--");

    useEffect(() => {

        questionService.findAttemptsForQuiz(quizId)
            .then((attmp) => {
                setAttempts(attmp);
                if (attmp[0].score !== undefined) {
                    setLastScore(attmp[0].score.toFixed(0));
                }
            });

    }, [quizId]);
    return (
        <div>
            <h3>Quiz  {quizId} </h3>
            <br />
            <h5>Last Score: {lastScore}</h5>
            <br />
            <h5>Previous Attempts</h5>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Attempt #</th>
                    <th scope="col">Score</th>
                </tr>
                </thead>
                <tbody>
                {
                    attempts && attempts.map((a, index) => {

                        return (
                               <tr key={a._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{a.score.toFixed(0)}</td>
                               </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default QuizAttempts;