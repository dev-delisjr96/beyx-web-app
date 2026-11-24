import clsx from "clsx";

import { PART_ICONS, type PartType } from "../../../assets";
import Text from "../Text/Text";
import styles from "./PartTag.module.scss";

type PartTagProps = {
  part: PartType;
  /** Nome della parte, es. "1-60" o "H". */
  label: string;
  className?: string;
};

// Figma: UI/Parts — icona del tipo di parte + nome.
const PartTag = ({ part, label, className }: PartTagProps) => (
  <span className={clsx(styles.tag, part === "bit" && styles.bit, className)}>
    <img className={styles.icon} src={PART_ICONS[part]} alt="" />
    <Text variant="label">{label}</Text>
  </span>
);

export default PartTag;
