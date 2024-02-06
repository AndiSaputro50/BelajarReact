import React from "react";

function Tugas() {
    const makanans = [
        {
            nama: "Bakso",
            harga: 8000,
        },
        {
            nama: "Sate Ayam",
            harga: 15000,
        },
        {
            nama: "Ayam Geprek",
            harga: 15000,
        },
        {
            nama: "Es Teh",
            harga: 3000,
        },
    ];

    const total_bayar = makanans.reduce((total_bayar, makanan) => total_bayar + makanan.harga, 0);

    const tableStyle = {
        border: "2px solid #000",
        borderCollapse: "collapse",
        width: "100%",
    };

    const thStyle = {
        border: "2px solid #000",
        textAlign: "left",
        padding: "8px", // Updated padding
    };

    const tdStyle = {
        border: "2px solid #000",
        textAlign: "left",
        padding: "8px", // Updated padding
    };

    const h2Style = {
        fontFamily: "Poopins", // Updated font family
    }

    const h1style = {
        fontFamily: "Poopins", // Updated font family
    }

    return (
        <div style={{ padding: "50px" }}>
            <h2 style={h2Style}>Daftar Makanan & Minuman:</h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>No</th>
                        <th style={thStyle}>Nama Makanan</th>
                        <th style={thStyle}>Harga</th>
                    </tr>
                </thead>
                <tbody>
                    {makanans.map((makanan, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{index + 1}</td>
                            <td style={tdStyle}>{makanan.nama}</td>
                            <td style={tdStyle}>{makanan.harga}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />

            <h2 style={h2Style}>Daftar Makanan & Minuman Di Bawah Rp10.000</h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>No</th>
                        <th style={thStyle}>Nama Makanan</th>
                        <th style={thStyle}>Harga</th>
                    </tr>
                </thead>
                <tbody>
                    {makanans
                        .filter((makanan) => makanan.harga < 11000)
                        .map((makanan, index) => (
                            <tr key={index}>
                                <td style={tdStyle}>{index + 1}</td>
                                <td style={tdStyle}>{makanan.nama}</td>
                                <td style={tdStyle}>{makanan.harga}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <h1 style={h1style}>Total Harga Makanan & Minuman: {total_bayar}</h1>
        </div>
    );
}

export default Tugas;
