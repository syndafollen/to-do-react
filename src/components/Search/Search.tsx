import styles from "./Search.module.css";
import {SearchProps} from './types'

export const Search = ({ handleSearchChange, searchInputValue }: SearchProps) => (
  <input
    type="text"
    name="search"
    className={styles.search}
    placeholder="Search here!"
    onChange={handleSearchChange}
    value={searchInputValue}
  />
);
