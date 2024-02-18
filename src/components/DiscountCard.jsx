import styles from "../styles/DiscountSection.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";
const DiscountCard = ({ item }) => {
  return (
    <div className={styles.discountCard}>
      <div className={styles.cardText}>
        <p>{item?.discountType}</p>
        <h2>{item?.discountTitle}</h2>
        <button>
          <HiOutlineShoppingBag />
          <span>Buy now</span>
        </button>
      </div>
      <div className={styles.cardImg}>
        <img src={item?.image} alt="" />
      </div>
    </div>
  );
};

export default DiscountCard;
