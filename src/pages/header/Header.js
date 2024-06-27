import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import "./Header.css"


const Header=()=>{
    return(
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand to="/"><strong>Dr. Jayanta Mondal</strong></Navbar.Brand>
                    <Nav.Link as={Link} to="/notes" className="nav-link"> <input type="text" placeholder="Search.."/></Nav.Link>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" className="nav-link">Articles</Nav.Link>
                        <Nav.Link as={Link} to="/article" className="nav-link">Post Article</Nav.Link>
                        <Nav.Link as={Link} to="/notes" className="nav-link">Notes</Nav.Link>
                        
                        <Nav.Link as={Link} to="/notes" className="nav-link">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
        </>
    )
}

export default Header;