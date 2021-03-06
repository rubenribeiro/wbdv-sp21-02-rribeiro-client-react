import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";
import { useParams } from 'react-router-dom';
import widgetService from "../../../services/widget-service";

import TopicPills from "../../topic-pills";

const WidgetList = ({
    widgets = [],
    findWidgetsForTopic,
    updateWidget,
    createWidgetForTopic,
    deleteWidget
  }) => {

    // current widget being edited
    const [editingWidget, setEditingWidget] = useState({});
    const { topicId } = useParams();

    const handleUpdateWidget = ()  => {
        updateWidget(editingWidget.id, editingWidget);
        setEditingWidget({});
    };

    const updateWidgetType = (e) => {
        const newWidget = {...editingWidget};
        newWidget["type"] = e.target.value;
        updateWidget(newWidget.id, newWidget);
        setEditingWidget(newWidget);
    };

    useEffect(() => {
        if (topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId);
        }

    }, [topicId,findWidgetsForTopic, editingWidget, setEditingWidget, updateWidget]);

    return(
        <div className="text-dark">

            <TopicPills />
            <div className="mr-2 mt-3 clearfix">
                <button onClick={() => createWidgetForTopic(topicId)} type="button" className="btn btn-dark btn-sm float-right">
                    &nbsp;Add Widget&nbsp;&nbsp;<i className="fas button fa-plus"></i>
                </button>
            </div>

            <ul className="list-group my-3">
                {widgets.map(widget =>
                    <li className="list-group-item d-flex justify-content-between align-items-center mr-2" key={widget.id}>

                        <div className="flex-grow-1 mr-4 my-2">

                            {
                                editingWidget.id === widget.id &&
                                <select onChange={updateWidgetType} value={editingWidget.type} className="form-control">
                                    <option value="HEADING">Heading</option>
                                    <option value="PARAGRAPH">Paragraph</option>
                                </select>
                            }

                            {
                                widget.type === "HEADING" &&
                                    <HeadingWidget
                                        editing={editingWidget.id === widget.id}
                                        widget={editingWidget.id === widget.id? editingWidget : widget}
                                        setEditingWidget={setEditingWidget}
                                    />
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={editingWidget.id === widget.id? editingWidget : widget}
                                    setEditingWidget={setEditingWidget}
                                />
                            }
                            {
                                widget.type === "LIST" &&
                                <ListWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={editingWidget.id === widget.id? editingWidget : widget}
                                    setEditingWidget={setEditingWidget}
                                />
                            }
                            {
                                widget.type === "IMAGE" &&
                                <ImageWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={editingWidget.id === widget.id? editingWidget : widget}
                                    setEditingWidget={setEditingWidget}
                                />
                            }

                        </div>
                        {
                            editingWidget.id === widget.id &&
                            <div>
                                <i onClick={handleUpdateWidget} className="fas fa fa-check"></i>
                                <i onClick={() => deleteWidget(widget)} className="fas fa fa-trash pl-2"></i>
                            </div>

                        }

                        {
                            editingWidget.id !== widget.id &&
                            <div>
                                <i onClick={() => setEditingWidget(widget)} className="fas fa fa-cog float-right"></i>
                            </div>
                        }
                    </li>
                )}
            </ul>
        </div>
    );
}


const stateToPropsMapper = (state) => {
    return {
        widgets: state.widgetReducer.widgets
    }
};

const dispatchToPropsMapper = (dispatch) => {
    return {
        findWidgetsForTopic: (topicId) => {
            widgetService.findWidgetsForTopic(topicId)
                .then(widgets => dispatch({
                    type: "FIND_ALL_WIDGETS_FOR_TOPICS",
                    widgets
                }));
        },
        updateWidget: (wid, widget) => {
            widgetService.updateWidget(wid, widget)
                .then(status => {
                    dispatch({
                    type: "UPDATE_WIDGET",
                    widget});
                });

        },
        createWidgetForTopic: (topicId) => {
            widgetService.createWidget(topicId,  {type: "HEADING", size: 1, text: "New Widget"})
                .then(widget => dispatch({
                    type: "CREATE_WIDGET",
                    widget
                }));
        },
        deleteWidget: (widgetToDelete) => {
            widgetService.deleteWidget(widgetToDelete.id)
                .then(status => dispatch({
                    type: "DELETE_WIDGET",
                    widgetToDelete
                }));
        }
    }
};

export default connect(stateToPropsMapper, dispatchToPropsMapper)(WidgetList);