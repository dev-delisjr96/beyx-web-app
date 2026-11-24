import clsx from "clsx";

import { PLAY_TYPE_ICONS, type PlayType } from "../../../assets";
import BeyImage from "../BeyImage/BeyImage";
import CardSurface from "../CardSurface/CardSurface";
import CornerBadge from "../CornerBadge/CornerBadge";
import StatItem from "../StatItem/StatItem";
import Text from "../Text/Text";
import styles from "./BladePrev.module.scss";

type BladePrevProps = {
  name: string;
  imgUrl?: string;
  playType?: PlayType;
  weight: number;
  atk: number;
  def: number;
  stm: number;
  selected?: boolean;
  className?: string;
};

// Figma: BladePrev — anteprima di una parte nella lista di ricerca.
const BladePrev = ({ name, imgUrl, playType, weight, atk, def, stm, selected = false, className }: BladePrevProps) => (
  <CardSurface as="article" status={selected ? "selected" : "default"} className={clsx(styles.card, className)}>
    <Text as="h3" variant="titleStrong" align="center" truncate className={styles.title}>
      {name}
    </Text>

    <div className={styles.body}>
      <BeyImage src={imgUrl} alt={name} width={39} height={36} />
      <StatItem stat="weight" value={weight} orientation="vertical" className={styles.weight} />
    </div>

    <div className={styles.stats}>
      <StatItem stat="atk" value={atk} />
      <StatItem stat="def" value={def} />
      <StatItem stat="stm" value={stm} />
    </div>

    <CornerBadge size={22} src={playType ? PLAY_TYPE_ICONS[playType] : undefined} alt={playType} />
  </CardSurface>
);

export default BladePrev;
