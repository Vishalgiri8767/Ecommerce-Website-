import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Cart } from './pages/cart/Cart'
import { Order } from './pages/order/Order'
import { NoPage } from './pages/nopage/NoPage'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<Order/>} />
        {/* <Route path='/dashboard' element={<DashBoard/>} /> */}
        <Route path='/*' element={<NoPage/>} />
      </Routes>
    </Router> 
  )
}

export default App
