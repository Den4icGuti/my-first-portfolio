import React from "react";
import { nanoid } from "nanoid";
import { Container } from "./components/container";
const bd = [
  { id: nanoid(), name: "Jack", email: "jk@gmail.com", phone: "11458744" },
  { id: nanoid(), name: "Max", email: "mx@gmail.com", phone: "1741225" },
];

console.log(bd);
function App() {
  return (
    <div>
      <Container />
    </div>
  );
}

export default App;
