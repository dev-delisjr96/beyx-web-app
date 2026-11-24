import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

import Text from "../Text/Text";
import styles from "./NavMenuItem.module.scss";

type NavMenuItemProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  label: string;
  active?: boolean;
};

// Voce del menu della Navbar espansa ("Deck builder", "Tournament"…).
const NavMenuItem = ({ label, active = false, type = "button", className, ...rest }: NavMenuItemProps) => (
  <button
    type={type}
    aria-current={active ? "page" : undefined}
    className={clsx(styles.item, active && styles.active, className)}
    {...rest}
  >
    <Text variant="navigation" tone="inherit">
      {label}
    </Text>
  </button>
);

export default NavMenuItem;
