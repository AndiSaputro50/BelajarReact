function List() {
    // const cars = ['BMW', 'Supra', 'Ferrari'];
    const data = [
        { Nama: "Andi", Username: "Andi Saputro", Email: "andi@gmail.com" },
        { Nama: "Wahyu", Username: "Andi Saputro", Email: "andi@gmail.com" },
        { Nama: "Andi", Username: "Andi Saputro", Email: "andi@gmail.com" },
    ]
    return (
        <div className="table">
            <table border="2">
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
                {data.map((data, nomor) => {
                    return (
                        <tr nomor={nomor}>
                            <td>{nomor + 1}</td>
                            <td>{data.Nama}</td>
                            <td>{data.Username}</td>
                            <td>{data.Email}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default List;