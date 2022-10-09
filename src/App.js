
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Card from './component/card/Card';
import OrderPage from './component/OrderPage/OrderPage';
import Shop from './component/shop/shop';
import MainLayout from './mainLayout/mainLayout';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout></MainLayout>,
      children:[
        {
          path:'/shop',
          loader : ()=>fetch('products.json'), //we can load data like this with data
          element:<Card></Card>
        },
        {
          path:'/orderPage',
          element:<OrderPage></OrderPage>
        }
      ]
    },
   
  ])
 
  

  return (
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
