import { Button, Col, Container, Row } from "react-bootstrap";
import TimeDuration from "../../components/modal/TimeDuration";
import { useState } from "react";

export default function PropertyDetail() {
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => {
        setShowModal(true)
    }

    return (
        <>
        <Container className="w-75">
            <div className="d-flex justify-content-center">
            <img className="mx-auto" style={{width:"96%", height:"30rem",objectFit:"cover"}} src="https://picsum.photos/300/200/?properties" alt="" />
            </div>
            <Row className="">
                <Col className="d-flex justify-content-center">
                    <img className="my-3" style={{objectFit:"cover"}} src="https://picsum.photos/300/200/?properties" alt="" />
                </Col>
                <Col className="d-flex justify-content-center">
                    <img className="my-3" style={{wobjectFit:"cover"}} src="https://picsum.photos/300/200/?properties" alt="" />
                </Col>
                <Col className="d-flex justify-content-center">
                    <img className="my-3" style={{objectFit:"cover"}} src="https://picsum.photos/300/200/?properties" alt="" />
                </Col>
            </Row>

            <h1>House Nama</h1>
            <Row>
                <Col>
                    <h3>90000 / Year </h3>
                    <p>ini alamat anflnadlsnodlnasl</p>                
                </Col>
                <Col>
                    <Row>
                        <Col>
                            Bedrooms
                        </Col>
                        <Col>
                            Bathrooms
                        </Col>
                        <Col>
                            Area
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            3
                        </Col>
                        <Col>
                            3
                        </Col>
                        <Col>
                            13142 ft
                        </Col>
                    </Row>
                </Col>
            </Row>
            <h4>
                Description
            </h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit corporis, ad natus eligendi voluptatem ipsa quaerat recusandae quibusdam rerum excepturi perferendis commodi dolor accusantium praesentium quia perspiciatis facilis. Tenetur, ducimus!
            </p>
            <div className="d-flex justify-content-end" style={{marginBottom:"8rem"}}>
                <Button onClick={handleShowModal}>
                    Book Now
                </Button>
            </div >
        </Container>
        <TimeDuration show={showModal} onHide={handleCloseModal} />
        </>
    )
}