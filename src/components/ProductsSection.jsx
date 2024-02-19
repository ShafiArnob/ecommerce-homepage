import Features from "./Features";
import Products from "./Products";
import styles from "../styles/Products.module.css";

export const ProductsSection = () => {
  return (
    <div className={styles.productsSection}>
      <Features />
      <Products />
    </div>
  );
};
