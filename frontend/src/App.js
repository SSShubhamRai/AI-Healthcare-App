import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("https://your-backend.onrender.com/predict", { symptoms });
      setResult(data);
    } catch (error) {
      console.error("Error fetching prediction", error);
    }
  };

  return (
    <div>
      <h1>AI Healthcare Predictor</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter symptoms" value={symptoms} onChange={(e) => setSymptoms(e.target.value)} />
        <button type="submit">Predict</button>
      </form>
      {result && <p>Predicted Disease: {result.disease}</p>}
    </div>
  );
};

export default App;
