import React from "react";
import { Link } from "react-router-dom";
import people from "../assets/people.jpeg";
import planets from "../assets/planets.jpeg";
import movies from "../assets/movies.jpeg";
import { Container, Card, Image, SimpleGrid, Text, CardBody } from "@chakra-ui/react";

const Home = () => {
  return (
    //  Align the Container to middle vertically
    <Container>
      <SimpleGrid columns={3} spacing={2} marginTop={200}>
        <Card>
          <Link to="/star-wars/people">
            <CardBody>
              <Image src={people} />
              <Text fontSize="3xl">People</Text>
            </CardBody>
          </Link>
        </Card>
        <Card>
          <Link to="/star-wars/planets">
            <CardBody>
              <Image src={planets} />
              <Text fontSize="3xl">Planets</Text>
            </CardBody>
          </Link>
        </Card>
        <Card>
          <Link to="/star-wars/movies">
            <CardBody>
              <Image src={movies} />
              <Text fontSize="3xl">Movies</Text>
            </CardBody>
          </Link>
        </Card>
      </SimpleGrid>
    </Container>
  );
};

export default Home;
