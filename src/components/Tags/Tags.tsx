import React, { useState, ChangeEvent } from "react";
import styles from "./Tags.module.css";
import { TagsProps } from "./types";

export const Tags = ({ handleChange, tags }: TagsProps) => {
  return (
    <div>
      <div className={styles.tag}>
        <label htmlFor="food">Food</label>
        <input type="checkbox"  defaultChecked={false} name="food" onChange={handleChange} />
        <label htmlFor="chores">Chores</label>
        <input type="checkbox"  defaultChecked={false} name="chores" onChange={handleChange} />
      </div>
    </div>
  );
};
