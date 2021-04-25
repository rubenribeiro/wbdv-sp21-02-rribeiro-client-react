import React from 'react';
import MultipleChoiceQuestion from "./multiple-choice-question";
import TrueFalseQuestion from "./true-false-question";

const Question = ({question, questions, setQuestions}) => {
    return(
        <div>
            {
                question.type === "TRUE_FALSE" &&
                    <TrueFalseQuestion question={question} questions={questions} setQuestions={setQuestions} />
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                   <MultipleChoiceQuestion question={question} questions={questions} setQuestions={setQuestions} />
            }
        </div>
    );

};

export default Question;