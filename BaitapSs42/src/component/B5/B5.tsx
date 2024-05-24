import Alert from "react-bootstrap/Alert";

export default function B5() {
  return (
    <div>
      {["success", "danger", "warning"].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </div>
  );
}
