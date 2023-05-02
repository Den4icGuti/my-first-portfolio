import styles from "./AddTodo.module.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";

import PropTypes from "prop-types";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

const AddTodo = ({ onCreate }) => {
  const notify = () => toast.warning("error");

  const name = useInputValue("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.value().trim() === "") {
      notify();
      return;
    } else {
      onCreate(name.value());
      name.clear();
    }
  };

  return (
    <form className={styles.addTodo} onSubmit={submitHandler}>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <input {...name.bind} />
      <button type="submit">Add todo</button>
    </form>
  );
};

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
