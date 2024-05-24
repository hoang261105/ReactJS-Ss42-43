import Button from "react-bootstrap/Button";

export default function Login() {
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <h1 className="font-bold text-3xl">Đăng nhập</h1> <br />
              {/* Email input */}
              <div data-mdb-input-init="" className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
              </div>
              {/* Password input */}
              <div data-mdb-input-init="" className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                {/* Checkbox */}
                <div className="form-check mb-0"></div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-primary btn-lg w-full"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold 3mx- mb-0">Or</p>
                </div>
                <Button variant="light" className="w-full">
                  Đăng ký
                </Button>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
