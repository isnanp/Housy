import { useState } from "react";
import { Form,FloatingLabel,Button, Container } from "react-bootstrap";


export default function AddProperties() {
   

    const [form, setForm] = useState({
    Name : "" ,     
	City : "" , 
	Address : "" ,           
	Price   : "" ,   
	Type : "" ,   
	Amenity   : [] , 
	Bedrooms : "" , 
	Bathrooms : "" , 
	Description : "" , 
    Image : "" , 
  });


  const { Name, City, Address, Price, Type, Amenity, Bedrooms, Bathrooms, Description } = form;
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

 

    return (
        <Container>
        <h2 className="mt-5 mb-3">Add Property</h2>
        
        <Form >
            <FloatingLabel controlId="Name" label="Name Property" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="example"
                    controlId='Name'
                    value={Name}
                    name='Name'
                    onChange={handleChange}
                    />
            </FloatingLabel>

            <FloatingLabel controlId="City" label="City" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="example"
                    controlId='City'
                    value={City}
                    name='City'
                    onChange={handleChange}/>
            </FloatingLabel>

            <FloatingLabel controlId="Description" label="Harga Tiket" className="mb-3">
                <Form.Control
                    type="Text"
                    placeholder="example"
                    controlId='Description'
                    value={Description}
                    name='Description'
                    onChange={handleChange}/>
            </FloatingLabel>

            <FloatingLabel controlId="Address" label="Address" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="example"
                    controlId='Address'
                    value={Address}
                    name='Address'
                    onChange={handleChange} />
            </FloatingLabel>
            
            <Form.Label controlId="Type">Type of Rent</Form.Label>
            <Form.Select className="mb-3"
            aria-label="Default select example"
            controlId="Type"
            name="Type"
            onChange={handleChange}
            value={Type}>
                    <option value="Days"> Days </option>
                    <option value="Months"> Months </option>
                    <option value="Years"> Years </option>
            </Form.Select>
            
            <br />
            <Form.Label>Amenities</Form.Label>
            <Form.Group className="mb-3 d-flex gap-5" controlId="amenities">
                <Form.Check
                onChange={handleChange}
                checked={Amenity.includes("Furnished")}
                value="Furnished"
                type="checkbox"
                label="Furnished"
                />
                <Form.Check
                onChange={handleChange}
                checked={Amenity.includes("Pet Allowed")}
                value="Pet Allowed"
                type="checkbox"
                label="Pet Allowed"
                />
                <Form.Check
                onChange={handleChange}
                checked={Amenity.includes("Shared Accomodation")}
                value="Shared Accomodation"
                type="checkbox"
                label="Shared Accomodation"
                />
            </Form.Group>

            <FloatingLabel controlId="HargaTicket" label="Harga Tiket" className="mb-3">
                <Form.Control
                    type="Text"
                    placeholder="example"
                    controlId='HargaTicket'
                    value={Price}
                    name='Price'
                    onChange={handleChange}/>
            </FloatingLabel>
            
            <Form.Label>Bedroom</Form.Label>
            <Form.Select className="mb-3"
            aria-label="Default select example"
            name="Bedroom"
            onChange={handleChange}
            value={Bedrooms}>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
            </Form.Select>

            <Form.Label>Bathroom</Form.Label>
            <Form.Select className="mb-3"
            aria-label="Default select example"
            name="Bathroom"
            onChange={handleChange}
            value={Bathrooms}>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
            </Form.Select>

            <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Large file input example</Form.Label>
                <Form.Control type="file" name="Image" onChange={handleChange} size="lg" />
            </Form.Group>

            <div className="d-flex justify-content-center my-5">
            <Button type="submit" className="w-25 rounded bg-success mx-auto">
                Submit
            </Button>
            </div>
          </Form>
        </Container>
    )
}