import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import store from "./store/store.jsx"
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
    <ToastContainer/>
    <Provider store={store}>
      <App />
    </Provider>,
  </BrowserRouter>
  
)
