import React, { useContext } from 'react'
import Layout from "../../component/layout/Layout"
import  {HeroSection}  from '../../component/heroSection/HeroSection'
import  Filter  from '../../component/filter/Filter'
import  ProductCard  from '../../component/productCard/ProductCard'
import Testimonial  from '../../component/testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart, deleteFromCart } from '../../redux/cartSlice'

export const Home = () => {

  const dispatch = useDispatch();
  const cartItem = useSelector(store=>(store.cart))

  const addItem= ()=>{
      dispatch(addTocart("shirt"));
  };
  const deleteItem = ()=>{
    dispatch(deleteFromCart("shirt"));
  };

  return (
    <div>
      <div>
        <button onClick={addItem} className='bg-red-300 p-4'>add</button>
        <button onClick={deleteItem} className='bg-red-300 p-4'>delete</button>
      </div>
      <Layout>
          <HeroSection/>
          <Filter/>
          <ProductCard/>
          <Testimonial/>
      </Layout>
    </div>
  )
}
