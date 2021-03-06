import React, {Fragment, useState} from 'react';

const EditableItem = (
    {
        deleteItem = (itemToDelete) => alert("Default Delete Item" + itemToDelete._id),
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
                    {item.title}
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
                    <i onClick={handleCheck} className="fas fa-check"></i>
                    <i onClick={ () => deleteItem(item)} className="fa fa-window-close"></i>
                </>
            }
        </Fragment>
    );
}

export default EditableItem;
