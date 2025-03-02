import { useState } from "react";
import "./index.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsopen] = useState(true);

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  function handlePrevious() {
    if (step <= 1) return;
    setStep(step - 1);
  }

  function handleNext() {
    if (step >= 3) return;
    setStep(step + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsopen(!isOpen)}>
        x
      </button>{" "}
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}{" "}
          </p>
          <div className="buttons">
            <button
              style={{ color: "white", backgroundColor: "blue" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ color: "white", backgroundColor: "blue" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
