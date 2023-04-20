import { TodoType } from "../../types";

export type ListProps = {
  todos: TodoType[];
  searchInputValue: string;
  handleToggle: (id: number) => void;
  handleDelete: (id: number) => void;
  handleTagClick: (tag: string) => void;
};