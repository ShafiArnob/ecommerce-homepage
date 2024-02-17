import styles from "../styles/Navbar.module.css";
import { FiRefreshCw } from "react-icons/fi";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h2>minago</h2>
      </div>

      {/* searchbar */}
      <div className={styles.search_container}>
        <div className={styles.search}>
          <input type="text" placeholder="Search for products" />
          <select name="All Categories" id="">
            <option value="">All Categories</option>
          </select>
          <div className={styles.btn_primary}>
            <IoSearch />
          </div>
        </div>
      </div>

      {/* account section */}
      <div className={styles.account}>
        <div className="flex">
          <FiRefreshCw />
          <FaRegHeart />
          <div>
            <MdAddShoppingCart />
          </div>
        </div>

        <div className={`flex`}>
          <p>Account</p>
          <FaRegUser />
          <p>$20.00</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
