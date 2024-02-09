import React from 'react'
// import "./About.css"
import imz from "../assets/about.jpg"
import Image from 'react-bootstrap/Image';
export default function About() {
  return (
    <div>
       <h1 className='m-5 text-primary'>About</h1>
      
      <div className='container' >
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-12'>
            
          <Image src={imz} fluid  style={{height:'auto',width:'100%'}} className='border border-primary border-3 py-5 px-5'/>
            
            </div>
            <div className='col-lg-6 col-md-6 col-12 my-4 '  style={{height:300 , width:500  }}>
            <div class="card ">
  <div class="card-body">
    ANzkYxhPOzSme2XSFOwwV1WaMFPLHM2mtBKB4l8LeowGPVHQR9TeSKSPjjm5jNkk2pOyqZMNOk0qoTECU1Ua3BvjY2o3wrmOzsrFA0RMrmQrqLN4rHHT KvLpi6xOTubL7pcIVyPZ0GWKySyCWfxAuFAsMR0HHsjYdbONKMqpGlSATveAKp6m8XO1emK8LhC9iOdkk790Z2K3x0wrQ6cY0s5AcwBJEAW4IwIZRAKedQw5CrYGOaeObkzllCTkHclgCeuJ4Sd6ojr974n5D6b KvLpi6xOTubL7pcIVyPZ0GWKySyCWfxAuFAsMR0HHsjYdbONKMqpGlSATveAKp6m8XO1emK8LhC9iOdkk790Z2K3x0wrQ6cY0s5AcwBJEAW4IwIZRAKedQw5CrYGOaeObkzllCTkHclgCeuJ4Sd6ojr974n5D6b
  </div>
</div>
              </div>
         
        </div>
          </div>
          
             
            
        
      </div>
  
    
  )
}
