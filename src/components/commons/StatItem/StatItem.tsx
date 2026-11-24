import clsx from "clsx";

import { STAT_ICONS, type StatType } from "../../../assets";
import Text from "../Text/Text";
import styles from "./StatItem.module.scss";

const STAT_LABELS: Record<StatType, string> = {
  atk: "Attack",
  def: "Defense",
  stm: "Stamina",
  weight: "Weight",
  dash: "Dash",
  burstRes: "Burst resistance",
};

// Asset bianchi monocromatici (gli altri sono colorati).
const MONO_STATS: StatType[] = ["weight", "dash", "burstRes"];

type StatItemProps = {
  stat: StatType;
  value: number | string;
  /** `vertical` = icona sopra e valore sotto (varianti Figma "Vr_Stat/*"). */
  orientation?: "horizontal" | "vertical";
  className?: string;
};

// Figma: UI/Stats
const StatItem = ({ stat, value, orientation = "horizontal", className }: StatItemProps) => (
  <span className={clsx(styles.stat, styles[orientation], className)}>
    <img
      className={clsx(styles.icon, MONO_STATS.includes(stat) && styles.mono)}
      src={STAT_ICONS[stat]}
      alt={STAT_LABELS[stat]}
    />
    <Text variant="label">{value}</Text>
  </span>
);

export default StatItem;
