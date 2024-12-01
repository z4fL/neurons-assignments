import { useNavigate } from "react-router-dom";
import { Button} from "@chakra-ui/react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h2>404 | Not Found</h2>
        <Button onClick={() => navigate(-1)} data-testid="back" className="test-button">
          Take Me Back
        </Button>
      </div>
    </>
  );
};

export default NotFound;
