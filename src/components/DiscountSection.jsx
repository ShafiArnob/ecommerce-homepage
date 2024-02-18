import styles from "../styles/DiscountSection.module.css";
import DiscountCard from "./DiscountCard";
import laptop from "../assets/laptop.png";
import perfume from "../assets/perfume.png";

const DiscountSection = () => {
  const discountedItems = [
    {
      id: 1,
      discountType: "Gadget Store",
      discountTitle: "30% Sale",
      image: laptop,
    },
    {
      id: 2,
      discountType: "Bundle Package",
      discountTitle: "30% Sale",
      image: perfume,
    },
    {
      id: 3,
      discountType: "Gadgets",
      discountTitle: "New Arrival",
      image: laptop,
    },
    {
      id: 4,
      discountType: "Valentines Offer",
      discountTitle: "30% Sale",
      image: perfume,
    },
  ];
  return (
    <div className={styles.discountSection}>
      {discountedItems.map((item) => (
        <DiscountCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default DiscountSection;
