import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Order } from './pages/order/Order'
import { NoPage } from './pages/nopage/NoPage'
import MyState from './context/data/MyState'
import { AllProduct } from './pages/allProduct/AllProduct'
import { Login } from './pages/registration/Login'
import { Signup } from './pages/registration/Signup'
import ProductInfo from './pages/productinfo/ProductInfo'
import Cart from "./pages/cart/Cart"
import Dashboard from './pages/admin/dashBoard/Dashboard'
import  AddProduct  from './pages/admin/pages/AddProduct'
import  UpdateProduct  from './pages/admin/pages/UpdateProduct'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <MyState>
      <Router>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/order' element={<Order/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/addproduct' element={<AddProduct/>} />
          <Route path='/updateproduct' element={<UpdateProduct/>} />
          <Route path='/productinfo/:id' element={<ProductInfo/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/allproducts' element={<AllProduct/>} />
          <Route path='/*' element={<NoPage/>} />
        </Routes>
        <ToastContainer />
      </Router> 
    </MyState>
  )
}

export default App
