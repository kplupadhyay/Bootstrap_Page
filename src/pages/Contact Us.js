import React from 'react'
import Image from 'react-bootstrap/Image';
import map from "../assets/map.jpg";
import iz from "../assets/iz.jpg";

export default function Contact() {
  return (
    <div>
      <h1 className='my-5 text-primary'>Contact us</h1>
      <div className='container'>
        <div className='row'>
        <div className='col-lg-5 my-5'>
        
<p>👁️ 25 green street </p>
<p>📞 565656565</p>
<p>📧 company@gmail.com</p>
</div>
<div className='col-lg-6'>
<Image src={map} fluid  style={{height:'70%',width:'90%'}}/>
</div>

</div>

        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-12 '>
            <Image src={iz} fluid  style={{height:'auto',width:'80%'}}/>
            </div>
            <div className='col-lg-6 col-md-6 col-12 '>
            <form>
  <div className="form-group">
    
    <input type="email" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    
    <input type="email" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    
    <input type="email" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    
    <input type="email" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            </div>
          </div>
        </div>
      </div>
      
        
       
    
  )
}







