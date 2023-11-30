import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import Groups from './Pages/Groups';
import AddStudent from './Pages/AddStudent';
import Sidebar from './Components/Sidebar';
import StudentDetails from './Components/StudentDetails'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Sidebar component="Home"> <Home/></Sidebar>}/>
        <Route path='/groups' element={<Sidebar component="Groups"> <Groups/> </Sidebar>}/>
        <Route path='/addstudent' element={<Sidebar component="Add Student"> <AddStudent /> </Sidebar>}/>
        <Route path='/student-detais/:id' element={<Sidebar component="View Student"> <StudentDetails/> </Sidebar>}/>
      </Routes>
    </div>
  );
}

export default App;
