import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Login from "./components/Login";

export default function App() {
  return (
    <div>
      <Login />
      <br />
      <Header />
      <div>
        <Navbar />
      </div>
    </div>
  );
}
