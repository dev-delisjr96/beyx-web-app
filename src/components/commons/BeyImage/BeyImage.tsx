import clsx from "clsx";
import type { CSSProperties } from "react";

import styles from "./BeyImage.module.scss";

type BeyImageProps = {
  /** URL dell'immagine (es. `imgUrl` dei mock). Vuoto → placeholder. */
  src?: string;
  alt: string;
  /** Larghezza in px. */
  width: number;
  /** Altezza in px (default = width). */
  height?: number;
  className?: string;
};

// Immagine di trottola/parte con placeholder finché l'asset non esiste.
const BeyImage = ({ src, alt, width, height = width, className }: BeyImageProps) => {
  const style = { "--img-w": `${width}px`, "--img-h": `${height}px` } as CSSProperties;

  return src ? (
    <img className={clsx(styles.image, className)} style={style} src={src} alt={alt} />
  ) : (
    <span className={clsx(styles.image, styles.placeholder, className)} style={style} role="img" aria-label={alt} />
  );
};

export default BeyImage;
