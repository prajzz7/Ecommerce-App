import './App.scss'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Categories from './pages/categories/Categories';
import Product from './pages/product/Product';

function App() {

  const Layout = () => {
    return(
      <div className='app'>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home/>
        },
        {
          path: 'products/:id',
          element: <Categories/>
        },
        {
          path: 'product/:id',
          element: <Product/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
