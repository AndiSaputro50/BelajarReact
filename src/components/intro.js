function Intro(props) {
    return (
        <>
        <p><strong style={{fontSize:"20px", fontFamily:"serif"}}>Nama Saya:</strong> {props.nama}</p>
        <p><strong style={{fontSize:"20px", fontFamily:"serif"}}>Sekolah:</strong> {props.sekolah}</p>
        <p><strong style={{fontSize:"20px", fontFamily:"serif"}}>Kelas:</strong> {props.kelas}</p>
        </>
    );
}

export default Intro;