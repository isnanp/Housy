import { Button, Container, Form, InputGroup, Navbar } from "react-bootstrap";
import icon from "../assets/icon.png"
import Signup from "./modal/Signup";
import { useState } from "react";
import Login from "./modal/Login";

export default function NavbarCustom() {
    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => {
        setShowRegister(true);
        setShowLogin(false);
    }

    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin= () => { setShowLogin(true)}


    return (
        <Navbar className="bg-body-white">
            <Container fluid className="px-5">
                <Navbar.Brand href="#home"><img src={icon} alt="icon" /> </Navbar.Brand>
                <Navbar.Toggle />
                
                    <Form>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="City"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                            Search
                            </Button>
                        </InputGroup>
                    </Form>
                    <div>
                        <Button variant="outline-secondary" className="me-2" onClick={handleShowRegister}> 
                            Sign In
                        </Button>
                        <Button variant="secondary" onClick={handleShowLogin}>
                            Login
                        </Button>
                    </div>
            </Container>
            <Signup show={showRegister} onHide={handleCloseRegister} />
            <Login show={showLogin} onHide={handleCloseLogin} onClick={handleShowRegister}/>
        </Navbar>
    )
}