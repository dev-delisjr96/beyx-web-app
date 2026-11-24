import clsx from "clsx";
import type { ElementType, ReactNode } from "react";

import styles from "./Text.module.scss";

export type TextVariant =
  /** 11px SemiBold — nome nelle Build Card */
  | "title"
  /** 11px Bold — nome nelle BladePrev e nei Part Selector */
  | "titleStrong"
  /** 10px Bold — valori, etichette, tag delle parti */
  | "label"
  /** 10px Medium — valore dello Slider Selector */
  | "meta"
  /** 10px Regular — numero della build */
  | "caption"
  /** 13px Medium — voci di navigazione */
  | "navigation";

export type TextTone = "primary" | "secondary" | "tertiary" | "muted" | "inherit";

type TextProps = {
  as?: ElementType;
  variant?: TextVariant;
  tone?: TextTone;
  align?: "start" | "center" | "end";
  /** Una sola riga con ellissi. */
  truncate?: boolean;
  className?: string;
  children: ReactNode;
};

const Text = ({
  as: Component = "span",
  variant = "label",
  tone = "primary",
  align,
  truncate = false,
  className,
  children,
}: TextProps) => (
  <Component
    className={clsx(
      styles.text,
      styles[variant],
      styles[`tone-${tone}`],
      align && styles[`align-${align}`],
      truncate && styles.truncate,
      className,
    )}
  >
    {children}
  </Component>
);

export default Text;
