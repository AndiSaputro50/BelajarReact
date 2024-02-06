import React, { useState } from 'react';
import { Container, Row, Col, Card, Carousel, Button, Modal } from 'react-bootstrap';

const coffeeData = [
    {
        title: "Kopi Arabika",
        image: "https://www.specialtycoffee.co.id/wp-content/uploads/2014/01/kaffee_arabica1.jpg",
        description: "Kopi Arabika dikenal dengan cita rasa yang khas dan aroma yang harum. Keistimewaannya terletak pada tingkat keasaman yang seimbang dan kompleksitas rasanya.",
        detail: "Kopi Arabika berasal dari biji kopi Arabika yang ditanam di dataran tinggi dengan suhu yang sejuk. Proses pemanggangan biji kopi ini biasanya lebih ringan dibandingkan dengan jenis kopi lainnya, sehingga menghasilkan cita rasa yang lebih ringan dan aroma yang lebih halus."
    },
    {
        title: "Kopi Robusta",
        image: "https://rimbakita.com/wp-content/uploads/2019/03/biji-kopi-robusta.jpg",
        description: "Kopi Robusta memiliki rasa yang lebih kuat dan pahit daripada Arabika. Keistimewaannya terletak pada kandungan kafein yang tinggi dan tekstur yang kental.",
        detail: "Kopi Robusta ditanam di dataran rendah dengan iklim yang lebih panas dan lembab. Biji kopi ini memiliki kandungan kafein yang lebih tinggi daripada Arabika, sehingga memberikan rasa yang lebih kuat dan pahit."
    },
    {
        title: "Kopi Luwak",
        image: "https://www.blibli.com/friends-backend/wp-content/uploads/2023/02/B200136-cover-manfaat-kopi-luwak-scaled.jpg",
        description: "Kopi Luwak adalah salah satu jenis kopi termahal di dunia yang dihasilkan dari biji kopi yang telah dicerna oleh musang luwak. Keistimewaannya terletak pada rasa yang halus dan aroma yang lembut.",
        detail: "Kopi Luwak dikenal sebagai kopi yang diproses melalui pencernaan musang luwak. Proses ini membuat biji kopi mengalami fermentasi alami yang memberikan cita rasa yang unik. Meskipun harganya tinggi, namun minuman ini memiliki penggemar yang loyal karena keistimewaannya."
    },
    {
        title: "Kopi Toraja",
        image: "https://thumb.viva.id/intipseleb/1265x711/2023/05/08/645919939d209-kopi.jpg",
        description: "Kopi Toraja dikenal dengan rasa yang kaya dan kompleks serta aroma yang kuat. Keistimewaannya terletak pada proses pengolahan yang tradisional dan kualitas biji kopi yang unggul.",
        detail: "Kopi Toraja berasal dari daerah Toraja di Sulawesi Selatan, Indonesia. Proses pengolahannya menggunakan metode kering atau basah secara tradisional. Hal ini memberikan cita rasa yang kaya dengan sentuhan rempah-rempah dan coklat, serta aroma yang kuat dan memikat."
    },
    {
        title: "Kopi Liberika",
        image: "https://cdn0-production-images-kly.akamaized.net/jpGN7v1uiH82ZTCOVHwwH8ugtbg=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4258081/original/005590100_1670825205-coffee-6939520__340.jpg",
        description: "Kopi Liberika memiliki cita rasa yang unik dan berbeda dari jenis kopi lainnya. Keistimewaannya terletak pada bentuk buah kopi yang berbeda dan profil rasa yang beragam.",
        detail: "Kopi Liberika dikenal sebagai varietas kopi yang langka. Buah kopi yang dihasilkan berbentuk lonjong, berbeda dengan buah kopi Arabika atau Robusta. Rasa kopi ini memiliki karakter yang unik, dengan aroma yang kompleks dan cita rasa yang beragam, mulai dari manis, asam, hingga pahit."
    },
    {
        title: "Kopi Hitam",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhJbQuRKnXWmqqGJHFfIKchk9LrhhPW9t3A&usqp=CAU",
        description: "Kopi Hitam adalah minuman kopi yang disajikan tanpa tambahan susu atau gula. Keistimewaannya terletak pada kekuatan rasa dan aroma khas kopi yang murni.",
        detail: "Kopi Hitam dikenal sebagai minuman kopi murni tanpa campuran susu atau gula. Hal ini membuatnya memiliki rasa yang lebih pekat dan kuat. Kopi ini biasanya disajikan dalam berbagai varian seperti espresso, americano, atau black coffee."
    },
    // Tambahkan data card kopi lainnya di sini
];

function Home() {
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [selectedCoffee, setSelectedCoffee] = useState({});

    const handleShowDetailModal = (coffee) => {
        setSelectedCoffee(coffee);
        setShowDetailModal(true);
    };

    const handleCloseDetailModal = () => {
        setShowDetailModal(false);
    };

    const renderCoffeeCards = () => {
        return coffeeData.map((coffee, index) => (
            <Col key={index} className="my-3">
                <Card className="h-100 shadow-sm carousel-img custom-card" style={{ border: '2px solid #b3b1b1', borderRadius: '2px' }}>
                    <Card.Img variant="top" src={coffee.image} />
                    <Card.Body>
                        <Card.Title>{coffee.title}</Card.Title>
                        <Card.Text className="text-muted">{coffee.description}</Card.Text>
                        <Button className='btn-custom' variant="secondary" onClick={() => handleShowDetailModal(coffee)} style={{ backgroundColor: 'rgb(202, 144, 67)' }}>DETAIL</Button>
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
