import React, {Fragment, useState} from 'react';

const HeadingWidget = ({widget, editing, setEditingWidget}) => {
    const [headerWidget, setHeaderWidget] = useState(widget);

    const handleInputUpdate= (e) => {
        const newWidget = {...headerWidget};
        newWidget["text"] = e.target.value;
        setHeaderWidget(newWidget);
        setEditingWidget(headerWidget);

    };

    const handleSelectUpdate= (e) => {
        const newWidget = {...headerWidget};
        newWidget["size"] = parseInt(e.target.value);
        setHeaderWidget(newWidget);
        setEditingWidget(headerWidget);
    };

    return(
        <Fragment>
            {
                editing &&
                    <>
                        <input onChange={(e) => handleInputUpdate(e)} value={headerWidget.text} className="form-control" />
                        <select onChange={(e) => handleSelectUpdate(e) } value={headerWidget.size} className="form-control">
                            <option value={1}>Heading 1</option>
                            <option value={2}>Heading 2</option>
                            <option value={3}>Heading 3</option>
                            <option value={4}>Heading 4</option>
                            <option value={5}>Heading 5</option>
                            <option value={6}>Heading 6</option>
                        </select>
                    </>
            }
            {
                !editing &&
                    <>
                        {headerWidget.size === 1 && <h1>{headerWidget.text}</h1>}
                        {headerWidget.size === 2 && <h2>{headerWidget.text}</h2>}
                        {headerWidget.size === 3 && <h3>{headerWidget.text}</h3>}
                        {headerWidget.size === 4 && <h4>{headerWidget.text}</h4>}
                        {headerWidget.size === 5 && <h5>{headerWidget.text}</h5>}
                        {headerWidget.size === 6 && <h6>{headerWidget.text}</h6>}
                    </>
            }

        </Fragment>
    );
};

export default HeadingWidget;