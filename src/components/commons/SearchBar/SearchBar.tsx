import clsx from "clsx";
import type { InputHTMLAttributes } from "react";

import Icon from "../Icon/Icon";
import styles from "./SearchBar.module.scss";

type SearchBarProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  /** Testo accessibile del campo (default = placeholder). */
  label?: string;
};

// Figma: SearchBar
const SearchBar = ({ placeholder = "Search blade", label, className, ...rest }: SearchBarProps) => (
  <label className={clsx(styles.searchBar, className)}>
    <Icon name="search" size={20} className={styles.icon} />
    <input type="search" className={styles.input} placeholder={placeholder} aria-label={label ?? placeholder} {...rest} />
  </label>
);

export default SearchBar;
