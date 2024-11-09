import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
 
const App = () => {
  return (
     
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path='/login'></Route>
        <Route path='/register'></Route>
        <Route path='/events'></Route>
        <Route path='/createevent'></Route>
        <Route path='/eventdetails'></Route>
        <Route path='/userprofile'></Route>
      </Routes>
    
  );
};

export default App;
