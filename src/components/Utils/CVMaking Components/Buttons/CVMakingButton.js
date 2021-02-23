import React from 'react';
import './CVMakingButton.css'
const CVMakingButton = ({ name }) => {
    return (
        <div>
            <button
                className={name === "Back" ? "CVMakingButtonBack CVMakingButton" : "CVMakingButtonNext CVMakingButton"}
            >{name}</button>
        </div>
    );
}

export default CVMakingButton;