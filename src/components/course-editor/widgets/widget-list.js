import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import { useParams } from 'react-router-dom';
import widgetService from "../../../services/widget-service";


// TODO Delete this
import TopicPills from "../topic-pills";

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

    useEffect(() => {
        if (topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId);
        }

    }, [topicId, findWidgetsForTopic, editingWidget, setEditingWidget]);

    const handleUpdateWidget = (wid, editingWidget)  => {
        updateWidget(wid, editingWidget);
        setEditingWidget({});
    };

    return(
        <div className="text-dark">
            <i onClick={() => createWidgetForTopic(topicId)} className="fas fa-plus fa-2x float-right"></i>
            <TopicPills />
            <h2>Widget List ({widgets.length}) {editingWidget.id}</h2>
            <ul className="list-group">
                {widgets.map(widget =>
                    <li className="list-group-item" key={widget.id}>
                        {
                            editingWidget.id === widget.id &&
                                <>
                                    <i onClick={() => handleUpdateWidget(widget.id, editingWidget)} className="fas fa fa-2x fa-check float-right"></i>
                                    <i onClick={() => deleteWidget(widget.id)} className="fas fa fa-2x fa-trash float-right"></i>
                                </>

                        }
                        {
                            editingWidget.id !== widget.id &&
                            <i onClick={() => setEditingWidget(widget)} className="fas fa fa-2x fa-cog float-right"></i>
                        }
                        {
                            widget.type === "HEADING" &&
                                <HeadingWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={editingWidget.id === widget.id? setEditingWidget : widget}
                                    setEditingWidget={setEditingWidget}
                                />
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                editing={editingWidget.id === widget.id}
                                widget={editingWidget.id === widget.id? setEditingWidget : widget}
                                setEditingWidget={setEditingWidget}
                            />
                        }
                    </li>
                )}
            </ul>
            {JSON.stringify(widgets)}
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
                    type: "FIND_WIDGETS",
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
                    type: "DELETE_TOPIC",
                    widgetToDelete
                }));
        }
    }
};

export default connect(stateToPropsMapper, dispatchToPropsMapper)(WidgetList);