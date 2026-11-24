import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import styles from "./DropDown.module.scss";

type DropDownProps = {
  /** Valore selezionato, es. "Standard Rules". */
  value: string;
  /** Opzioni mostrate quando `open` è true. */
  options?: string[];
  /** Solo visuale: la logica di apertura è gestita dal chiamante. */
  open?: boolean;
  /** Props del bottone principale (es. onClick). */
  triggerProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;
  /** Props comuni alle opzioni; riceve l'opzione per creare gli handler. */
  getOptionProps?: (option: string) => Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;
  className?: string;
};

// Figma: DropDown (Default = chiuso · Variant2 = aperto)
const DropDown = ({ value, options = [], open = false, triggerProps, getOptionProps, className }: DropDownProps) => (
  <div className={clsx(styles.dropDown, open && styles.open, className)}>
    <button type="button" aria-expanded={open} className={styles.trigger} {...triggerProps}>
      <Text variant="label">{value}</Text>
      <Icon name="caretDown" size={15} className={styles.caret} />
    </button>

    {open && options.length > 0 && (
      <ul className={styles.options} role="listbox">
        {options.map((option) => (
          <li key={option} role="option" aria-selected={option === value}>
            <button type="button" className={styles.option} {...getOptionProps?.(option)}>
              <Text variant="label">{option}</Text>
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default DropDown;
