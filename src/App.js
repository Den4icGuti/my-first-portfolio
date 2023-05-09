import React, { useEffect } from "react";
import { useState } from "react";
import ListItem from "./components/ListItem/ListItem";
import Context from "./context";
import { nanoid } from "nanoid";
import Loader from "./Loader";
import Modal from "./modal/Modal";

const AddTodo = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./Add todo/AddTodo")));
    }, 3000)
);

function App() {
  const [bd, setBd] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=2")
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
        <React.Suspense fallback={<Loader />}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {loading && <Loader />}

        {bd.length ? (
          <ListItem bd={bd} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>No todo</p>
        )}
        <Modal />
      </div>
    </Context.Provider>
  );
}

export default App;
