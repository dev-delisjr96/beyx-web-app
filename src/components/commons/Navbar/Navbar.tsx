import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

import { LOGO } from "../../../assets";
import FlareLine from "../FlareLine/FlareLine";
import IconButton from "../IconButton/IconButton";
import NavMenuItem from "../NavMenuItem/NavMenuItem";
import styles from "./Navbar.module.scss";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export type NavbarItem = {
  label: string;
  active?: boolean;
  buttonProps?: ButtonProps;
};

type NavbarProps = {
  /** Mostra il menu sotto la barra (variante Figma "expanded"). */
  expanded?: boolean;
  items?: NavbarItem[];
  menuButtonProps?: ButtonProps;
  profileButtonProps?: ButtonProps;
  className?: string;
};

// Figma: Navbar (Default · expanded)
const Navbar = ({ expanded = false, items = [], menuButtonProps, profileButtonProps, className }: NavbarProps) => (
  <header className={clsx(styles.navbar, className)}>
    <div className={styles.bar}>
      <IconButton
        icon="grid"
        label="Menu"
        active={expanded}
        aria-expanded={expanded}
        className={styles.icon}
        {...menuButtonProps}
      />
      <img className={styles.logo} src={LOGO} alt="BeyX" />
      <IconButton icon="person" label="Profile" className={styles.icon} {...profileButtonProps} />
      <FlareLine className={styles.flare} />
    </div>

    {expanded && items.length > 0 && (
      <nav>
        {items.map(({ label, active, buttonProps }) => (
          <NavMenuItem key={label} label={label} active={active} {...buttonProps} />
        ))}
      </nav>
    )}
  </header>
);

export default Navbar;
