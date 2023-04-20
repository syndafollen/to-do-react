import { useState, ChangeEvent, SetStateAction } from "react";
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
  const [tags, setTags] = useState<string[]>([]);
  const [tagFilter, setTagFilter] = useState("");

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.checked) {
      setTags([...tags, event?.target?.name]);
    } else {
      setTags(tags.filter((tag) => tag !== event?.target?.name));
    }
  };

  console.log("tags:", tags);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      { id: todos.length, text: inputValue, done: false, tags },
    ]);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event?.target?.value);
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => !(todo.id === id)));
  };

  const handleTagClick = (tag: SetStateAction<string>) => {
    console.log("clicked:", tag);
    if (tagFilter === tag) {
      setTagFilter("");
    } else {
      setTagFilter(tag);
    }
  };

  const filterTodos = () => {
    const filteredBySearch = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchInputValue.toLowerCase())
    );

    if (tagFilter !== "") {
      return filteredBySearch.filter((todo) => todo.tags.includes(tagFilter));
    }

    return filteredBySearch;
  };

  const filteredTodos = filterTodos();

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
        todos={filteredTodos}
        searchInputValue={searchInputValue}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        handleTagClick={handleTagClick}
      />
    </div>
  );
}

export default App;
