import { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

export default function Signup(props){
    const [form, setForm] = useState({
    Username : "" ,
    Email   : "",
    Password : "",
	Fullname : "",
    Role : "",
	Gender : "",
	Telphone : "",
	Address : "",
  });

  const { Username, Role, Email, Password, Fullname, Gender, Telphone, Address } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


    return (
        <>
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
            <h1 className="text-center">SIGNUP</h1>
            <Form >
                <FloatingLabel
                    controlId="floatingInput"
                    label="Nama Lengkap"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="Isnan" name='Fullname' value={Fullname} onChange={handleChange} />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Username"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="isnanp" name='Username' value={Username} onChange={handleChange}/>
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="name@example.com" name='Email' value={Email} onChange={handleChange}/>
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                    <Form.Control type="password" placeholder="Password" name='Password' value={Password} onChange={handleChange}/>
                </FloatingLabel>

                <Form.Select aria-label="Default select example" className='mb-3' name='Role' value={Role} onChange={handleChange}>
                <option hidden>List As</option>
                <option value="Tenant">Tenant</option>
                <option value="Owner">Owner</option>
                </Form.Select>  


                <Form.Select aria-label="Default select example" className='mb-3' name='Gender' value={Gender} onChange={handleChange}>
                <option hidden>Jenis Kelamin</option>
                <option value="Laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
                </Form.Select>  

                <FloatingLabel
                    controlId="floatingInput"
                    label="Telp"
                    className="mb-3"
                >
                    <Form.Control type="text" name='Telphone' value={Telphone} onChange={handleChange} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingTextarea2" label="Alamat">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '150px', resize:"none"}}
                    className="mb-3 textArea"
                    name='Address'
                    value={Address}
                    onChange={handleChange}
                    fixed
                    />
                </FloatingLabel>
                <Button type="submit" className="container-fluid rounded-2 grad" style={{backgroundColor:"#5A57AB"}}>
                    Submit
                </Button>
                </Form> 
            </Modal.Body>
        </Modal>
        </>
    );
}

Signup.propTypes = {
  show: propTypes.any,
  onHide: propTypes.any
}