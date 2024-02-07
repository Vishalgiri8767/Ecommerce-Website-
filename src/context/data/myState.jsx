import React from 'react'
import MyContext from "../data/myContext"

function MyState(props) {
  
  const state = {
    name:"Vishal Giri",
    degree:"MCA",
  }
  const color = "red"

  return (
    <MyContext.Provider value={{state, color}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState