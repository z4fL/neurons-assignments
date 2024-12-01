import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/student");
  };

  return (
    <div
      style={{
        marginTop: "200px",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={handleClick}
        data-testid="student-btn"
        style={{
          display: "inline-block",
          textDecoration: "none",
          padding: "10px 20px",
          backgroundColor: "#020617",
          color: "white",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        All Student
      </button>
    </div>
  );
};

export default Home;
