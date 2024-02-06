import { Nav, Navbar } from 'react-bootstrap';
import logokopi from '../asset/logokopi.png';

function NavbarPages() {
    return (
        <>
            <Navbar expand="lg" variant="dark" className="NavStyle ">
                <Navbar.Brand href="#home">
                    <div className="d-flex align-items-center ms-5">
                        <img
                            src={logokopi}
                            alt="Logo"
                            style={{
                                height: "50px",
                                width: "auto",
                                marginRight: "10px",
                            }}
                        />
                        <span className="text-light fw-bold" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.5rem' }}>CoffeeShop</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="Nav ms-auto">
                        <Nav.Link className='home text-light' href="/">Home</Nav.Link>
                        <Nav.Link className='tentangkm text-light' href="/tentang">Tentang Kami</Nav.Link>
                        <Nav.Link className='menu text-light' href="/menu">Menu</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavbarPages;
