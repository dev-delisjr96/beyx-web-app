import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

import IconButton from "../IconButton/IconButton";
import Text from "../Text/Text";
import styles from "./SliderSelector.module.scss";

type ArrowProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

type SliderSelectorProps = {
  /** Valore mostrato al centro, es. "MC_S". */
  value: string;
  /** `md` = 44px (componente Figma), `sm` = 36px (istanza nel Deck Builder). */
  size?: "md" | "sm";
  previousLabel?: string;
  nextLabel?: string;
  /** Props passate alle frecce (es. onClick, disabled). */
  previousProps?: ArrowProps;
  nextProps?: ArrowProps;
  className?: string;
};

// Figma: Slider Selector — valore con frecce precedente/successivo.
const SliderSelector = ({
  value,
  size = "md",
  previousLabel = "Previous",
  nextLabel = "Next",
  previousProps,
  nextProps,
  className,
}: SliderSelectorProps) => (
  <div className={clsx(styles.slider, styles[size], className)}>
    <IconButton icon="caretForward" size={20} label={previousLabel} className={styles.previous} {...previousProps} />
    <Text variant="meta" align="center" truncate className={styles.value}>
      {value}
    </Text>
    <IconButton icon="caretForward" size={20} label={nextLabel} className={styles.arrow} {...nextProps} />
  </div>
);

export default SliderSelector;
