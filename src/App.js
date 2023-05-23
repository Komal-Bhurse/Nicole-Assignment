import './App.css';
import Home from './pages/Home';
import LastPage from './pages/LastPage';
import Profile from './pages/Profile';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (<>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/lastpage' element={<LastPage/>}/>
  </Routes>
    </>
  );
}

export default App;
