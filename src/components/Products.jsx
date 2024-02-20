import { useEffect, useState } from "react";
import styles from "../styles/Products.module.css";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { getAllProducts } from "../api/products";
import { RiStarSFill } from "react-icons/ri";
import { calculateDiscountedPrice } from "../utils/currency";
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
        <h3 style={{ marginBottom: "1rem" }}>Featured Item</h3>
        <div className={styles.productsHeaderIconContainer}>
          <GoArrowLeft />
          <GoArrowRight />
        </div>
      </div>
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

function ProductCard({ product }) {
  const itemElements = [];
  for (let i = 0; i < Math.floor(product?.rating); i++) {
    itemElements.push("");
  }
  return (
    <div className={styles.productCard}>
      <div className={styles.productCardImgContainer}>
        <img src={product?.thumbnail} alt="" />
      </div>
      <div>
        <h3 style={{ marginTop: "1.5rem" }}>{product?.title}</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "0.5rem",

            // paddingRight: "1rem",
          }}
        >
          {/* stars */}
          <div style={{ display: "flex", color: "#f59e0b" }}>
            {itemElements.map((itemElement) => (
              <RiStarSFill />
            ))}
            <p style={{ color: "rgb(107 114 128)" }}>(35)</p>
          </div>
          {/* available? */}
          {product?.stock > 0 ? (
            <p style={{ color: "#22c55e" }}>Stock Available</p>
          ) : (
            <p style={{ color: "#22c55e" }}>Stoct Unavailable</p>
          )}
        </div>
        {/* pricing */}

        <div
          style={{ display: "flex", alignItems: "center", marginTop: "0.5rem" }}
        >
          <p
            style={{
              color: "rgb(0, 136, 221)",
              fontWeight: "800",
              fontSize: "22px",
            }}
          >
            $
            {calculateDiscountedPrice(
              product?.price,
              product?.discountPercentage
            )}
          </p>
          <p
            style={{
              fontSize: "16px",
              marginLeft: "0.4rem",
              textDecoration: "line-through",
              color: "rgb(55 65 81)",
            }}
          >
            ${product?.price}
          </p>
        </div>
      </div>
    </div>
  );
}
