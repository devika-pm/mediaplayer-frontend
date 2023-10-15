import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'

function WatchHistory() {
  const [history,setHistory] =useState([])
  const handleHistory = async()=>{
    //make api call
    const {data} = await getAllHistory()
     setHistory(data);
    
  }
  useEffect(()=>{
    handleHistory()
  },[])
  const handleDeleteHistory = async (id)=>{
    //make api call
    await deleteHistory(id)
    //get remaining history 
    handleHistory()
  }
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between">
      <h3>Watch History</h3>
      <Link to={'/home'} className='fs-4' style={{textDecoration:'none',fontSize:'20px',color:'white'}}><i className="fa-solid fa-arrow-left fa-beat-fade me-2"></i> Back to Home</Link>

    </div>
    
       <div className="container w-100 mt-5 mb-5">
         <table striped border hover className='table mt-5 mb-5 conatainer'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th>Action</th>
            </tr>
          </thead>
         <tbody>
            {
              history.length>0?history?.map((item,index)=>(
                <tr key={index}>
                <td>{index+1}</td>
                <td>{item?.caption}</td>
                <td><a href={item?.embedLink} target='_blank'>{item?.embedLink}</a></td>
                <td>{item?.timeStamp}</td>
                <td><button onClick={()=>handleDeleteHistory(item?.id)} className='btn'><i className="fa-solid fa-trash fa-fade text-danger"></i></button></td>
              </tr>
              )) :  <p className='fw-bolder fs-5 text-danger'>nothing to display</p>
             
            }
         </tbody>
         </table>
       </div>
    

    </>
  )
}

export default WatchHistory