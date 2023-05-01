import Item from "../Item/Item";
import styles from "./ListItem.module.css";
import PropTypes from "prop-types";

const ListItem = (props) => {
  return (
    <div className={styles.boxList}>
      <ul>
        {props.bd.map((bd, index) => {
          return (
            <Item key={bd.id} bd={bd} index={index} onChange={props.onToggle} />
          );
        })}
      </ul>
    </div>
  );
};

ListItem.propTypes = {
  bd: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number,
  onToggle: PropTypes.func.isRequired,
};

export default ListItem;
