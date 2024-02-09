import React from 'react'
import { Link } from 'react-router-dom'

export default function Test() {
  return (
    <div>
        <h1 className='m-5 text-primary'>Testinomial</h1>
     <div className='container'>
        <div className='row'>
            <div className='col-lg-4 col-md-6 col-12 '>
            <div className="card" style={{width: 300, height:200}}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
            </div>

            {/* //another card */}
            <div className='col-lg-4 col-md-6 col-12 '>
            <div className="card" style={{width: 300, height:200}}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
            </div>

            {/* //another */}
            <div className='col-lg-4 col-md-6 col-12 '>
            <div className="card" style={{width: 300, height:200}}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
            </div>
        </div>
     </div>
    </div>
  )
}
