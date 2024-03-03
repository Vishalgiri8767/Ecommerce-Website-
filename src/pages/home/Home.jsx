import React, { useContext, useState } from 'react'
import Layout from "../../component/layout/Layout"
import  {HeroSection}  from '../../component/heroSection/HeroSection'
import  Filter  from '../../component/filter/Filter'
import  ProductCard  from '../../component/productCard/ProductCard'
import Testimonial  from '../../component/testimonial/Testimonial'
import ChatBot from '../../component/chatBot/ChatBot'

export const Home = () => {
 
  const [showChatbot, setShowChatbot] = useState(true);

  const handleChatbot = ()=>{
    setShowChatbot(!showChatbot);
    
  }
  //console.log(showChatbot);

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
          <ChatBot />
          :
          null
         }
          <Testimonial/>

      </Layout>
    </div>
  )
}
