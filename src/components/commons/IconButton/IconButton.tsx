import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

import type { IconName } from "../../../assets";
import Icon from "../Icon/Icon";
import styles from "./IconButton.module.scss";

type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  icon: IconName;
  /** Testo accessibile (obbligatorio: il bottone non ha testo visibile). */
  label: string;
  /** Lato dell'icona in px. */
  size?: number;
  /** Stato attivo/selezionato (es. menu aperto, bookmark salvato). */
  active?: boolean;
};

// Bottone con sola icona: navbar, randomizer, bookmark, filtri…
const IconButton = ({ icon, label, size = 24, active = false, type = "button", className, ...rest }: IconButtonProps) => (
  <button
    type={type}
    aria-label={label}
    className={clsx(styles.button, active && styles.active, className)}
    {...rest}
  >
    <Icon name={icon} size={size} className={styles.icon} />
  </button>
);

export default IconButton;
