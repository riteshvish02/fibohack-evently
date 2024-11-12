import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Eventdets from './Components/Eventdets';
import Userdeshboard from "./Components/Userdashboard"
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import CreateEvent from './Components/CreateEvent';
import FindEvent from './Components/FindEvent';
const App = () => {
  return (
     
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/createaccount' element={<CreateAccount/>}></Route>
        <Route path='/events' element={<FindEvent/>}></Route>
        <Route path='/createevent' element={<CreateEvent/>}></Route>
        <Route path='/eventdetails' element={<Eventdets/>}></Route>
        <Route path='/userprofile' element={<Userdeshboard/>}></Route>
      </Routes>
    
  );
};

export default App;
