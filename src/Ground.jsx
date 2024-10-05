import React, { useState } from "react";
import "./Modal.css";
import second from "./pic/second.png"

export default function Ground() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <children>
      <div className="DataView">
      <img src={second} alt="2nd" />
      <button onClick={toggleModal} className="btn-modal">
        Ground Floor
      </button>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h4>Ground Floor</h4>
            <table>
              <tr>
                <th>Total Room</th>
                <th>Suite Room</th>
                <th>Single Room</th>
              </tr>
              <tr>
                <td>24</td>
                <td>08</td>
                <td>08</td>
              </tr>
            </table>
            <p className="close-modal" onClick={toggleModal}>
              X
            </p>
          </div>
        </div>
      )}
    </children>
  );
}