import React, { useState } from "react";
import "./Modal.css";
import second from "../pic/second.png";
import SFloor from "./Floor/SFloor";
// import { useNavigate } from 'react-router-dom';

export default function Second() {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  // const [showNewPage, setShowNewPage] = useState(false);
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   setShowNewPage(true);
  //   navigate('/gfloor'); // Replace '/new-page' with the desired path
  // };

  const toggleModal = () => {
    setModal(!modal);

    // Update body class based on modal state
    document.body.classList.toggle('active-modal', modal);
  };

  const toggleModal1 = () => {
    setModal1(!modal1);

    // Update body class based on modal state
    document.body.classList.toggle('active-modal', modal1);
  };

  return (
    <div>
      <div className="DataView">
        <img src={second} alt="2nd" />
        <button onClick={toggleModal} className="btn-modal">
          Second Floor
        </button>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h5>Second Floor</h5>
            <table>
              <tr>
                <th>Total Room</th>
                <th>Suite Room</th>
                <th>Single Room</th>
              </tr>
              <tr>
                <td>20</td>
                <td>06</td>
                <td>08</td>
              </tr>
            </table>
            <div>
            <button className="Details" onClick={toggleModal1}>Room Details</button>
            
            <p className="close-modal" onClick={toggleModal}>X
            </p>
            </div>
            <p className="close-modal" onClick={toggleModal}>
              X
            </p>
            {modal1 && <SFloor />}
          </div>
          
        </div>
      )}
      
    </div>
  );
}