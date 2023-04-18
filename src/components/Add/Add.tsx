import { useState, useEffect } from "react";
import styles from "./Add.module.css";
import { AddIcon } from "../AddIcon";
import { AddProps } from "./types";

export const Add = ({ handleChange, inputValue, handleAddTodo }: AddProps) => (
  <div className={styles.wrapper}>
    <input
      type="text"
      className={styles.add}
      placeholder="Add new todo"
      id="input"
      onChange={handleChange}
      value={inputValue}
    />
    <button
      id="confirm"
      className={`${styles.addBtn} ${styles.addDisabled}`}
      onClick={handleAddTodo}
    >
      <AddIcon h="35" w="35" />
    </button>
  </div>
);
