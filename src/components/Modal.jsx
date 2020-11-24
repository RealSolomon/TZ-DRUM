import React from 'react'
import './modal.scss'

function Modal (content) {
    function refreshPage() {
        window.location.reload(false);
      };
    const msg = `Winner is : ` + JSON.stringify(content).slice(12, -2)
    return (
        <div className="modal">
            <h1>MODAL</h1>
            <div className="modal-content">{msg}</div>
            <button className="btn" onClick = {()=>refreshPage()}>Начать новую игру!!!</button>
        </div>
    )
}
export default Modal