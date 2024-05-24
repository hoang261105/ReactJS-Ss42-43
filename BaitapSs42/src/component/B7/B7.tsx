import Toast from "react-bootstrap/Toast";

export default function B7() {
  return (
    <div>
      <Toast>
        <Toast.Header>
          <strong className="me-auto">Cảnh báo</strong>
        </Toast.Header>
        <Toast.Body>Lỗi kết nối máy chủ.</Toast.Body>
      </Toast>
    </div>
  );
}
