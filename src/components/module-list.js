import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import EditableItem from "./editable-item";

const ModuleList = (
    {
        myModules = [] ,
        createModule = () => alert("Missing Create Module"),
        deleteModule = (item) => alert("Delete module list" + item._id),
        updateModule = (item) => alert("Missing update Module")
    }) =>
    <Fragment>
        { myModules.map(module =>
            <button key={ module._id } type="button" className="btn btn-outline-secondary active btn-block text-left text-light mb-2">
                <EditableItem
                    deleteItem={deleteModule}
                    updateItem={updateModule}
                    item={module} />
            </button>
         )
        }
        <p className="text-left w-100">
            <button type="button" className="btn btn-outline-secondary pull-right mb-2">
                <i onClick={createModule}  className="pt-1 text-light fa fa-plus"></i>
            </button>
        </p>
    </Fragment>

const stateToPropsMapper = (state) => {
    return {
        myModules: state.moduleReducer.modules,
    };
};

const dispatchToPropsMapper = (dispatch) => {
    return {
        createModule: () => dispatch({ type: "CREATE_MODULE" }),
        deleteModule: (item) => dispatch({
            type: "DELETE_MODULE",
            moduleToDelete: item
        }),
        updateModule: (module) => dispatch({
            type: "UPDATE_MODULE",
            module
        })
    }
};

export default connect(stateToPropsMapper, dispatchToPropsMapper)(ModuleList);