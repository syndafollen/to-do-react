export type TodoType = {
  text: string;
  id: number;
  done: boolean;
}

export type ListProps = {
  todos: TodoType[];
  filteredTodos: TodoType[];
  searchInputValue: string;
  handleToggle: (id: number) => void;
  handleDelete: (id: number) => void;
};