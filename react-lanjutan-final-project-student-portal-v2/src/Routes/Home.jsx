import { Link } from "react-router-dom";
import { Container, Button } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Container
        centerContent
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button as={Link} to="/student" data-testid="student-btn">
          All Student
        </Button>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
