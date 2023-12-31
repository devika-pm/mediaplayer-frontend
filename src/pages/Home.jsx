import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
  const[uploadVideoServerResponse,setUploadVideoServerResponse] = useState({})
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
      <div className="add-videos">
        <Add setUploadVideoServerResponse={setUploadVideoServerResponse}/>
      </div>
      <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}><h4>Watch history</h4></Link>
    </div>
    <div className="container-fluid w-100 mt-5 mb-5 d-flex justify-content-between align-items-center">
      
      <div className=" add-videos col-lg-9">
      <h4>All Videos</h4>
        <View uploadVideoServerResponse={uploadVideoServerResponse}/>
      </div>
       <div className="category col-lg-3">
        <Category/>
       </div>
    </div>

    </>
  )
}

export default Home