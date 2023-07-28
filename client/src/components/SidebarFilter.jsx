import { Button, Col, Form, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import CardProperties from "./CardProperties";

export default function Filter() {
    return (
        <>
            <Row className="mb-5">
                
                <Col sm="3" className="ms-3 ps-3 pb-5" >
                <Form className="border-end pe-3">
                <h4 className="">Type of Rent</h4>
                    <ToggleButtonGroup
                        type="radio"
                        name="typeOfRent"
                        className="d-flex gap-3"
                    >
                        <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-primary"
                            value="day"  
                        >
                            Day
                        </ToggleButton>

                        <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-primary"
                            value="months"  
                        >
                            Mont
                        </ToggleButton>

                        <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-primary"
                            value="1"  
                        >
                            Year
                        </ToggleButton>

                    </ToggleButtonGroup>
                <h4 className="mt-3">Date</h4>
                <input style={{width:"100%"}} type="date" />

                <h4 className="mt-3">Property Room</h4>
                <p className="">Bedroom</p>

                    <ToggleButtonGroup
                        type="radio"
                        name="typeOfRent"
                        className="d-flex gap-3"
                    >

                         <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-primary"
                            value="1"  
                        >
                            1
                        </ToggleButton>

                        <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-primary"
                            value="1"  
                        >
                            2
                        </ToggleButton>

                        <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-primary"
                            value="1"  
                        >
                            3
                        </ToggleButton>

                        <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-primary"
                            value="1"  
                        >
                            4
                        </ToggleButton>

                        <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-primary"
                            value="1"  
                        >
                            5+
                        </ToggleButton>
                    </ToggleButtonGroup>


                    <p className="">Bedroom</p>
                    <ToggleButtonGroup
                        type="radio"
                        name="typeOfRent"
                        className="d-flex gap-3"
                    >

                         <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-primary"
                            value="1"  
                        >
                            1
                        </ToggleButton>

                        <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-primary"
                            value="1"  
                        >
                            2
                        </ToggleButton>

                        <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-primary"
                            value="1"  
                        >
                            3
                        </ToggleButton>

                        <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-primary"
                            value="1"  
                        >
                            4
                        </ToggleButton>

                        <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-primary"
                            value="1"  
                        >
                            5+
                        </ToggleButton>
                    </ToggleButtonGroup>

                    <h4 className="mt-3">Amenities</h4>

                    <div className="d-flex justify-content-between">
                        <label className="text-secondary" htmlFor="">
                        Furnished
                        </label>
                        <Form.Check aria-label="option 1" />
                    </div>
                    <div className="d-flex justify-content-between">
                        <label className="text-secondary" htmlFor="">
                        Pet Allowed
                        </label>
                        <Form.Check aria-label="option 1" />
                    </div>
                    <div className="d-flex justify-content-between">
                        <label className="text-secondary" htmlFor="">
                        Shared Accomodation
                        </label>
                        <Form.Check aria-label="option 1" />
                    </div>

                    <h4 className="mt-3">Budget</h4>

                    <Form.Group
                        as={Row}
                        className="mb-0"
                    >
                        <Form.Label column sm="5">
                        Less than IDR.
                        </Form.Label>
                        <Col>
                        <Form.Control type="text" placeholder="" className="bg" />
                        </Col>
                    </Form.Group>
                    <div className="d-flex justify-content-end mt-3">
                        <Button>
                            APPLY
                        </Button>
                    </div>
                </Form>
                </Col>
                <Col>
                    <Row className="g-3">
                        <CardProperties />
                        <CardProperties />
                        <CardProperties />
                        <CardProperties />
                        <CardProperties />
                    </Row>
                </Col>
            </Row>
        </>
    )
}