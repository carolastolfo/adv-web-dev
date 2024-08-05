import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Register() {
  return (
    
    <Form style={{marginLeft: '0.8rem', marginRight: '0.8rem'}}>

    <Form.Group className="mb-3" controlId="formGridFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control placeholder="Your first name here" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control placeholder="Your last name here" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Button href="/success" variant="primary" type="submit">  
      {/* this href gets rid of the bootstrap validations. I checked to see how to do this using Router 
      but it would conflct with bootstrap styling if i used Link instead of Button
      StackOverflow has a post suggesting the hook useNavigate */}
        Submit
      </Button>
    </Form>
  );
}
