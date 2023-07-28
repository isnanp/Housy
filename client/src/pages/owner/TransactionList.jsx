import { Button, Col, Container, Row } from "react-bootstrap";
import IconSearch from "../../assets/search.png"

export default function TransactionList() {
    return (
        <>
        <Container className="m-5">
            <h1 className="mt-3 mb-5"><b>List Transaksi</b></h1>
            <Row className="mb-3">
                <Col sm="1">No.</Col>
                <Col>Users</Col>
                <Col>Type Of Rent</Col>
                <Col>Bukti Transfer</Col>
                <Col>Status Payment</Col>
                <Col>Action</Col>
            </Row>

          
            <Row className="py-3" style={{borderWidth:"2px 0 2px 0", borderStyle:"solid", borderColor:"#C4C4C4"}}>
                <Col sm="1">1</Col>
                <Col>Isnan p</Col>
                <Col>Year</Col>
                <Col> buktiTf.png </Col>
                <Col>Success</Col>
                <Col>
                    <Button variant="transparent"> <img src={IconSearch} alt="src" />  </Button> 
                </Col>
            </Row>

        </Container>
        
        </>
    )
}