import { Button, Col, Container, Row } from "react-bootstrap";
import IconProfile from "../assets/IconProfil.png"
import IconPassword from "../assets/IconPassword.png"
import IconEmail from "../assets/IconEmail.png"
import IconStatus from "../assets/IconStatus.png"
import IconGender from "../assets/IconGender.png"
import IconPhone from "../assets/IconPhone.png"
import IconAddress from "../assets/IconAddress.png"

export default function ProfilePage() {
    return (
        <Container className="w-50">
                <h2>Personal Info</h2>
            <Row>
                <Col>
                    <Row>
                        <Col sm="2" className="d-flex justify-content-center align-items-center">
                            <img className="w-100" src={IconProfile} alt="pp" />
                        </Col>
                        <Col>
                        <h5 className="mb-0 mt-3 ms-0">Isnan </h5>
                        <p className="text-secondary mt-0">Full name</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="2" className="d-flex justify-content-center align-items-center">
                            <img className="w-100" src={IconEmail} alt="pp" />
                        </Col>
                        <Col>
                        <h5 className="mb-0 mt-3 ms-0">ISnan@gmail</h5>
                        <p className="text-secondary mt-0">Email</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="2" className="d-flex justify-content-center align-items-center">
                            <img className="w-100" src={IconPassword} alt="pp" />
                        </Col>
                        <Col>
                        <h5 className="mb-0 mt-3 ms-0 text-primary" style={{cursor:"pointer"}}>Change Password</h5>
                        <p className="text-secondary mt-0">Password</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="2" className="d-flex justify-content-center align-items-center">
                            <img className="w-100" src={IconStatus} alt="pp" />
                        </Col>
                        <Col>
                        <h5 className="mb-0 mt-3 ms-0">Tenant</h5>
                        <p className="text-secondary mt-0">status</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="2" className="d-flex justify-content-center align-items-center">
                            <img className="w-100" src={IconGender} alt="pp" />
                        </Col>
                        <Col>
                        <h5 className="mb-0 mt-3 ms-0">Male</h5>
                        <p className="text-secondary mt-0">Gender</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="2" className="d-flex justify-content-center align-items-center">
                            <img className="w-100" src={IconPhone} alt="pp" />
                        </Col>
                        <Col>
                        <h5 className="mb-0 mt-3 ms-0">0871972917</h5>
                        <p className="text-secondary mt-0">Mobile Phone</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="2" className="d-flex justify-content-center align-items-center">
                            <img className="w-100" src={IconAddress} alt="pp" />
                        </Col>
                        <Col>
                        <h5 className="mb-0 mt-3 ms-0">Jogjaashjdlkjal</h5>
                        <p className="text-secondary mt-0">Address</p>
                        </Col>
                    </Row>
                </Col>
                <Col className="text-center pt-5">
                    <img style={{objectFit:"cover", width:"300px "}} src="https://picsum.photos/300/300" alt="" />
                    <Button className="mt-3">Change Photo Profile</Button>
                </Col>
            </Row>
        </Container>
    )
}