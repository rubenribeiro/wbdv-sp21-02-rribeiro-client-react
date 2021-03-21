import React, {Fragment, useState} from 'react';

const ParagraphWidget = ({widget, editing, setEditingWidget}) => {
    const [paragraphWidget, setParagraphWidget] = useState(widget);

    const handleParagraphUpdate = (e) => {
        const newWidget = {...paragraphWidget};
        newWidget["text"] = e.target.value;
        setParagraphWidget(newWidget);
        setEditingWidget(paragraphWidget);
    };

    return(
        <Fragment>
            {
                editing &&
                <>
                     <textarea
                         onChange={(e) => handleParagraphUpdate(e) }
                         value={paragraphWidget.text}
                         className="form-control mt-2">
                     </textarea>
                </>
            }
            {
                !editing &&
                <p>
                    {paragraphWidget.text}
                </p>
            }

        </Fragment>
    );
};

export default ParagraphWidget;