import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import EditableItem from "./editable-item";
//import { findModulesForCourse, createModule } from '../services/module-service';
import moduleService from '../services/module-service';

const ModuleList = (
    {
        myModules = [] ,
        createModule,
        deleteModule,
        updateModule,
        findModulesForCourse

    }) => {
    const { layout, courseId, moduleId} = useParams();
    useEffect( () => {
        findModulesForCourse(courseId);
    }, [courseId, findModulesForCourse]);
    return( <Fragment>
        {myModules.map(module =>
            <button key={module._id} type="button"
                    className={`btn btn-outline-secondary btn-block text-left text-light mb-2 editor d-flex justify-content-between ${module._id === moduleId ? 'active' : '' }`} disabled>
                <EditableItem
                    to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                    deleteItem={deleteModule}
                    updateItem={updateModule}
                    item={module}/>
            </button>
        )
        }
        <p className="text-left w-100">
            <button type="button" className="btn btn-outline-secondary pull-right mb-2">
                <i onClick={() => createModule(courseId)} className="pt-1 text-light fa fa-plus"></i>
            </button>
        </p>
    </Fragment>);
}
const stateToPropsMapper = (state) => {
    return {
        myModules: state.moduleReducer.modules,
    };
};

const dispatchToPropsMapper = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModule(courseId, {title:"New Title Test"})
                .then( module => dispatch({type: "CREATE_MODULE", module}));
        },
        deleteModule: (moduleToDelete) => {
            moduleService.deleteModule(moduleToDelete._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: moduleToDelete
                }));
        },
        updateModule: (module) => {
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    module
                }))
        },
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then( modules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules
                }));
        }
    }
};

export default connect(stateToPropsMapper, dispatchToPropsMapper)(ModuleList);