import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function B2() {
  return (
    <div>
      <InputGroup size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Input cỡ lớn"
        />
      </InputGroup>
      <br />
      <InputGroup size="sm" className="mb-3">
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Input cỡ vừa"
        />
      </InputGroup>
      <br />
      <InputGroup size="sm" className="mb-3">
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Input cỡ nhỏ"
        />
      </InputGroup>
    </div>
  );
}
