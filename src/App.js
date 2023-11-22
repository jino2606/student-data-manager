import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import Groups from './Pages/Groups';
import AddStudent from './Pages/AddStudent';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Sidebar> <Home/></Sidebar>}/>
        <Route path='/groups' element={<Sidebar> <Groups/> </Sidebar>}/>
        <Route path='/addstudent' element={<Sidebar> <AddStudent/> </Sidebar>}/>
      </Routes>
    </div>
  );
}

export default App;
