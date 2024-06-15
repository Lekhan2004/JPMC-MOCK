import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PumpOperater from './pages/PumpOperater';
import Layout from './components/Layout';
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>
    },
    {
      path:'login',
      element:<Login/>
    },
    {
      path:'register',
      element:<Register/>
    }
  ])
  return (
    <section>
      <RouterProvider router={router}/>
    </section>
  );
}

export default App;
