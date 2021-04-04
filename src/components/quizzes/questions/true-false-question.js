import React, {useState, useEffect} from 'react';

const TrueFalseQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState();
    const [graded, setGraded] = useState(false);
    console.log(JSON.stringify(question));

    const handleGrade = () => {
        setGraded(true);
    };

    return(
        <div>
            <h5>{question.question}
                {graded && question.correct === yourAnswer &&
                    <i className="fas fa-check ml-2 text-success"></i>
                }
                {graded && question.correct !== yourAnswer &&
                    <i className="fas fa-times ml-2 text-danger"></i>
                }
            </h5>

            <ul className="list-group">
                <li className={`d-flex justify-content-between list-group-item 
                                    ${graded && yourAnswer === 'true' && question.correct === 'true'? 'list-group-item-success': ''} 
                                    ${graded && yourAnswer === 'false' && question.correct === 'true'? 'list-group-item-success' : ''}
                                    ${graded && yourAnswer === 'true' && question.correct === 'false'? 'list-group-item-danger' : ''} `}>
                    <label>
                        <input
                            onClick={() => {
                                setYourAnswer("true");
                                setGraded(false);
                            }}
                            className="mr-1"
                            type="radio"
                            name={question._id} />True
                    </label>
                    {graded && yourAnswer ==='true' && question.correct === 'true' &&
                         <i className="fas fa-check ml-2 text-success"></i>
                    }
                    {graded && yourAnswer === 'false' && question.correct === 'true' &&
                        <i className="fas fa-check ml-2 text-success"></i>
                    }
                    {graded && yourAnswer === 'true' && question.correct === 'false' &&
                        <i className="fas fa-times ml-2 text-danger"></i>
                    }
                </li>
                <li className={`d-flex justify-content-between list-group-item 
                                    ${graded && yourAnswer === 'false' && question.correct === 'false'? 'list-group-item-success': ''} 
                                    ${graded && yourAnswer === 'false' && question.correct === 'true'? 'list-group-item-danger' : ''} 
                                    ${graded && yourAnswer === 'true' && question.correct === 'false'? 'list-group-item-success' : ''} `}>
                    <label>
                        <input
                            onClick={() => {
                                setYourAnswer("false");
                                setGraded(false);
                            }}
                            className="mr-1"
                            type="radio"
                            name={question._id} />False
                    </label>
                    {graded && yourAnswer === 'false' && question.correct === 'false' &&
                        <i className="fas fa-check ml-2 text-success"></i>
                    }
                    {graded && yourAnswer === 'false' && question.correct === 'true' &&
                        <i className="fas fa-times ml-2 text-danger"></i>
                    }
                    {graded && yourAnswer === 'true' && question.correct === 'false' &&
                       <i className="fas fa-times ml-2 text-success"></i>
                    }
                </li>
            </ul>
            <p>Your answer: {yourAnswer}</p>
            <button onClick={handleGrade} type="button" className="btn btn-success">Grade</button>

        </div>
    );
};

export default TrueFalseQuestion;