import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignUp() {
  return (
       <Form className="pete">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Enter a valid email address.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign Up!
      </Button>
    </Form>
  );
}

export default SignUp;