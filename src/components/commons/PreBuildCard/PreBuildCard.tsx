import clsx from "clsx";

import { PLAY_TYPE_ICONS, type PlayType } from "../../../assets";
import BeyImage from "../BeyImage/BeyImage";
import CornerBadge from "../CornerBadge/CornerBadge";
import PartTag from "../PartTag/PartTag";
import StatItem from "../StatItem/StatItem";
import Text from "../Text/Text";
import styles from "./PreBuildCard.module.scss";

type PreBuildCardProps = {
  bladeName: string;
  imgUrl?: string;
  playType?: PlayType;
  ratchet?: string;
  bit: string;
  atk: number;
  def: number;
  stm: number;
  weight: number;
  className?: string;
};

// Figma: PreBuild Card — build salvata/predefinita con statistiche complete.
const PreBuildCard = ({
  bladeName,
  imgUrl,
  playType,
  ratchet,
  bit,
  atk,
  def,
  stm,
  weight,
  className,
}: PreBuildCardProps) => (
  <article className={clsx(styles.card, className)}>
    <Text as="h3" variant="title" align="center" truncate className={styles.title}>
      {bladeName}
    </Text>

    <div className={styles.image}>
      <BeyImage src={imgUrl} alt={bladeName} width={45} />
    </div>

    <div className={styles.stats}>
      <StatItem stat="atk" value={atk} />
      <StatItem stat="def" value={def} />
      <StatItem stat="stm" value={stm} />
      <StatItem stat="weight" value={weight} />
    </div>

    <div className={styles.parts}>
      {ratchet && <PartTag part="ratchet" label={ratchet} />}
      <PartTag part="bit" label={bit} />
    </div>

    <CornerBadge src={playType ? PLAY_TYPE_ICONS[playType] : undefined} alt={playType} className={styles.badge} />
  </article>
);

export default PreBuildCard;
