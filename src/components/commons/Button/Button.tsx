import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "success" | "error";
  /** Occupa tutta la larghezza disponibile. */
  fullWidth?: boolean;
};

// Figma: Button. Gli stati "hover/clicked" sono resi con :hover e :active.
const Button = ({ variant = "primary", fullWidth = false, type = "button", className, ...rest }: ButtonProps) => (
  <button
    type={type}
    className={clsx(styles.button, styles[variant], fullWidth && styles.fullWidth, className)}
    {...rest}
  />
);

export default Button;
