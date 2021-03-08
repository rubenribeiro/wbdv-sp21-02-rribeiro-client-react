import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';

const EditableItem = (
    {
        to = "",
        deleteItem,
        updateItem,
        item = {title: "Default Title", _id: "ABC"}

    }) =>  {
    const [editing, setEditing] = useState(false);
    const [cachedItem, setCachedItem] = useState(item)

    const handleEditing = () => {
        setEditing(true);
    };

    const handleCheck = () => {
        setEditing(false);
        updateItem(cachedItem);
    };

    const handleItemTitleChange = (event) => {
        setCachedItem({
            ...cachedItem,
            title: event.target.value
        })
    };

    return (
        <Fragment>
            { !editing &&
                <>
                    <Link to={to}>
                        {item.title}
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <i onClick={handleEditing} className="fa fa-edit"></i>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={handleItemTitleChange}
                        value={cachedItem.title}
                    />
                    <span>
                        <i onClick={handleCheck} className="fas fa-check"></i>
                        &nbsp;
                        <i onClick={ () => deleteItem(item)} className="fa fa-window-close"></i>
                    </span>
                </>
            }
        </Fragment>
    );
}

export default EditableItem;
