// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import Events from './pages/Events';
import Finance from './pages/Finance';
import Food from './pages/Food';
import User from './pages/User';
import Chat from './pages/Chat';
import LatestActivity from './pages/LatestActivity';
import NewTeacher from './pages/Addnewteacher';
import StudentForm from './pages/Addnewstudents';
import TeacherDetails from './pages/Teacherdetails';
import StudentDetails from './pages/Studentdetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Nested routes show inside Layout with sidebar */}
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="events" element={<Events />} />
          <Route path="finance" element={<Finance />} />
          <Route path="food" element={<Food />} />
          <Route path="user" element={<User />} />
          <Route path="chat" element={<Chat />} />
          <Route path="latest-activity" element={<LatestActivity />} />
          <Route path="add-new-teacher" element={<NewTeacher />} />
          <Route path="add-new-student" element={<StudentForm />} />
          <Route path="teacher-details" element={<TeacherDetails />} />
          <Route path="student-details" element={<StudentDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
