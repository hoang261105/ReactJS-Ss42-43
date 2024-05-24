import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function B3() {
  return (
    <div className="flex gap-8">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://24hstore.vn/upload_images/images/SEO/macbook-air-13-inch-2018-01.jpg"
        />
        <Card.Body>
          <Card.Title>Macbook Air 2018</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Body className="flex gap-4 items-center">
            <Button variant="primary">Xem chi tiết</Button>
            <span>30.000.000</span>
          </Card.Body>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://24hstore.vn/upload_images/images/SEO/macbook-air-13-inch-2018-01.jpg"
        />
        <Card.Body>
          <Card.Title>Macbook Air 2018</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Body className="flex gap-4 items-center">
            <Button variant="primary">Xem chi tiết</Button>
            <span>30.000.000</span>
          </Card.Body>
        </Card.Body>
      </Card>
    </div>
  );
}
