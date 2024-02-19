import styles from "../styles/Features.module.css";
import { TbTruckDelivery } from "react-icons/tb";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { PiHandCoinsDuotone } from "react-icons/pi";
import { BsBox2 } from "react-icons/bs";
const Features = () => {
  const features = [
    {
      id: 1,
      title: "Free Shipping",
      subtitle: "Minimum order $90",
      icon: TbTruckDelivery,
    },
    {
      id: 2,
      title: "24/7 Support",
      subtitle: "Contact us 24 hours",
      icon: IoChatboxEllipsesOutline,
    },
    {
      id: 3,
      title: "Best prices and offers",
      subtitle: "Order $100 or more",
      icon: PiHandCoinsDuotone,
    },
    {
      id: 4,
      title: "Easy Returns",
      subtitle: "Within 30 days",
      icon: BsBox2,
    },
  ];
  return (
    <div className={styles.featuresContainer}>
      {features.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  );
};

export default Features;

const FeatureCard = ({ feature }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureCardIconContainer}>
        <feature.icon />
      </div>
      <div className={styles.featureCardTextContainer}>
        <h3>{feature.title}</h3>
        <p>{feature.subtitle}</p>
      </div>
    </div>
  );
};
