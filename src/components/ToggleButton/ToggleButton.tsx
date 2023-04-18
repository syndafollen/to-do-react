import React from "react";
import { ToggleIcon } from "././ToggleIcon";
import styles from "./ToggleButton.module.css";



export const ToggleButton = ({ handleToggle }) => {
  return (
    <button
      id="toggle"
      className={styles.doneBtn}
      //className="doneBtn"
      // className={`${styles.addBtn} ${styles.addDisabled}`}
      onClick={handleToggle}
    >
      <ToggleIcon h="20" w="20" />
    </button>
  );
};
