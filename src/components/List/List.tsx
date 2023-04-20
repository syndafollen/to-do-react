import styles from "./List.module.css";
import { ToggleButton } from "../ToggleButton";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { ListProps } from "./types";
import { TodoType } from "../../types";

export const List = ({
  todos = [],
  searchInputValue,
  handleToggle,
  handleDelete,
  handleTagClick,
}: ListProps) => (
  <ul className={styles.list}>
    {todos.map(({ text, id, done, tags }) => {
      return (
        <li key={id}>
          <div>
            <span className={done ? styles.done : undefined}>{text}</span>
            <ToggleButton handleToggle={() => handleToggle(id)} />
            <DeleteButton handleDelete={() => handleDelete(id)} />
          </div>
          {!!tags.length &&
            tags.map((tag) => (
              <button onClick={() => handleTagClick(tag)}>{tag}</button>
            ))}
        </li>
      );
    })}
  </ul>
);
