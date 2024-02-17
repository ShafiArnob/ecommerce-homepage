import Container from "./components/Container";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NavbarSecondary from "./components/NavbarSecondary";

function App() {
  return (
    <Container>
      <Navbar />
      <NavbarSecondary />
      <HeroSection />
    </Container>
  );
}

export default App;
