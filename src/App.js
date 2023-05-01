import React from "react";
import { useState } from "react";
import ListItem from "./components/ListItem/ListItem";
import Context from "./context";
import AddTodo from "./Add todo/AddTodo";
import { nanoid } from "nanoid";

function App() {
  const [bd, setBd] = useState([]);

  const toggleTodo = (id) => {
    setBd(
      bd.map((bd) => {
        if (bd.id === id) {
          bd.remove = !bd.remove;
        }
        return bd;
      })
    );
  };

  const removeUser = (id) => {
    setBd(bd.filter((bd) => bd.id !== id));
  };

  const addTodo = (name) => {
    const newUser = { id: nanoid(4), name, remove: false };
    setBd(bd.concat([newUser]));
    localStorage.setItem("", JSON.stringify(bd));
  };

  return (
    <Context.Provider value={{ removeUser }}>
      <div className="wrapper">
        <h3>React tutorial</h3>
        <AddTodo onCreate={addTodo} />

        {bd.length ? (
          <ListItem bd={bd} onToggle={toggleTodo} />
        ) : (
          <p>No todo</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
