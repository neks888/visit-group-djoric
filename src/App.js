import "./App.css";
import React, { useState, useEffect } from "react";
import PetCard from "./components/PetCard";

function App() {
  const [currentStatus, setCurrentStatus] = useState("available");
  const [pets, setPets] = useState([]);
  const petStatus = ["available", "pending", "sold"];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://petstore.swagger.io/v2/pet/findByStatus?status=${currentStatus}`
        );
        const data = await response.json();
        const topFive = data.slice(0, 5);
        setPets(topFive);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentStatus]);
  return (
    <React.Fragment>
      <form style={{ width: "18rem", margin: "0 auto" }} className="form-group">
        <select
          className="form-control"
          onChange={(event) => setCurrentStatus(event.target.value)}
          value={currentStatus}
        >
          {petStatus.map((status) => (
            <option key={Math.random()} value={status}>
              {status}
            </option>
          ))}
        </select>
      </form>
      <div className="flex">
        {pets.map((pet) => (
          <PetCard key={Math.random()} pet={pet} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
