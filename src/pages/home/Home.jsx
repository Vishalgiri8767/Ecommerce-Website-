import React, { useContext } from 'react'
import Layout from "../../component/layout/Layout"
import myContext from '../../context/data/myContext'

export const Home = () => {

  const context = useContext(myContext);
  const {color, state} = context;
  console.log(context);

  return (
    <div>
     
      <Layout>
        <p>Name: {state.name}</p>
        <p>Education: {state.degree}</p>
        <p>Color: {color}</p>
      </Layout>
    </div>
  )
}
