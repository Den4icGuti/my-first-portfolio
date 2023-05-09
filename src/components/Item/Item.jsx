import styles from "./Item.module.css";
import PropTypes from "prop-types";
import Context from "../../context";
import React, { useContext } from "react";

const Item = ({ bd, index, onChange }) => {
  const { removeUser } = useContext(Context);

  const classes = [];
  if (bd.remove) {
    classes.push("done");
  }
  return (
    <li className={styles.item}>
      <span className={classes.join("")}>
        <input
          className={styles.inputCheckbox}
          type="checkbox"
         
          checked={bd.remove}
          onChange={() => onChange(bd.id)}
        />
        <strong className={styles.idx}>{index + 1}</strong>
        {bd.name}
      </span>
      <button
        className={styles.btn}
        onClick={() => {
          removeUser(bd.id);
        }}
      >
        X
      </button>
    </li>
  );
};

Item.propTypes = {
  bd: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default Item;
