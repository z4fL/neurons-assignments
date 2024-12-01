import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const NavBar = () => {
return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <ChakraLink as={ReactRouterLink} to="/" data-testid="home-page">
            Student Portal
        </ChakraLink>
        <div style={{ display: 'flex', gap: '1rem' }}>
            <ChakraLink
                as={ReactRouterLink}
                to="/student"
                data-testid="student-page"
            >
                All Student
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/add" data-testid="add-page">
                Add Student
            </ChakraLink>
        </div>
    </nav>
);
};

export default NavBar;
