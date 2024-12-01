import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "30px 0"
      }}
    >
      <Link to="/" data-testid="home-page">
        Student Portal
      </Link>
      <div>
        <Link to="/student" data-testid="student-page">
          All Student
        </Link>
        <Link to="/add" data-testid="add-page">
          Add Student
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
