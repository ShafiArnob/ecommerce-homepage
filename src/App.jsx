import Container from "./components/Container";
import DiscountSection from "./components/DiscountSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NavbarSecondary from "./components/NavbarSecondary";
import { ProductsSection } from "./components/ProductsSection";

function App() {
  return (
    <Container>
      <Navbar />
      <NavbarSecondary />
      <HeroSection />
      <DiscountSection />
      <ProductsSection />
    </Container>
  );
}

export default App;
