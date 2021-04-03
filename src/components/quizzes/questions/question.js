import React from 'react';
import MultipleChoiceQuestion from "./multiple-choice-question";
import TrueFalseQuestion from "./true-false-question";

const Question = ({question}) => {
    return(
        <div>
            {
                question.type === "TRUE_FALSE" &&
                    <TrueFalseQuestion question={question}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                   <MultipleChoiceQuestion question={question}/>
            }
        </div>
    );

};

export default Question;