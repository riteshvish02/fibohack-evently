import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Eventdets from './Components/Eventdets';
const App = () => {
  return (
     
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path='/login'></Route>
        <Route path='/register'></Route>
        <Route path='/events'></Route>
        <Route path='/createevent'></Route>
        <Route path='/eventdetails' element={<Eventdets/>}></Route>
        <Route path='/userprofile'></Route>
      </Routes>
    
  );
};

export default App;
