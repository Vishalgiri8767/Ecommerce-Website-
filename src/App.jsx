import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { NoPage } from './pages/nopage/NoPage'
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
import MyState from './context/data/myState'
import Order from './pages/order/Order'

function App() {

  return (
    <MyState>
      <Router>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/order' element={
            <ProtectedRoute>
              <Order/>
            </ProtectedRoute>
          } />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/addproduct' element={
            <ProtectedRouteForAdmin>
              <AddProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path='/updateproduct' element={
            <ProtectedRouteForAdmin>
              <UpdateProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path='/productinfo/:id' element={<ProductInfo/>} />
          <Route path='/dashboard' element={
            <ProtectedRouteForAdmin>
              <Dashboard/>
            </ProtectedRouteForAdmin>
          } />
          <Route path='/allproducts' element={<AllProduct/>} />
          <Route path='/*' element={<NoPage/>} />
        </Routes>

        <ToastContainer />
      </Router> 
    </MyState>
  )
}

export default App

const ProtectedRoute = ({children})=>{
  const user = localStorage.getItem('user');
  if(user){
    return children;
  }else{
    return <Navigate to={'/login'} />
  }
}

const ProtectedRouteForAdmin = ({children})=>{
  const admin = JSON.parse(localStorage.getItem('user'));

  if(admin?.user?.email==="admin01@gmail.com"){
    return children
  }
  else{
    <Navigate to={'/login'} />
  }
}