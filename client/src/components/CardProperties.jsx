import { Card, Col } from "react-bootstrap";

export default function CardProperties() {
    return (
        <Col sm="4" >     
            <Card className="p-3">
                <div className="position-absolute mt-3 ms-3 d-flex gap-2">
                    <span className="px-3 py-1 bg-white rounded-2">
                    Furnished
                    </span>
                </div>

                <Card.Img src="https://picsum.photos/300/200/?properties" />
                <Card.Body className="">
                <Card.Title className="fs16 fw-bold">
                    Rp. 200000 / Year
                </Card.Title>
                <Card.Text className="fw-semibold">
                    2 Bedrooms, 2 Bathrooms
                </Card.Text>
                <Card.Text className="text-secondary fw-semibold">
                    jogjakarta
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>  
    )
}