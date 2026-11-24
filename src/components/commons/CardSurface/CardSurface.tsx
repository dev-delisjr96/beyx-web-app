import clsx from "clsx";
import type { ElementType, ReactNode } from "react";

import styles from "./CardSurface.module.scss";

export type CardStatus = "default" | "selected" | "invalid";

type CardSurfaceProps = {
  as?: ElementType;
  status?: CardStatus;
  /** `raised` = BeyX/Card/Surface Raised (Part Selector). */
  surface?: "card" | "raised";
  radius?: "sm" | "md";
  className?: string;
  children?: ReactNode;
};

// Base di tutte le card BeyX: gradiente, bordo, bevel, riflesso e stati.
const CardSurface = ({
  as: Component = "div",
  status = "default",
  surface = "card",
  radius = "md",
  className,
  children,
}: CardSurfaceProps) => (
  <Component
    className={clsx(
      styles.card,
      surface === "raised" && styles.raised,
      styles[`radius-${radius}`],
      styles[status],
      className,
    )}
  >
    {children}
  </Component>
);

export default CardSurface;
