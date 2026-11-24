import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

import { PART_ICONS, type PartType } from "../../../assets";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import styles from "./PartSelector.module.scss";

type PartSelectorProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  /** Tipo di parte: decide l'icona a sinistra. */
  part: PartType;
  /** Etichetta del tipo, es. "Blade". */
  partLabel: string;
  /** Parte scelta, es. "Wizard Rod". */
  partName: string;
  selected?: boolean;
};

// Figma: Part Selector — riga cliccabile per scegliere Blade / Ratchet / Bit.
const PartSelector = ({
  part,
  partLabel,
  partName,
  selected = false,
  type = "button",
  className,
  ...rest
}: PartSelectorProps) => (
  <button
    type={type}
    aria-pressed={selected}
    className={clsx(styles.selector, selected && styles.selected, className)}
    {...rest}
  >
    <img className={styles.icon} src={PART_ICONS[part]} alt="" />
    <span className={styles.texts}>
      <Text variant="label" tone="muted">
        {partLabel}
      </Text>
      <Text variant="titleStrong" truncate>
        {partName}
      </Text>
    </span>
    <Icon name="chevronForward" size={15} className={styles.chevron} />
  </button>
);

export default PartSelector;
