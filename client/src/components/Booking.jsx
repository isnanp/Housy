import { Button, Col, Container, Row } from "react-bootstrap";
import Icon from "../assets/icon.png";
import QrCode from "../assets/barcode.png";


export default function Booking() {
    return (

    <div style={{marginBottom:"10.6rem", width:"min-width"}}>  
            <Container className="shadow pb-3" style={{border: "1px solid #B7B7B7", borderRadius:"5px", padding:"0", width:"75%"}}>
                    <Row>
                        <Col>
                            <div className="grad " style={{width:"10rem", padding:"8px", height:"3.5rem", borderRadius:"5px 0 50px 0"}}>
                                <div className="d-flex align-items-center"  style={{marginTop:"auto", marginBottom:"auto"}}>
                                    <img style={{paddingLeft:"3px", marginBottom:"18px"}} src={Icon} alt="logo" />
                                </div>
                            </div>
                        </Col>
                        <Col className="pe-3" style={{textAlign:"end"}}>
                        <h1 style={{marginBottom:"0", paddingBottom:"0"}}>Booking</h1>
                        <p className="text-muted">Saturday, 24 april 2023</p>
                        </Col>
                    </Row>
                    <Row style={{width:"90%", padding:"1rem"}}>
                        <Col className="me-5">
                        <h3><b>Tes Nama</b></h3>
                        <p>ini buat alamatnya coy</p>
                       
                            <div className="text-center" style={{textAlign:"center", background: "#95fc95", width:"max-content", borderRadius:"3px"}}>
                            <p style={{margin:"10px", color:"green"}}>Approved</p>
                        </div>

                        </Col>
                        <Col sm="1" className="pt-2">
                            <div style={{borderColor:"pink",borderRadius:"50%", borderStyle:"solid", borderWidth:"2px", width:"1rem", height:"1rem"}}></div>
                            <div style={{borderColor:"pink", borderStyle:"solid", borderWidth:"0 2px 0 0", height:"3.5rem", width:"2px", margin:"3px 0 3px 7px"}}></div>
                            <div style={{borderColor:"pink",borderRadius:"50%", borderStyle:"solid", borderWidth:"2px", width:"1rem", height:"1rem", background:"pink"}}></div>
                        </Col>
                        <Col>
                            <h4>Check in</h4>
                            <p className="text-muted">21 feb 2023</p>
                            <h4>Check out</h4>
                            <p className="text-muted">21 feb 2023</p>
                        </Col>
                        <Col>
                            <h4>Amenities</h4>
                            <p className="text-muted">ini map amenities</p>
                            <h4>Type of rent</h4>
                            <p className="text-muted">ini type rentnya</p>
                        </Col>
                        
                            <img style={{objectFit:"cover", width:"9rem"}} src={QrCode} alt="barcode" />
                        

                    </Row>
                    <Row>
                        <Col>
                            <Row style={{marginLeft:"1rem"}}>
                                <Col>No. Tanda pengenal</Col>
                                <Col>Nama Pemesan</Col>
                                <Col>No. Handphone</Col>
                                <Col>Email</Col>
                                <Col>Long Time Rent : 1 year</Col>
                            </Row>
                            <hr style={{margin:"3px 0"}} />
                            <Row className="text-muted" style={{marginLeft:"1rem"}}>
                                <Col>24907104021740</Col>
                                <Col>Isnan</Col>
                                <Col>082329038u120</Col>
                                <Col>isnan34@gmail.com</Col>
                                <Col className="text-danger text-end me-4">3000000</Col>
                            </Row>
                        </Col>
                    </Row> 
            </Container> 
                <div className="d-flex justify-content-end mt-4" style={{marginRight:"12rem"}}>
                    <Button className="px-5">PAY</Button>
                </div>       
        </div>
    )
}
