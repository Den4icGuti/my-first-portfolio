import React, { useEffect } from "react";
import { useState } from "react";
import ListItem from "./components/ListItem/ListItem";
import Context from "./context";
import AddTodo from "./Add todo/AddTodo";
import { nanoid } from "nanoid";
import Loader from "./Loader";

function App() {
  const [bd, setBd] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=4")
      .then((response) => response.json())
      .then((bd) => {
        setTimeout(() => {
          setBd(bd);
          setLoading(false);
        }, 2000);
      });
  }, []);

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
    const newUser = { id: nanoid(), name, remove: false };
    setBd(bd.concat(newUser));

    localStorage.setItem("newUser", JSON.stringify(bd));
  };

  return (
    <Context.Provider value={{ removeUser }}>
      <div className="wrapper">
        <h3>React tutorial</h3>
        <AddTodo onCreate={addTodo} />

        {loading && <Loader />}

        {bd.length ? (
          <ListItem bd={bd} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>No todo</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
