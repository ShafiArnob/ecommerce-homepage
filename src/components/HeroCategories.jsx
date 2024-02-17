import { useState } from "react";
import styles from "../styles/HeroSection.module.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const HeroCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = [
    "Fashion Collection",
    "Electronics Item",
    "Home Appliance",
    "Kitchen Item",
    "Furniture",
    "Food",
    "Gadgets",
    "Toys & Games",
    "Health & Beauty",
    "View All Categoris",
  ];
  return (
    <div className={styles.heroCategories}>
      {categories.map((category) => (
        <div
          className={`${styles.category} ${
            selectedCategory === category && styles.categorySelected
          }`}
          onClick={() => setSelectedCategory(category)}
          key={category}
        >
          <p>{category}</p>
          <MdOutlineKeyboardArrowRight style={{ fontSize: "1.3rem" }} />
        </div>
      ))}
    </div>
  );
};

export default HeroCategories;
