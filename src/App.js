import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PumpOperater from './pages/pumpoperater';
import Layout from './components/Layout';
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home';
import PumpOperator from './pages/pumpoperater';
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'',
          element:<Home/>
       },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'register',
          element:<Register/>
        }
      ]
    }
  ])
  return (
    <section>
      {/* <RouterProvider router={router}/> */}
      <PumpOperater/>
    </section>
  );
}

export default App;