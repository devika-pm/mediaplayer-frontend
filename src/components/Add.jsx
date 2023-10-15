import React, {useState} from 'react'
import { Modal,Button, Form } from 'react-bootstrap';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoServerResponse}) {
  const [show, setShow] = useState(false);

  const[video,setVideo] = useState({
    id:"",caption:"",url:"",embedLink:""
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  const getEmbedLink =(e)=>{
    const{value} = e.target
    
    if(value){
      const link =`https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...video,embedLink:link})
  }
  else{
    setVideo({...video,embedLink:""})
  }
  }
  console.log(video);
 


  const handleUpload = async (e)=>{
      const{id,caption,url,embedLink} = video
      if(!id||!caption||!url||!embedLink){
        toast.warning("please fill form completely!!!")
      }else{
        const response = await uploadVideo(video)
        console.log(response);
        if(response.status>=200 && response.status<300){
          toast.success(`'${response.data.caption}'video uploaded successfully!!`)
          //set server response
          setUploadVideoServerResponse(response.data)
          //reset video
          setVideo({
            id:"",caption:"",url:"",embedLink:""
          })
          //alert(`'${response.data.caption}' video uploaded successfully`)
          //hide modal
          handleClose()
        }else{
          toast.error("can not perform the action. please try some time")
        }
      }
  
  }
  

  
  return (
    <>
      <div className='d-flex  align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn'> <i className="fa-sharp fa-solid fa-circle-plus fs-5"></i></button>
      </div>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following form</p>
        <Form className='border border-secondary rounded p-5'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter video Id" onChange={(e)=>setVideo({...video,id:e.target.value})} />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter video Caption"  onChange={(e)=>setVideo({...video,caption:e.target.value})} />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter video Image URL"  onChange={(e)=>setVideo({...video,url:e.target.value})} />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter You Tube Video Link"  onClick={getEmbedLink} />
         
        </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position='top-center'
      theme='colored'
      autoClose={2000}/>
    </>
  )
}

export default Add
//<iframe width="930" height="523" src="https://www.youtube.com/embed/XzOvgu3GPwY" title="Taylor Swift ft. Ice Spice - Karma (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>