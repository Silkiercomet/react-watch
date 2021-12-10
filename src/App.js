import "./styles.css";
import GetTime from "./GetTime";
import { useState, useEffect } from "react";
export default function App() {
  const [time, setTime] = useState([]);
  let date = new Date(),
    hrs,
    min,
    sec;
  hrs = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();

  useEffect(() => {
    setTimeout(() => {
      setTime(() => [
        (hrs = date.getHours()),
        (min = date.getMinutes()),
        (sec = date.getSeconds())
      ]);
    }, 1000);
  });

  return (
    <div className="App">
      <h1>Magic Hour</h1>
      <GetTime hrs={hrs} min={min} sec={sec} />
    </div>
  );
}
