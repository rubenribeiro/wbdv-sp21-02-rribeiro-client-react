import React, {useState, useEffect} from 'react';

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState('');
    const [graded, setGraded] = useState(false);

    const handleGrade = () => {
        setGraded(true);
    };
    return(
        <div>
            <h5>
                {question.question}
                {graded && question.correct === yourAnswer &&
                    <i className="fas fa-check ml-2 text-success"></i>
                }
                {graded && question.correct !== yourAnswer &&
                    <i className="fas fa-times ml-2 text-danger"></i>
                }
            </h5>

            <ul className="list-group">
                    {
                        question.choices.map((choice, index) => {
                            return(
                                <li key={index} className={`d-flex justify-content-between list-group-item
                                  ${graded === true && choice === question.correct? 'list-group-item-success' : '' }
                                  ${graded === true && choice !== question.correct && yourAnswer === choice ? 'list-group-item-danger' : ''}`} >
                                    <label><input
                                        onClick={() => {
                                            setYourAnswer(choice);
                                            setGraded(false);
                                        }}
                                        type="radio"
                                        className="mr-1"
                                        name={question._id}/>{choice}
                                    </label>
                                    {graded && question.correct === choice &&
                                        <i className="fas fa-check ml-2 text-success"></i>
                                    }
                                    {graded && question.correct !== choice && yourAnswer === choice &&
                                        <i className="fas fa-times ml-2 text-danger"></i>
                                    }
                                </li>
                            )
                        })
                    }
            </ul>
            <p>Your answer: {yourAnswer}</p>
            <button onClick={handleGrade} type="button" className="btn btn-success">Grade</button>
        </div>

    );
};

export default MultipleChoiceQuestion;