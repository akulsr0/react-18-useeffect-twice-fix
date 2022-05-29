import { useState } from "react";
import { useOnceEffect } from "./useEffect";
import "./styles.css";

export default function App() {
  const [persons, setPersons] = useState([]);
  const [n, setN] = useState(5);

  useOnceEffect(() => {
    fetch(`https://randomuser.me/api?results=${n}`)
      .then((res) => res.json())
      .then(({ results }) => {
        console.log(results);
        setPersons(results);
      });
  }, [n]);

  return (
    <div className="App">
      <h1>{n}</h1>
      <button onClick={() => setN(n - 1)}>-</button>
      <button onClick={() => setN(n + 1)}>+</button>
      {persons.map((p) => (
        <h3 key={p.email}>{p.name.first}</h3>
      ))}
    </div>
  );
}
