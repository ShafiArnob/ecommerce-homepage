import { useEffect, useState } from "react";
import styles from "../styles/Products.module.css";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { getAllProducts } from "../api/products";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      const products = await getAllProducts();
      if (products == null) {
        setIsError(true);
        setLoading(false);
      }
      setProducts(products);
      setLoading(false);
    };
    fetchUsers();
  }, []);
  console.log(products);
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
