import React, {Fragment} from 'react';

const ListWidget = ({widget, editing}) => {
    return (
        <div>
            {editing &&
                <>
                    <input type="checkbox"/>Ordered
                    <br/>
                    Item list
                    <textarea value={widget.text} rows={10} className="form-control"></textarea>
                </>
            }
            {
                !editing &&
                    <> {
                         widget.ordered &&
                             <ol>
                                 {
                                     widget.text.split("\n").map((item) => {
                                         return (
                                             <li>{item}</li>
                                         )
                                     })
                                 }
                             </ol>

                       }
                        {
                            !widget.ordered &&
                            <ul>
                                {
                                    widget.text.split("\n").map((item) => {
                                        return (
                                            <li>{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        }

                    </>
            }
        </div>
    );
}

export default ListWidget;