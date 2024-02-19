import styles from "../styles/Features.module.css";
import { TbTruckDelivery } from "react-icons/tb";

const FeatureCard = ({ feature }) => {
  return <div className={styles.featureCard}>hello</div>;
};

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Free Shipping",
      subtitle: "Minimum order $90",
      icon: <TbTruckDelivery />,
    },
    {
      id: 2,
      title: "Free Shipping",
      subtitle: "Minimum order $90",
      icon: <TbTruckDelivery />,
    },
    {
      id: 3,
      title: "Free Shipping",
      subtitle: "Minimum order $90",
      icon: <TbTruckDelivery />,
    },
    {
      id: 4,
      title: "Free Shipping",
      subtitle: "Minimum order $90",
      icon: <TbTruckDelivery />,
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
