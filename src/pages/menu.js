import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

function Menu() {
    const [barang, setBarang] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCoffee, setSelectedCoffee] = useState({});

    const getData = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };
        fetch("http://localhost:3030/menu", requestOptions)
        .then((response) => response.json())
        .then((result) => setBarang(result))
        .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getData();
    }, []);

    const handleShowModal = (selectedBarang) => {
        setSelectedCoffee(selectedBarang);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="d-flex flex-wrap justify-content-around">
            {barang.map((barang, index) => (
                <Card key={index} style={{ width: '18rem', margin: '10px', border: '2px solid #b3b1b1', borderRadius: '2px' }}>
                    <Card.Img variant="top" src={barang.image} />
                    <Card.Body>
                        <Card.Title>{barang.nama}</Card.Title>
                        <Card.Text>
                            Harga: {barang.harga}
                        </Card.Text>
                        <Button className='btn-custom' variant="secondary" onClick={() => handleShowModal(barang)} style={{ backgroundColor: 'rgb(202, 144, 67)' }}>DETAIL</Button>
                    </Card.Body>
                </Card>
            ))}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedCoffee.nama}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={selectedCoffee.image} alt={selectedCoffee.nama} style={{ width: '100%' }} />
                    <p>{selectedCoffee.detail}</p>
                    <p>Harga: {selectedCoffee.harga}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Menu;
