import React from "react";

import styles from "./modal.module.css";

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })}>
          Open Modal
        </button>

        {this.state.isOpen && (
          <div className={styles.modal}>
            <div className={styles.modalbody}>
              <h2>Modal Title</h2>

              <span>Hello, welcome to learn React</span>

              <button onClick={() => this.setState({ isOpen: false })}>
                Close modal
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
