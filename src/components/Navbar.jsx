import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#222",
      }}
    >
      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
        Home
      </Link>

      <Link to="/cart" style={{ color: "#fff", textDecoration: "none" }}>
        Cart
      </Link>
    </nav>
  );
}

export default Navbar;
