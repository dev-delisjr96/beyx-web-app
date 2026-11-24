import clsx from "clsx";

import { PLAY_TYPE_ICONS, type PlayType } from "../../../assets";
import BeyImage from "../BeyImage/BeyImage";
import CardSurface, { type CardStatus } from "../CardSurface/CardSurface";
import CornerBadge from "../CornerBadge/CornerBadge";
import PartTag from "../PartTag/PartTag";
import Text from "../Text/Text";
import styles from "./BuildCard.module.scss";

type BuildCardProps = {
  bladeName: string;
  /** Posizione nel deck, es. "01". */
  buildNumber?: string;
  imgUrl?: string;
  playType?: PlayType;
  /** Omesso per i bit con ratchet integrato (varianti Figma "/RI"): il bit va al centro. */
  ratchet?: string;
  bit: string;
  /** `invalid` mostra il badge "!" e il bordo di errore. */
  status?: CardStatus;
  className?: string;
};

// Figma: Build Card (Default · Selected · Invalid · */RI)
const BuildCard = ({
  bladeName,
  buildNumber,
  imgUrl,
  playType,
  ratchet,
  bit,
  status = "default",
  className,
}: BuildCardProps) => (
  <CardSurface as="article" status={status} className={clsx(styles.card, className)}>
    <Text as="h3" variant="title" align="center" truncate className={styles.title}>
      {bladeName}
    </Text>

    <div className={styles.body}>
      {buildNumber && (
        <Text variant="caption" className={styles.number}>
          {buildNumber}
        </Text>
      )}
      <BeyImage src={imgUrl} alt={bladeName} width={45} />
    </div>

    <div className={clsx(styles.parts, !ratchet && styles.integrated)}>
      {ratchet && <PartTag part="ratchet" label={ratchet} />}
      <PartTag part="bit" label={bit} />
    </div>

    <CornerBadge
      status={status === "invalid" ? "invalid" : "default"}
      src={playType ? PLAY_TYPE_ICONS[playType] : undefined}
      alt={playType}
    />
  </CardSurface>
);

export default BuildCard;
