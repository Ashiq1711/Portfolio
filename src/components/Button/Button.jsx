import React from 'react'
import './Button.css'
import ProgressButton from "react-progress-button"
const Button = () => {
    const [buttonState, setButtonState] = useState("")
    const handleClick = () => {
        setButtonState("loading"); // Start the loading state
        setTimeout(() => {
          setButtonState("success"); // Transition to success after some time
        }, 2000);
      };
  return (
    <div>
    <ProgressButton onClick={handleClick} state={buttonState}>
      Submit
    </ProgressButton>
  </div>
  )
}

export default Button