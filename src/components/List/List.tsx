import styles from "./List.module.css";
import { ToggleButton } from "../ToggleButton";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { ListProps } from "./types";
import { TodoType } from "../../types";

export const List = ({
  todos = [],
  filteredTodos,
  searchInputValue,
  handleToggle,
  handleDelete,
}: ListProps) => (
  <ul className={styles.list}>
    {searchInputValue === ""
      ? todos.map(({ text, id, done, tags}) => {
          return (
            <li key={id}>
              <div>
                <span className={done ? styles.done : undefined}>{text}</span>
                <ToggleButton handleToggle={() => handleToggle(id)} />
                <DeleteButton handleDelete={() => handleDelete(id)} />
              </div>
              {!!tags.length && <button>{tags?.[0]}</button>}
            </li>
          );
        })
      : filteredTodos.map(({ text, id, done, tags}) => {
          return (
            <li key={id}>
              <span className={done ? styles.done : undefined}>{text}</span>
              <ToggleButton handleToggle={() => handleToggle(id)} />
              <DeleteButton handleDelete={() => handleDelete(id)} />
              {!!tags.length && <button>{tags?.[0]}</button>}
            </li>
          );
        })}
  </ul>
);
