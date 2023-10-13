import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import styles from '../components/css/groupbtn.module.css';
function Group() {

    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
      // Check if the clicked button is already active; if it is, deactivate it
      if (activeButton === buttonName) {
        setActiveButton(null);
      } else {
        // Activate the clicked button
        setActiveButton(buttonName);
      }
    };

  return (
    <ButtonGroup aria-label="Basic example">
    <Button 
        onClick={() => handleButtonClick('button1')}
        className={activeButton === 'button1' ? 'active' : ''}
      >
       Newest
      </Button>
      <Button 
        onClick={() => handleButtonClick('button2')}
        className={activeButton === 'button2' ? 'active' : ''}
      >
        Unanswered
      </Button>
  </ButtonGroup>
  )
}

export default Group