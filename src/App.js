import { useState } from "react";
import { useTheEffect } from "./useEffect";
import "./styles.css";

export default function App() {
  const [persons, setPersons] = useState([]);

  useTheEffect(() => {
    fetch("https://randomuser.me/api?results=10")
      .then((res) => res.json())
      .then(({ results }) => {
        console.log(results);
        setPersons(results);
      });
  }, []);

  return (
    <div className="App">
      {persons.map((p) => (
        <h3 key={p.email}>{p.name.first}</h3>
      ))}
    </div>
  );
}
