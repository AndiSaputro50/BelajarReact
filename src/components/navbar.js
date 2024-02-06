import { Container, Nav, Navbar } from 'react-bootstrap';

function NavbarComponents() {
    return (
        <Navbar expand="lg" variant="dark" className="NavStyle">
            <Container>
                <Navbar.Brand href="#home">
                    <div className="d-flex align-items-center">
                        <img
                            src="https://png.pngtree.com/png-vector/20210913/ourlarge/pngtree-cup-coffee-logo-png-image_3926940.jpg"
                            alt="Coffee Logo"
                            style={{
                                height: "40px",
                                marginRight: "10px",
                            }}
                        />
                        <span className="text-light fw-bold">Kopi Cemara</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/tugas">Tugas</Nav.Link>
                        <Nav.Link href="/tugas2">Tugas 2</Nav.Link>
                        <Nav.Link href="/data_diri">Makanan</Nav.Link>
                        <Nav.Link href="#link">Tentang Kami</Nav.Link>
                        <Nav.Link href="#link">Daftar Kopi</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponents;
