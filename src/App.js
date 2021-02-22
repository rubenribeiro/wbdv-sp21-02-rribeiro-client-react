import React from 'react';
import CourseManager from './components/course-manager';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <React.Fragment>
            <CourseManager />
        </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
