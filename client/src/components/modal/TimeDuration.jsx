import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

export default function TimeDuration(props) {
     const [formLogin, setFormLogin] = useState({
          CheckIn: null,
          CheckOut: null,
        });
  
  const { CheckIn, CheckOut } = formLogin

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
          <h2 className="text-center mb-4">How Long you will stay</h2>
            <Form >
                <h4>Check In</h4>
                <input style={{width:"100%", height:"3em", fontSize:"20px", padding:"1em"}} type="date" name="CheckIn" value={CheckIn} onChange={OnChangeHandler} />
                <h4 className="mt-3">Check Out</h4>
                <input style={{width:"100%", height:"3em", fontSize:"20px", padding:"1em"}} type="date" name="CheckOut" value={CheckOut} onChange={OnChangeHandler} />
                <Button onClick={props.onHide} type="submit" className="container-fluid rounded-2 mt-4">
                  Submit
              </Button>
          </Form>
      </Modal.Body>
      </Modal>
    )
}
TimeDuration.propTypes = {
  show: propTypes.bool,
  onHide: propTypes.any,
  onClick: propTypes.any
}