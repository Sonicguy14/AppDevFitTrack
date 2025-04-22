import { useState } from "react";
import useLocalStorage from "./useLocalStorage"; // Import the custom hook
import HistoryList from "./HistoryList"; // Import the HistoryList component

const FormSection = ({ title, placeholder, inputType, keyName, endpoint }) => {
  const [inputValue, setInputValue] = useState("");
  const [history, updateHistory] = useLocalStorage(keyName, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    // Create the new entry to store in local storage and send to API
    const newEntry = {
      id: Date.now(),
      value: inputType === "number" ? parseFloat(inputValue) : inputValue,
      date: new Date().toLocaleDateString(),
    };

    // Update local storage immediately
    updateHistory(newEntry);
    setInputValue(""); // Reset input field after saving to local storage

    // Send data to the backend API
    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEntry),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Goal added successfully", data);
        } else {
          console.error("Error adding goal", response);
        }
      } catch (error) {
        console.error("Error sending request", error);
      }
    }
  };

  return (
    <div className="dashboard-section">
      <h2 className="section-title">{title}</h2>
      <form onSubmit={handleSubmit} className="dashboard-form">
        <input
          type={inputType}
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
      <HistoryList history={history} /> {/* Reuse HistoryList component */}
    </div>
  );
};

export default FormSection;
