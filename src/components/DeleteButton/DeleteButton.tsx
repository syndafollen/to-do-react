import React from 'react'
import styles from './DeleteButton.module.css'
import { DeleteIcon } from "./DeleteIcon";


export const DeleteButton = ({ handleDelete }) => {
  return (
    <button
      id="delete"
      className={styles.delBtn}
      // className={`${styles.addBtn} ${styles.addDisabled}`}
      onClick={handleDelete}
    >
      <DeleteIcon h="30" w="30"/>
    </button>
  )
}