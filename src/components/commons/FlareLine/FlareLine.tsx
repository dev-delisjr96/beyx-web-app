import clsx from "clsx";

import styles from "./FlareLine.module.scss";

type FlareLineProps = {
  /** Figma: Deco/Flare Line Orange · Deco/Flare Line Ice */
  tone?: "orange" | "ice";
  className?: string;
};

// Linea luminosa decorativa con centro brillante (separatori, bordo navbar).
const FlareLine = ({ tone = "orange", className }: FlareLineProps) => (
  <span className={clsx(styles.line, styles[tone], className)} aria-hidden />
);

export default FlareLine;
