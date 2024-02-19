import styles from "../styles/Products.module.css";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
const Products = () => {
  return (
    <div className={styles.products}>
      <div className={styles.productsHeaderContainer}>
        <h3>Featured Item</h3>
        <div className={styles.productsHeaderIconContainer}>
          <GoArrowLeft />
          <GoArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Products;
