import HeroBanner from "./HeroBanner";
import HeroCategories from "./HeroCategories";
import styles from "../styles/HeroSection.module.css";
const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <HeroCategories />
      <HeroBanner />
    </div>
  );
};

export default HeroSection;
