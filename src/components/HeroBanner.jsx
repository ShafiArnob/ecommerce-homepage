import styles from "../styles/HeroSection.module.css";
import picture from "../assets/picture.png";
const HeroBanner = () => {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.heroText}>
        <h3>
          Up to <span className="text-color-primary">70%</span> on Black Friday
        </h3>
        <h1>
          TRENDY <span className="text-color-primary">FASHION</span> COLLECTION
        </h1>
        <div>Buy Now</div>
      </div>
      <div className={styles.heroImgContainer}>
        <img src={picture} alt="" />
      </div>
    </div>
  );
};

export default HeroBanner;
