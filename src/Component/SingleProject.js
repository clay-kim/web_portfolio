import React, { useState } from 'react'
import './SingleProject.css';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { IoIosCheckmarkCircle } from "react-icons/io";


function SingleProject({ title, description, image, demoLink, githubLink, skills }) {
    //Modal window for detail view
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Ensure description.tools is an array before mapping
    const toolList = description && description.tools ? description.tools : [];
    const featureList = description && description.features ? description.features : [];

    return (
        <div className='card_container'>

            <div className="modal-container">
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    size="xl"
                    aria-labelledby="example-custom-modal-styling-title"
                    centered={true}

                >

                    <ModalHeader>
                        <ModalTitle className='modal_title'>Project Detail</ModalTitle>
                        <button type="button" class="btn-close" aria-label="Close" onClick={handleClose}></button>
                    </ModalHeader>

                    <ModalBody className="gallery-show-grid">
                        <Container className='gallery-show-grid-container'>
                            <Row className='row'>
                                <Col xs={10} lg={5} className='leftBox'>
                                    <div className="img-container">
                                        <img src={image} alt="img" />
                                    </div>
                                    <div className='link_options'>
                                        {demoLink && <p><a href={demoLink} target="_blank" rel=" ">Demo</a></p>}
                                        {githubLink && <p><a href={githubLink} target="_blank" rel=" ">Github</a></p>}
                                    </div>

                                </Col>
                                <Col className="right_column" xs={10} lg={6}>
                                    <div className="modal_top_content">
                                        <h2>{title}</h2>
                                        <h3>{description.brief}</h3>
                                    </div>

                                    <div className="modal_bottom_content">
                                        <div className="modal_features">
                                            <h3>Key Features</h3>
                                            <ul>
                                                {featureList.map((tool, index) => (
                                                    <p key={index}>
                                                        <IoIosCheckmarkCircle className="icon" /> {tool}
                                                    </p>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="modal_tools">
                                            <h3>Technologies Used</h3>
                                            <ul className='list'>
                                                {toolList.map((tool, index) => (
                                                    <p className='i' key={index}>
                                                        <IoIosCheckmarkCircle className="icon" /> {tool}
                                                    </p>
                                                ))}
                                            </ul>

                                        </div>

                                    </div>

                                </Col>
                            </Row>
                        </Container>
                    </ModalBody>

                    <ModalFooter><button class="button-12" role="button" onClick={handleClose}>Close</button></ModalFooter>
                </Modal>
            </div>


            <img src={image} className='projectPic' />
            <div className='cardBody'>
                <h2>{title}</h2>
                <div className='skillsBox'>
                    <p>#{skills.join(' #')}</p>
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