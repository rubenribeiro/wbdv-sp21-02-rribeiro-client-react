import CourseManager from './components/course-manager';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div className="container-fluid">
          <h1>Hello Test</h1>
            <CourseManager />

        </div>
    </BrowserRouter>
  );
}

export default App;
