import React, { useContext, useState } from 'react'
import Layout from "../../component/layout/Layout"
import  {HeroSection}  from '../../component/heroSection/HeroSection'
import  Filter  from '../../component/filter/Filter'
import  ProductCard  from '../../component/productCard/ProductCard'
import Testimonial  from '../../component/testimonial/Testimonial'
import AskGPT from '../../component/chatBot/ChatBot'

export const Home = () => {
 
<<<<<<< HEAD
  const [showChatbot, setShowChatbot] = useState(true);
=======
  const [showChatbot, setShowChatbot] = useState(false);
>>>>>>> 87f25f73d23da6e1f4b69ec89551d7b4e342626f

  const handleChatbot = ()=>{
    setShowChatbot(!showChatbot);
    
  }
<<<<<<< HEAD
  //console.log(showChatbot);
=======
  console.log(showChatbot);
>>>>>>> 87f25f73d23da6e1f4b69ec89551d7b4e342626f

  return (
    <div>
      <Layout>
          <HeroSection/>
          <Filter/>
          <ProductCard/>

          <button onClick={handleChatbot}
            className="fixed bottom-0 right-0 z-50 pr-4 pb-12" >
            <img className='w-12 h-12 cursor-pointer' src='src\assets\bot_4712027.png'
              alt='chatbot' />
          </button>

          { showChatbot ? 
          <AskGPT />
          :
          null
         }
          <Testimonial/>

<<<<<<< HEAD
=======
        

>>>>>>> 87f25f73d23da6e1f4b69ec89551d7b4e342626f
      </Layout>
    </div>
  )
}
