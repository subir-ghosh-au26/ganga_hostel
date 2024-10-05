import React, { useState } from "react";
import "./Modal.css";
import ground from "../pic/ground.png";
import GFloor from "./Floor/GFloor";
// import { useNavigate } from 'react-router-dom';

export default function Ground() {
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
        <img src={ground} alt="2nd" />
        <button onClick={toggleModal} className="btn-modal">
          Ground Floor
        </button>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h5>Ground Floor</h5>
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
            <div>
            <button className="Details" onClick={toggleModal1}>Room Details</button>
            
            <p className="close-modal" onClick={toggleModal}>X
            </p>
            </div>
            <p className="close-modal" onClick={toggleModal}>
              X
            </p>
            {modal1 && <GFloor />}
          </div>
          
        </div>
      )}
      
    </div>
  );
}