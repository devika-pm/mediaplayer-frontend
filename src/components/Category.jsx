import React,{useEffect, useState} from 'react'
import { Modal,Button,Form,Row,Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getVideo, updateCategory } from '../services/allAPI';
import { getAllCategory } from '../services/allAPI';
import VideoCard from './VideoCard';


function Category() {
  const[allCategories,setAllCategories] = useState([])
  const [categoryName,setCategoryName] = useState()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async()=>{
    if(categoryName){
      let body={
        categoryName,allVideos:[]
      }
      //make api call
      const response = await addCategory(body)
        if(response.status>200 && response.status<300){
          //hide modal
          handleClose()
          //reset state
          setCategoryName("")
          //get category
          getCategories()
        }else{
          toast.error("operation failed!!!please try after some time...")
        }

    }else{
      toast.warning("please provide category name!!!")
    }
  }

  const getCategories = async ()=>{
    //make api call
    const {data} = await getAllCategory()
    setAllCategories(data);
  }
  console.log(allCategories);
  useEffect(()=>{
    getCategories()
  },[])

const handleDelete = async (id)=>{
  await deleteCategory(id)
  getCategories()
}
const dragOver =(e)=>{
  console.log("video drag over category");
  e.preventDefault()

}
const videoDrop =async (e,categoryId)=>{
  
  console.log("video dropped inside category Id :" +categoryId);
  const videoId = e.dataTransfer.getData("videoId")
 // console.log("video card id: ",videoId);
  // get video details
  const {data} = await getVideo(videoId)
  //console.log(data);
  //get category details
  const selectCategory = allCategories?.find(item=>item.id===categoryId)
  selectCategory.allVideos.push(data)
  console.log(selectCategory);
  //make api call to update category
  await updateCategory(categoryId,selectCategory)
  getCategories()

}

  return (
    <>
    <div className='d-flex  align-items-center m-5'>
    <h5>Add new category</h5>
    <button onClick={handleShow} className='btn'> <i className="fa-sharp fa-solid fa-circle-plus fs-5"></i></button>

    </div>
    {
      allCategories?.length>0?allCategories?.map((item)=>(
        <div className='m-5 border rounded p-3' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
          <div className='d-flex justfy-content-between align-items-center'>
            <h6>{item?.CategoryName}</h6>
            <button onClick={()=>handleDelete(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
          </div>
          <Row sm={12}>
            {
              item?.allVideos &&
              item?.allVideos.map(card=>(
                <Col>
                <VideoCard displayData={card} insideCategory={true} />
                </Col>
              ))
            }
          </Row>
        </div>
        
      )):<p className='fw-bolder fs-5 text-danger m-5'>Nothing to Display!!!!!</p>
    }

    
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Form className='border border-secondary rounded p-5'>
         
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)} />
         
        </Form.Group>
       
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="primary" onClick={handleAddCategory}>
            Add
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

export default Category