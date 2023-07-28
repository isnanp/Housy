import { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

export default function ChangePw(props) {
     const [formLogin, setFormLogin] = useState({
          OldPassowrd: "",
          NewPassword: "",
          NewPasswordConfirm: "",
        });
  
  const { OldPassowrd, NewPassword, NewPasswordConfirm } = formLogin

  const OnChangeHandler = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

    return (
        <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <h1 className="formTitle">Change Password</h1>
            <Form >
              <FloatingLabel controlId="username" label="Old Password" className="mb-3">
                  <Form.Control
                      type="text"
                      placeholder="example"
                      controlId='username'
                      name='OldPassword'
                      value={OldPassowrd}
                      onChange={OnChangeHandler}
                      />
                      
              </FloatingLabel>
              <FloatingLabel controlId="password" label="New Password" className="mb-5">
                  <Form.Control
                      type="password"
                      placeholder="Password"
                      controlId='password'
                      name='NewPassword'
                      value={NewPassword}
                      onChange={OnChangeHandler}
                      />
              </FloatingLabel>
              <FloatingLabel controlId="password" label="New Password Comfirm" className="mb-5">
                  <Form.Control
                      type="password"
                      placeholder="Password"
                      controlId='password'
                      name='NewPasswordConfirm'
                      value={NewPasswordConfirm}
                      onChange={OnChangeHandler}
                      />
              </FloatingLabel>
              <Button onClick={props.onHide} type="submit" className="container-fluid rounded-2 grad">
                  Submit
              </Button>
          </Form>
      </Modal.Body>
      </Modal>
    )
}
ChangePw.propTypes = {
  show: propTypes.bool,
  onHide: propTypes.any,
  onClick: propTypes.any
}