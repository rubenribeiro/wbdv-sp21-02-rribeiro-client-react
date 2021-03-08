import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const CourseCard = (
    {
        course,
        title,
        owner,
        lastModified,
        deleteCourse,
        updateCourse,
    }) => {

    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    const saveTitle = () => {
        setEditing(false);
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse);
    }

    const handleEditing = (event) => {
        setEditing(true);
        setNewTitle(title);
    };

    const handleNewTitleInput = (event) => {
        console.log(event);
        setNewTitle(event.target.value);
    };

  return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card mt-4">
              <img src="https://via.placeholder.com/286x180" className="card-img-top" alt="Card" />
              <div className="card-body">
                      {!editing &&
                          <Link
                              className="text-secondary"
                              to={{
                              pathname: `/courses/grid/edit/${course._id}`,
                                  state: {
                                      title: title
                                  }
                              }}
                          >
                              <h5 className="card-title">
                                 {title}
                              </h5>
                          </Link>
                      }

                      { editing &&
                          <input
                              type="text"
                              value={newTitle}
                              className="form-control"
                              onChange={handleNewTitleInput}
                          />
                      }

                  <p className="card-text">Some quick example text to build on the card title and make up the bulk
                      of the card's content.</p>
                  <div className="d-flex justify-content-between">
                      <Link
                          to={{
                              pathname: `/courses/grid/edit/${course._id}`,
                              state: {
                                  title: title
                              }
                          }}
                          className="btn btn-primary btn-dark">
                          {title}
                      </Link>
                      <div>
                          <i onClick={() => deleteCourse(course)} className="fas fa-trash pr-2"></i>
                          { !editing && <i onClick = {handleEditing} className="fas fa-edit"></i> }
                          { editing && <i onClick = {saveTitle} className="fas fa-check"></i> }
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default CourseCard;