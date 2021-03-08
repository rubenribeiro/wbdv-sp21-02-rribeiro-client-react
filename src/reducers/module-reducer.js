const initialState = {
    modules: [
        {_id: 123, title: "Module 123"},
        {_id: 234, title: "Module 234"},
        {_id: 345, title: "Module 345"},
    ]
};

const moduleReducer = (state = initialState, action) => {
    switch(action.type) {
        case "CREATE_MODULE":
            return {
                ...state,
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
        case "DELETE_MODULE":
            const newState1 = {
                modules: state.modules.filter(module => {
                    if(module._id === action.moduleToDelete._id) {
                        return false;
                    } else {
                        return true;
                    }
                })
            };
            return newState1;
        case "UPDATE_MODULE":
            return {
                modules: state.modules.map(m => {
                    if(m._id === action.module._id) {
                        return action.module;
                    } else {
                        return m;
                    }
                })
            }
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state.modules,
                modules: action.modules
            }
        default:
            return state;
    }
};

export default moduleReducer;