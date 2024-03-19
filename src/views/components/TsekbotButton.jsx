import React from 'react'
import tsekbotLogo from './tsekbotLogo.png';
import { useNavigate } from 'react-router-dom';



const TsekbotButton = () => {

    const navigate = useNavigate();

    const handleOnclickTsekbot = () => {
        navigate('/tsekbot');
    }

    return (

        <>
            <div className="fab-container">
                <button className="fab"><img src={tsekbotLogo} alt="" onClick={handleOnclickTsekbot} /></button>
            </div>


            {/* <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog> */}

        </>
    )
}

export default TsekbotButton
