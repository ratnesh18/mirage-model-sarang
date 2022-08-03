import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App'
import ImageEditor from './components/ImageEditor';
import Registration from './components/Registration';


function Main() {
  return (
    <div > 
      
     <Router> 
        <Routes>
        <Route path='/' element={<ImageEditor/>}/>
         
        </Routes>
      </Router>
      
     
    </div>
  );
}
export default Main;