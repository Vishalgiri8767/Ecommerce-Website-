import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Cart } from './pages/cart/Cart'
import { Order } from './pages/order/Order'
import { NoPage } from './pages/nopage/NoPage'
import MyState from './context/data/MyState'
import { AllProduct } from './pages/allProduct/AllProduct'
import { DashBoard } from './pages/dashBoard/DashBoard'
import { Login } from './pages/registration/Login'
import { Signup } from './pages/registration/Signup'
import ProductInfo from './pages/productinfo/ProductInfo'



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
          <Route path='/productinfo' element={<ProductInfo/>} />
          <Route path='/dashboard' element={<DashBoard/>} />
          <Route path='/allproducts' element={<AllProduct/>} />

          <Route path='/*' element={<NoPage/>} />
        </Routes>
      </Router> 
    </MyState>
  )
}

export default App
