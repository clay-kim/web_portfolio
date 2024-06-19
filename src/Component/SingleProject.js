import React, { useState } from 'react'
import './SingleProject.css';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import pic from '../Assets/clayPic.jpeg'
import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function SingleProject() {
    //Modal window for detail view
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [popUp, setPopUp] = useState([]);


    return (
        <div className='card_container'>

            <div className="modal-container">
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    size="lg"
                    aria-labelledby="example-custom-modal-styling-title"
                    centered={true}

                >

                    <ModalHeader>
                        <ModalTitle className='modal_title'>Project Detail</ModalTitle>
                        <button type="button" class="btn-close" aria-label="Close" onClick={handleClose}></button>
                    </ModalHeader>

                    <ModalBody className="gallery-show-grid">
                        <Container className='gallery-show-grid-container'>
                            <Row>
                                <Col xs={10} lg={5}>
                                    <img src={pic} alt="img" />
                                </Col>
                                <Col className= "right_colum"xs={10} lg={6}>
                                    <h2>Title</h2>
                                    <h4>sdfsdfsdfasdfasdf <br></br>
                                    ksdjflakjdflaskjdflsklslk<br></br>
                                    ksdjflakjdflaskjdflsklssdfsdfasdfsefse dfwefsd sdcf lk<br></br>
                                    ksdjflakjdflaskjdflsklslk</h4>
                                    <div className='link_options'>
                                        <p>Demo</p> <p>Github</p>
                                    </div>

                                </Col>
                            </Row>
                        </Container>
                    </ModalBody>

                    <ModalFooter><button class="button-12" role="button" onClick={handleClose}>Close</button></ModalFooter>
                </Modal>
            </div>


            <img src={pic} className='projectPic' />
            <div className='cardBody'>
                <h2>Project Name</h2>
                <div className='skillsBox'>
                    <p>descriptions...</p>
                    <p>Skills:</p>
                </div>

                <div className='buttonBox'>

                    <div className='button_modal' onClick={handleShow}>
                        <p>More info</p> <FaArrowUpRightFromSquare className='iconPopUp' />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default SingleProject