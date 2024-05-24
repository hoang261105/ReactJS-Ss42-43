import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export default function B9() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="place-content-center"
    >
      <h1 className=" text-3xl font-bold">Đăng ký tài khoản</h1> <br />
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nhập email"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom02">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nhập mật khẩu"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Họ và tên</Form.Label>
          <Form.Control type="text" placeholder="Nhập họ và tên" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Địa chỉ</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ví dụ: Thanh Xuân, Hà Nội"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label>Thành phố</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Hà Nội</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustom02">
          <Form.Label>Quận</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Thanh Xuân</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustom02">
          <Form.Label>Mã bưu điện</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nhập mã bưu điện"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit" className="w-52">
        Submit
      </Button>
    </Form>
  );
}
