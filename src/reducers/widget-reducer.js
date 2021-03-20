const initialState = {
    widgets : []
};

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "FIND_WIDGETS":
            return {
                ...state,
                widgets: action.widgets
            }
        case "UPDATE_WIDGET":
            return {
                widgets: state.widgets.map(w => {
                    if(w.id === action.widget.id) {
                        return action.widget;
                    } else {
                        return w;
                    }
                })
            }
        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => {
                    if (widget.id === action.widgetToDelete.id) {
                        return false;
                    } else {
                        return true;
                    }
                })
            };
        default:
            return state;
    }
}

export default widgetReducer;