import styles from "../styles/NavbarSecondary.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
const NavbarCategories = () => {
  return (
    <div className={styles.navbar}>
      {/*Nav left */}
      <div className={styles.navLeft}>
        <GiHamburgerMenu />
        <p>Browse Categories</p>
      </div>

      {/* Nav right */}
      <div className={styles.navRight}>
        <p>Home</p>
        <select name="" id="">
          <option value="">Products</option>
        </select>
        <select name="" id="">
          <option value="">Categories</option>
        </select>
        <select name="" id="">
          <option value="">Pages</option>
        </select>
        <p>Campaign</p>
        <p>Offer</p>
        <p>Blog</p>
        <p>Review</p>
        <p>Flash Sale</p>
        <p>Contact us</p>
      </div>
    </div>
  );
};

export default NavbarCategories;
