import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import Count from '../Count/Count';


const NavBar = () => {
    return (
        <Navbar bg="warning" expand="lg">
        <Container fluid >
            <Navbar.Brand href="#">ScoobyDoo Pet Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Nosotros</Nav.Link>
                    <NavDropdown title="Productos" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Alimento Seco</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Alimento Húmedo</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Golosinas</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>Contacto</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control type="search" placeholder="Buscar..." className="me-2"aria-label="Search"/>
                    <Button variant="outline-success">🔍</Button>
                </Form>
                <Nav>
                    <CartWidget />
                    <Count />
                </Nav>

            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar