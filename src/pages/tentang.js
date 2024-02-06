import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Tentang() {
    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.5,
                when: "afterChildren",
                staggerChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: -20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="landing-page mt-4"
        >
            <header className="header">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <motion.h1
                                variants={itemVariants}
                                className="welcome"
                            >
                                Selamat Datang di Coffee Shop
                            </motion.h1>
                            <motion.p
                                variants={itemVariants}
                                className="paragraf"
                            >
                                Temukan berbagai macam jenis kopi berkualitas tinggi dari berbagai belahan dunia. Setiap jenis kopi disajikan dengan perhatian khusus untuk memastikan rasa yang memanjakan lidah Anda. Selain kopi, coffee shop juga menyediakan berbagai pilihan makanan ringan dan minuman lainnya yang cocok untuk dinikmati bersama dengan secangkir kopi. Suasana yang nyaman dan santai di dalam coffee shop menjadi tempat yang ideal untuk bertemu teman, bekerja, atau sekadar bersantai sambil menikmati aroma kopi yang menggoda.
                            </motion.p>
                        </Col>
                        <Col md={6}>
                            <motion.img
                                variants={itemVariants}
                                src="https://img.freepik.com/free-photo/cup-coffee-with-roasted-coffee-beans_23-2150698823.jpg?t=st=1706960893~exp=1706964493~hmac=33c5bc1c8fd0402a9407809440d99fe0e7e9d9ea8845fcecad047e42a892107b&w=740"
                                alt="Kopi"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                </Container>
            </header>
        </motion.div>
    );
}

export default Tentang;
