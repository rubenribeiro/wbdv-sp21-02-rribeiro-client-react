import React from 'react';

const CourseEditor = ({history}) => {
    return (
        <React.Fragment>
        <div>
            <h4><i onClick={history.goBack} className="fas fa-arrow-left"></i>&nbsp;&nbsp;Editing Course</h4>
        </div>
        <nav className="navbar navbar-light bg-dark rounded-top">
            <span className="navbar-brand mb-0 h6 text-light">CS5610 - WebDev</span>
            <div className="nav navbar-nav navbar-right">
                <div className="btn-group" role="group" aria-label="Course Widgets">
                    <button type="button" className="btn btn-secondary active">Build</button>
                    <button type="button" className="btn btn-secondary">Pages</button>
                    <button type="button" className="btn btn-secondary">Theme</button>
                    <button type="button" className="btn btn-secondary">Store</button>
                    <button type="button" className="btn btn-secondary">Apps</button>
                    <button type="button" className="btn btn-secondary">Settings</button>
                    <button type="button" className="btn btn-light"><i className="fa fa-plus"></i></button>
            </div>
        </div>
       </nav>
            <div className="row">
                <div className="col-4 pr-0">
                    <div className="bg-dark">
                        <div className="btn-group-vertical d-flex ml-3 mr-3 pt-2" role="group"
                             aria-label="Module Items">
                            <button type="button"
                                    className="btn btn-outline-secondary active btn-block text-left text-light mb-2">
                                Module 1 - Jquery <i className="pull-right pt-1 fa fa-window-close"></i>
                            </button>
                            <button type="button"
                                    className="btn btn-outline-secondary btn-block text-left text-light mb-2">
                                Module 2 - React<i className="pull-right pt-1 fa fa-window-close"></i>
                            </button>
                            <button type="button"
                                    className="btn btn-outline-secondary  btn-block text-left text-light mb-2">
                                Module 3 - Redux <i className="pull-right pt-1 fa fa-window-close"></i>
                            </button>
                            <button type="button"
                                    className="btn btn-outline-secondary  btn-block text-left text-light  mb-2">
                                Module 4 - Native <i className="pull-right pt-1 fa fa-window-close"></i>
                            </button>
                            <button type="button"
                                    className="btn btn-outline-secondary  btn-block text-left text-light mb-2">
                                Module 5 - Angular <i className="pull-right pt-1 fa fa-window-close"></i>
                            </button>
                            <button type="button"
                                    className="btn btn-outline-secondary  btn-block text-left text-light mb-2">
                                Module 6 - Node <i className="pull-right pt-1 fa fa-window-close"></i>
                            </button>
                            <button type="button"
                                    className="btn btn-outline-secondary  btn-block text-left text-light mb-2">
                                Module 7 - Mongo <i className="pull-right pt-1 fa fa-window-close"></i>
                            </button>
                            <p className="text-left w-100">
                                <button type="button" className="btn btn-outline-secondary pull-right mb-2">
                                    <i className="pt-1 text-light fa fa-plus"></i>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-8 pl-0">
                    <div className="border border-secondary pt-2 pl-2 h-100 text-light">
                        <button type="button" className="btn btn-secondary btn-sm active">Topic 1</button>
                        <button type="button" className="btn btn-secondary btn-sm">Topic 2</button>
                        <button type="button" className="btn btn-secondary btn-sm">Topic 3</button>
                        <button type="button" className="btn btn-secondary btn-sm">Topic 4</button>
                        <button type="button" className="btn ml-2 btn-dark btn-sm">
                            <i className="pt-1 text-light fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
      </React.Fragment>
    );
};

export default CourseEditor;