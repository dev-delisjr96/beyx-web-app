import clsx from "clsx";
import type { CSSProperties } from "react";

import { ICONS, type IconName } from "../../../assets";
import styles from "./Icon.module.scss";

type IconProps = {
  name: IconName;
  /** Lato in px (default 24, come in Figma). */
  size?: number;
  /** Se presente l'icona è annunciata dagli screen reader, altrimenti è decorativa. */
  label?: string;
  className?: string;
};

// L'SVG è usato come maschera: il colore è `currentColor`, quindi segue il tema
// e il colore del testo del contenitore.
const Icon = ({ name, size = 24, label, className }: IconProps) => (
  <span
    role={label ? "img" : undefined}
    aria-label={label}
    aria-hidden={label ? undefined : true}
    className={clsx(styles.icon, className)}
    style={
      {
        "--icon-size": `${size}px`,
        "--icon-src": `url("${ICONS[name]}")`,
      } as CSSProperties
    }
  />
);

export default Icon;
