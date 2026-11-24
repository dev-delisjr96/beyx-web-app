import type { ReactNode } from "react";

import {
  BladePrev,
  BuildCard,
  Button,
  DropDown,
  FlareLine,
  IconButton,
  Navbar,
  PartSelector,
  PreBuildCard,
  SearchBar,
  SliderSelector,
  StatItem,
  Text,
} from "../../components/commons";
import useResponsive from "../../hooks/useResponsive";
import useTheme from "../../theme/useTheme";
import styles from "./ComponentsPreview.module.scss";

const NAV_ITEMS = [{ label: "Deck builder", active: true }, { label: "Tournament" }];

// Vetrina temporanea dei componenti (mobile-first, 320px come in Figma).
// Da rimuovere/sostituire quando arriveranno le pagine reali.
const ComponentsPreview = () => {
  const { theme, setTheme } = useTheme();
  const { breakpoint } = useResponsive();

  return (
    <main className={styles.page}>
      <div className={styles.toolbar}>
        <Text variant="label" tone="muted">
          {breakpoint} · {theme}
        </Text>
        <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Toggle theme</Button>
      </div>

      <div className={styles.frame}>
        <Navbar />

        <Section title="Navbar · expanded">
          <Navbar expanded items={NAV_ITEMS} />
        </Section>

        <Section title="DropDown">
          <DropDown value="Standard Rules" />
          <DropDown value="Standard Rules" open options={["PointBuy", "5Ban2"]} />
        </Section>

        <Section title="Build Card">
          <div className={styles.row}>
            <BuildCard bladeName="Wizard Rod" buildNumber="01" playType="stm" ratchet="1-60" bit="H" status="selected" />
            <BuildCard bladeName="Shark Scale" buildNumber="02" playType="atk" ratchet="3-60" bit="LR" />
            <BuildCard bladeName="Bullet Griffon" buildNumber="03" playType="def" bit="M" />
          </div>
          <div className={styles.row}>
            <BuildCard bladeName="Wizard Rod" buildNumber="01" ratchet="1-60" bit="H" status="invalid" />
            <BuildCard bladeName="Wizard Rod" buildNumber="02" playType="bal" bit="H" status="invalid" />
          </div>
          <div className={styles.actions}>
            <Text variant="label">3/3</Text>
            <IconButton icon="randomizer" label="Random deck" />
            <Button className={styles.grow}>SAVE DECK</Button>
          </div>
        </Section>

        <Section title="Buttons">
          <Button variant="success" fullWidth>
            SAVE
          </Button>
          <Button variant="error" fullWidth>
            DELETE
          </Button>
        </Section>

        <Section title="Slider Selector · Part Selector">
          <div className={styles.actions}>
            <SliderSelector value="MC_S" size="sm" className={styles.grow} />
            <IconButton icon="prebuilds" label="Prebuilds" />
            <IconButton icon="bookmark" label="Save build" />
            <IconButton icon="randomizer" label="Random build" />
          </div>
          <PartSelector part="blade" partLabel="Blade" partName="Wizard Rod" selected />
          <PartSelector part="ratchet" partLabel="Ratchet" partName="1-60" />
          <PartSelector part="bit" partLabel="Bit" partName="Hexa" />
        </Section>

        <Section title="Search · BladePrev">
          <div className={styles.actions}>
            <SearchBar className={styles.grow} />
            <IconButton icon="filter" label="Sort" />
            <IconButton icon="funnel" label="Filter" />
          </div>
          <Text variant="label">Found: 118</Text>
          <div className={styles.row}>
            <BladePrev name="Tyranno Beat" playType="stm" weight={27} atk={15} def={15} stm={15} />
            <BladePrev name="Tyranno Beat" playType="atk" weight={27} atk={15} def={15} stm={15} selected />
            <BladePrev name="Tyranno Beat" weight={27} atk={15} def={15} stm={15} />
          </div>
        </Section>

        <Section title="PreBuild Card · StatItem">
          <PreBuildCard bladeName="Wizard Rod" playType="stm" ratchet="1-60" bit="1-60" atk={15} def={15} stm={15} weight={15} />
          <div className={styles.row}>
            <StatItem stat="atk" value={15} />
            <StatItem stat="def" value={15} />
            <StatItem stat="stm" value={15} />
            <StatItem stat="weight" value={15} />
            <StatItem stat="dash" value={15} />
            <StatItem stat="burstRes" value={15} />
            <StatItem stat="weight" value={27} orientation="vertical" />
          </div>
          <FlareLine tone="ice" />
        </Section>
      </div>
    </main>
  );
};

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className={styles.section}>
    <Text as="h2" variant="label" tone="tertiary">
      {title}
    </Text>
    {children}
  </section>
);

export default ComponentsPreview;
