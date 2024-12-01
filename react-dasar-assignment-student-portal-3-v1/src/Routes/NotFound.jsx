import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
        <h2>404 | Not Found</h2>
      <button onClick={() => navigate(-1)} data-testid="back">Take Me Back</button>
    </div>
  );
};

export default NotFound;
