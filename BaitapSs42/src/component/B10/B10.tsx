import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function B10() {
  return (
    <Table responsive="sm">
      <thead>
        <tr>
          <th>STT</th>
          <th>Họ và tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>EmailTable heading</th>
          <th>Địa chỉ</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Nguyễn Văn A</td>
          <td>Nam</td>
          <td>01/01/1980</td>
          <td>nguyenvana@gmail.com</td>
          <td>Hà Nội</td>
          <td>
            <Button variant="warning">Sửa</Button>{" "}
            <Button variant="danger">Xóa</Button>{" "}
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Nguyễn Văn A</td>
          <td>Nam</td>
          <td>01/01/1980</td>
          <td>nguyenvana@gmail.com</td>
          <td>Hà Nội</td>
          <td>
            <Button variant="warning">Sửa</Button>{" "}
            <Button variant="danger">Xóa</Button>{" "}
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Nguyễn Văn A</td>
          <td>Nam</td>
          <td>01/01/1980</td>
          <td>nguyenvana@gmail.com</td>
          <td>Hà Nội</td>
          <td>
            <Button variant="warning">Sửa</Button>{" "}
            <Button variant="danger">Xóa</Button>{" "}
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Nguyễn Văn A</td>
          <td>Nam</td>
          <td>01/01/1980</td>
          <td>nguyenvana@gmail.com</td>
          <td>Hà Nội</td>
          <td>
            <Button variant="warning">Sửa</Button>{" "}
            <Button variant="danger">Xóa</Button>{" "}
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Nguyễn Văn A</td>
          <td>Nam</td>
          <td>01/01/1980</td>
          <td>nguyenvana@gmail.com</td>
          <td>Hà Nội</td>
          <td>
            <Button variant="warning">Sửa</Button>{" "}
            <Button variant="danger">Xóa</Button>{" "}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
