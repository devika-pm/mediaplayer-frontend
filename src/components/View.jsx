import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import { Col, Row } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI';

function View({uploadVideoServerResponse}) {
  const[deleteVideo,setDeleteVideo] =useState(false)
  const [allVideos,setAllVideos] =useState([])
  const getAllUploadVideos = async ()=>{
    //make api call getallvideos
    const {data} = await getAllVideos()
    setAllVideos(data);
  }
  useEffect(()=>{
    
    getAllUploadVideos()
    setDeleteVideo(false)
  },[uploadVideoServerResponse,deleteVideo])
  return (
    <>
    <Row >{
      allVideos.length>0?
      allVideos.map(video=>(
      <Col  sm={12} md={6} lg={4} xl={4}>
        <VideoCard displayData={video} setDeleteVideo={setDeleteVideo} />
      </Col>
      )
      
      )
      :
      <p className='fw-bolder fs-5 text-danger'>nothing to display</p>
    
    }
      
      
    </Row>

    </>
  )
}

export default View