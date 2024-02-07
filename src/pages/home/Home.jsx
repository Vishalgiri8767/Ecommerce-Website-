import React, { useContext } from 'react'
import Layout from "../../component/layout/Layout"
import { HeroSection } from '../../component/heroSection/HeroSection'
import { Filter } from '../../component/filter/Filter'

export const Home = () => {

  return (
    <div>
      <Layout>
          <HeroSection/>
          <Filter/>
      </Layout>
    </div>
  )
}
