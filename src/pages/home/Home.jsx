import React, { useContext } from 'react'
import Layout from "../../component/layout/Layout"
import { HeroSection } from '../../component/heroSection/HeroSection'

export const Home = () => {

  return (
    <div>
      <Layout>
          <HeroSection/>
      </Layout>
    </div>
  )
}
