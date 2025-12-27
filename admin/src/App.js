import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.scss';
import LoginPage from './components/Login/Login';
import LayOut from './components/LayOut/LayOut';
import axios from 'axios';
import Error from './components/Error/Error';

axios.defaults.withCredentials = true;

function App() {
  const routes = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<LayOut />} errorElement={<Error/>}/>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/*' element={<Error/>}  />
    </>
  ))
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
