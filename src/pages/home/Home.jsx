import React, { useContext } from 'react'
import Layout from "../../component/layout/Layout"
import  {HeroSection}  from '../../component/heroSection/HeroSection'
import  Filter  from '../../component/filter/Filter'
import  ProductCard  from '../../component/productCard/ProductCard'
import Testimonial  from '../../component/testimonial/Testimonial'

export const Home = () => {

  return (
    <div>
      <Layout>
          <HeroSection/>
          <Filter/>
          <ProductCard/>
          <Testimonial/>
      </Layout>
    </div>
  )
}
