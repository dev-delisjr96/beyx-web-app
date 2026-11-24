import clsx from "clsx";
import type { CSSProperties } from "react";

import styles from "./CornerBadge.module.scss";

type CornerBadgeProps = {
  /** Icona del badge (es. tipo di gioco). Senza src mostra un placeholder. */
  src?: string;
  alt?: string;
  /** `invalid` mostra il "!" di errore al posto dell'icona. */
  status?: "default" | "invalid";
  /** Lato in px: 28 sulle Build Card, 22 sulle BladePrev. */
  size?: number;
  className?: string;
};

// Badge circolare che "esce" dall'angolo in alto a destra della card.
// Il genitore deve essere `position: relative`.
const CornerBadge = ({ src, alt = "", status = "default", size = 28, className }: CornerBadgeProps) => {
  const style = { "--badge-size": `${size}px` } as CSSProperties;

  if (status === "invalid") {
    return (
      <span className={clsx(styles.badge, styles.invalid, className)} style={style} role="img" aria-label="Invalid">
        !
      </span>
    );
  }

  return src ? (
    <img className={clsx(styles.badge, className)} style={style} src={src} alt={alt} />
  ) : (
    <span className={clsx(styles.badge, styles.placeholder, className)} style={style} aria-hidden />
  );
};

export default CornerBadge;
