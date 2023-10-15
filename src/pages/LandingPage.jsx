import React from 'react'
import { Row,Col ,Card} from 'react-bootstrap'
import Iframe from 'react-iframe'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
    <Row className='mt-5 mb-5 align-items-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={4}>
        <h3>Welcome To <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, dolor explicabo culpa velit sint nulla, assumenda voluptatem laborum, corrupti dicta molestiae aliquid necessitatibus suscipit beatae voluptatibus. Beatae temporibus vero dolore.</p>
        <button onClick={()=>navigateByUrl('/home')} className='mt-4 btn btn-primary'>Get Started   <i class="fa-solid fa-arrow-right fa-beat-fade"></i></button>
      </Col>
      <Col></Col>
      <Col lg={6}>
        <img className='img-fluid' src='https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif' alt='landing'/>
      </Col>
      </Row> 
      <div className='container mt-5 mb-5 align-items-center flex-column'>
        <div><h3>Features</h3></div>
        <div className='cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100 '>
        <Card className='p-5' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/43/b7/e9/43b7e94dac162ec1543b0a861d012564.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text >
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-5' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media.tenor.com/WOQ4NaiPiRwAAAAC/beats-art.gif" />
      <Card.Body>
        <Card.Title>Category Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-5' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://64.media.tumblr.com/d96ede935d433f652609ab59b3387c7d/tumblr_pdhtbmu2Bz1umgyvho1_500.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

        </div>
      </div>
      <div className='container border rounded p-5 border-secondary b-5 mt-5 mb-5 d-flex alihn-items-center justify-content-between w-100'>
        <div className="content me-5">
          <h3 className='mb-5 text-warning'>Simple,Fast and Furious</h3>
          <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorum exercitationem, quisquam laboriosam asperiores non explicabo nam harum ipsam! Officiis iure non nam veritatis modi in labore libero accusantium distinctio.

          </h6>
          <h6 className='mb-3'><span className='fs-5 fw-bolder'>Category Videos</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorum exercitationem, quisquam laboriosam asperiores non explicabo nam harum ipsam! Officiis iure non nam veritatis modi in labore libero accusantium distinctio.

           </h6>
            <h6 className='mb-3'><span className='fs-5 fw-bolder'>Review</span>  : Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorum exercitationem, quisquam laboriosam asperiores non explicabo nam harum ipsam! Officiis iure non nam veritatis modi in labore libero accusantium distinctio.

            </h6>

        </div>
        <div className="video">
         <Iframe width='689' height='387' src='https://www.youtube.com/watch?v=KudedLV0tP0&pp=ygUMdGF5bG9yIHN3aWZ0' allow='accelerometer;autoplay;picture-in-picture;web-share' allowFullScreen/>          
        </div>
      </div>
    </>
  )
}

export default LandingPage