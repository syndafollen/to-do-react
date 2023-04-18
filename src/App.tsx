import { useState, ChangeEvent } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { Add } from "./components/Add";
import { List } from "./components/List";
import { TodoType } from "./types";
import { Tags } from "./components/Tags";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<TodoType[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  // const [checked, setChecked] = useState(true);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("event", event); // если галочку снимаем, то из tags должен пропадать тэг этого чекбокса
    setTags([event?.target?.name]);
    //defaultChecked
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      { id: todos.length, text: inputValue, done: false, tags },
    ]);
    setFilteredTodos([
      ...todos,
      { id: todos.length, text: inputValue, done: false, tags },
    ]);
  };

  console.log(todos);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
    const newTodos = todos.filter((todo) =>
      todo.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredTodos(newTodos);
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    console.log("todos:", todos);
    console.log(todos.filter((todo) => !(todo.id === id)));

    setTodos(todos.filter((todo) => !(todo.id === id)));
  };

  return (
    <div className="App">
      <Header />
      <Search
        handleSearchChange={handleSearchChange}
        searchInputValue={searchInputValue}
      />
      <Tags handleChange={handleCheckboxChange} tags={tags} />
      <Add
        handleChange={handleChange}
        inputValue={inputValue}
        handleAddTodo={handleAddTodo}
      />
      <List
        todos={todos}
        filteredTodos={filteredTodos}
        searchInputValue={searchInputValue}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
