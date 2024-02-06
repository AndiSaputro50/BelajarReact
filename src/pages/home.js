import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Carousel, Button, Modal } from 'react-bootstrap';

function Home() {
    const [tampilan, setTampilan] = useState([])
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [selectedCoffee, setSelectedCoffee] = useState({});

    const getData = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };
        fetch("http://localhost:3030/home", requestOptions)
            .then((response) => response.json())
            .then((result) => setTampilan(result))
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getData();
    }, []);

    const handleShowDetailModal = (coffee) => {
        setSelectedCoffee(coffee);
        setShowDetailModal(true);
    };

    const handleCloseDetailModal = () => {
        setShowDetailModal(false);
    };

    const renderCoffeeCards = () => {
        return tampilan.map((isi, index) => (
            <Col key={index} className="my-3">
                <Card className="h-100 shadow-sm carousel-img custom-card" style={{ border: '2px solid #b3b1b1', borderRadius: '2px' }}>
                    <Card.Img variant="top" src={isi.image} />
                    <Card.Body>
                        <Card.Title>{isi.title}</Card.Title>
                        <Card.Text className="text-muted">{isi.description}</Card.Text>
                        <Button className='btn-custom' variant="secondary" onClick={() => handleShowDetailModal(isi)} style={{ backgroundColor: 'rgb(202, 144, 67)' }}>DETAIL</Button>
                    </Card.Body>
                </Card>
            </Col>
        ));
    };


    return (
        <div className="bg-light mt-2">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://img.freepik.com/free-photo/cup-coffee-with-roasted-coffee-beans_23-2150698823.jpg?t=st=1706960893~exp=1706964493~hmac=33c5bc1c8fd0402a9407809440d99fe0e7e9d9ea8845fcecad047e42a892107b&w=740"
                        alt="First slide"
                        style={{ maxHeight: '500px', objectFit: 'cover', borderRadius: '8px' }} // Menyesuaikan tinggi gambar
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://img.freepik.com/free-photo/cups-coffee-table_23-2148900627.jpg?w=900&t=st=1706940991~exp=1706941591~hmac=afe0d46eca861c1c5b9d59c791d3eaf624e312c790a50719454d0927d92ca7b9"
                        alt="Second slide"
                        style={{ maxHeight: '500px', objectFit: 'cover', borderRadius: '8px' }} // Menyesuaikan tinggi gambar
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://img.freepik.com/premium-photo/brickwalled-restaurant-with-wooden-tables_1134745-532.jpg?w=900"
                        alt="Third slide"
                        style={{ maxHeight: '500px', objectFit: 'cover', borderRadius: '8px' }} // Menyesuaikan tinggi gambar
                    />
                </Carousel.Item>
            </Carousel>
            <Container className="py-5">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {renderCoffeeCards()}
                </Row>
            </Container>

            <Modal show={showDetailModal} onHide={handleCloseDetailModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedCoffee.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={selectedCoffee.image} alt={selectedCoffee.title} style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
                    <p>{selectedCoffee.detail}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDetailModal}>TUTUP</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Home;
