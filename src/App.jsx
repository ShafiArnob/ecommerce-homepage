import Container from "./components/Container";
import DiscountSection from "./components/DiscountSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NavbarSecondary from "./components/NavbarSecondary";

function App() {
  return (
    <Container>
      <Navbar />
      <NavbarSecondary />
      <HeroSection />
      <DiscountSection />
    </Container>
  );
}

export default App;
