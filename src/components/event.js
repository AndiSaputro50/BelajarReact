import React from 'react'

function event() {

    const handleClick = () => {
        alert("Berhasil!!!");
    };

    return (
        <div>
            <button onClick={handleClick}>Click Here</button>
        </div>
    )
}

export default event