import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';

const Color = () => {
    const [clr, setClr] = useState("")

    const getOriginalColor = () => {
        alert("Background has been removed!")
        setClr("")
    }

    //Random Hex color generate
    const generateHexColor = () => {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    // const generateHexColor = () => {    // other way to genrate color code
    //     return `#${Math.floor(100000+Math.random()*900000).toString()}`

    //   }


    const updateRandomColor = () => {
        setClr(generateHexColor())
    }



    return (
        <div style={{ height: "90vh", backgroundColor: clr }}>
            <div className='text-center' style={{ display: "flex", justifyContent: "center", gap: "2px" }}>

                <MDBBtn className='mt-2' rounded size='sm' onClick={() => setClr("red")} onDoubleClick={getOriginalColor}>Red</MDBBtn>
                <MDBBtn className='mt-2' rounded size='sm' onClick={() => setClr("green")} onDoubleClick={getOriginalColor}>Green</MDBBtn>
                <MDBBtn className='mt-2' rounded size='sm' onClick={() => setClr("blue")} onDoubleClick={getOriginalColor}>Blue</MDBBtn>

            </div>
            <div className='text-center mt-2'>
                <MDBBtn rounded size='sm' className='text-center' onClick={updateRandomColor}>Random Color</MDBBtn>
            </div>

        </div>
    )
}

export default Color
