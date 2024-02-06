import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';

function Tugas() {
    // Data untuk daftar kopi
    const coffeeData = [
        { name: "Kopi Arabika", description: "Kopi dengan cita rasa yang khas dan aroma yang harum.", image: "https://asset.kompas.com/crops/4fP8U62oSLmw8KRY3058k0dIzYU=/0x46:1000x712/750x500/data/photo/2019/10/29/5db817bc7275a.jpg" },
        { name: "Kopi Luwak", description: "Kopi yang diproses melalui pencernaan hewan luwak, memberikan rasa yang unik dan halus.", image: "https://www.blibli.com/friends-backend/wp-content/uploads/2023/02/B200136-cover-manfaat-kopi-luwak-scaled.jpg" },
        { name: "Kopi Robusta", description: "Kopi dengan kekuatan rasa yang tinggi dan kadar kafein yang lebih tinggi.", image: "https://rimbakita.com/wp-content/uploads/2019/03/biji-kopi-robusta.jpg" }
    ];

    return (
        <div className="landing-page">
            <header className="header mt-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1 className="welcome">Selamat Datang di Kopi Cemara</h1>
                            <p>Temukan berbagai macam kopi berkualitas tinggi dari seluruh dunia, Rasanya dijamin memanjakan mulut anda</p>
                        </Col>
                        <Col md={6}>
                            <img src="https://img.freepik.com/premium-photo/cups-coffee-cones-pine-branch_155165-12930.jpg?w=740" alt="Kopi" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </header>
            <section className="section mt-5">
                <Container>
                    <h2 className="daftarkopi">Daftar Kopi :</h2>
                    <Row>
                        {coffeeData.map((coffee, index) => (
                            <Col md={4} key={index} className="mb-4">
                                <Card>
                                    <Card.Img variant="top" src={coffee.image} alt={coffee.name} />
                                    <Card.Body>
                                        <Card.Title>{coffee.name}</Card.Title>
                                        <Card.Text>{coffee.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <footer className="footer mt-5 py-3 text-center bg-dark text-light">
                <Container>
                    <p>&copy; 2024 Kopi Cemara. All rights reserved.</p>
                </Container>
            </footer>
        </div>
    );
}

export default Tugas;
