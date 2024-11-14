// app/page.tsx или pages/index.tsx
import Container from "./components/Container";
import HeroSection from "./components/HeroSection";
import Advantages from "./components/Advantages";
import CalcBlock from "./components/CalcBlock";
import OurApproach from "./components/OurApproach";


const Home = () => {
  return (
    <Container>
      <HeroSection />
      <main className="flex flex-col gap-[100px] pt-[100px]">
        <Advantages/>
        <div className="full-width">
          <CalcBlock/>  
        </div>
        <OurApproach/>
      </main>
    </Container>
  );
};

export default Home;
