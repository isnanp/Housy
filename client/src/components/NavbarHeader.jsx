import {
    Button,
    ButtonGroup,
    Container,
    Dropdown,
    DropdownButton,
    Form,
    InputGroup,
    Navbar
} from "react-bootstrap";
import icon from "../assets/icon.png"
import Signup from "./modal/Signup";
import {useContext, useState} from "react";
import Login from "./modal/Login";
import {UserContext} from "../context/usercontext";
import { useNavigate } from "react-router-dom";

export default function NavbarCustom() {
    const navigate = useNavigate()
    const [state, dispatch] = useContext(UserContext)
    const logout = () => {
        dispatch({type: "LOGOUT"});
    }

    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => {
        setShowRegister(true);
        setShowLogin(false);
    }

    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => {
        setShowLogin(true)
    }

    return (
        <Navbar className="bg-body-white">
            <Container fluid="fluid" className="px-5">
                <Navbar.Brand href="#home"><img src={icon} alt="icon"/>
                </Navbar.Brand>
                <Navbar.Toggle/> {
                    state.user.role == "owner"
                        ? (
                            <DropdownButton
                                as={ButtonGroup}
                                key="dropdown"
                                drop="start"
                                variant="transparent"
                                title={<img className = "p-0 rounded-circle"
                                style = {{ width: "50px", height: "50px" }}
                                src = {
                                    state.user.image
                                }
                                alt = "pp" />}>
                                <Dropdown.Item >Profile</Dropdown.Item>
                                <Dropdown.Item >Add Property</Dropdown.Item>
                                <Dropdown.Item >History</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item onClick={() => {logout(); navigate("/")}}>Logout</Dropdown.Item>
                            </DropdownButton>
                        )
                        : state.isLogin
                            ? (
                                <> < Form > <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="City"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"/>
                                    <Button variant="outline-secondary" id="button-addon2">
                                        Search
                                    </Button>
                                </InputGroup>
                            </Form>

                            <DropdownButton
                                as={ButtonGroup}
                                key="dropdown"
                                drop="start"
                                variant="transparent"
                                title={<img className = "p-0 rounded-circle"
                                style = {{ width: "50px", height: "50px" }}
                                src = {
                                    state.user.image
                                }
                                alt = "pp" />}>
                                <Dropdown.Item >Profile</Dropdown.Item>
                                <Dropdown.Item >My Booking</Dropdown.Item>
                                <Dropdown.Item >History</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item onClick={() => {logout(); navigate("/")}}>Logout</Dropdown.Item>
                            </DropdownButton>
                        </>
                            )
                            : (
                                <> < Form > <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="City"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"/>
                                    <Button variant="outline-secondary" id="button-addon2">
                                        Search
                                    </Button>
                                </InputGroup>

                            </Form>
                            <div>
                                <Button
                                    variant="outline-secondary"
                                    className="me-2"
                                    onClick={handleShowRegister}>
                                    Sign In
                                </Button>
                                <Button variant="secondary" onClick={handleShowLogin}>
                                    Login
                                </Button>
                            </div>
                            <Signup show={showRegister} onHide={handleCloseRegister}/>
                            <Login show={showLogin} onHide={handleCloseLogin} onClick={handleShowRegister}/>
                        </>
                            )
                }
            </Container>
        </Navbar>
    )
}