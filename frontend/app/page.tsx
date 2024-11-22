"use client"

import React from "react";
import Container from "../components/pages/Container";
import HeroSection from "../components/pages/HeroSection";
import Advantages from "../components/pages/Advantages";
import CalcBlock from "../components/pages/CalcBlock";
import OurApproach from "../components/pages/OurApproach";
import Reviews from "../components/pages/Reviews";
import Faq from "../components/pages/Faq";
import Test from "../components/pages/Test";

import { motion } from "framer-motion";

const SECTIONS = [
  { id: "advantages", Component: Advantages },
  { id: "calc-block", Component: CalcBlock, fullWidth: true },
  { id: "our-approach", Component: OurApproach },
  { id: "reviews", Component: Reviews },
  { id: "faq", Component: Faq },
  { id: "test", Component: Test },
];

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Home: React.FC = () => {
  return (
    <Container>
      <HeroSection />
      <main className="flex flex-col gap-24 py-24">
        {SECTIONS.map(({ id, Component, fullWidth }) => (
          <motion.div
            key={id}
            className={fullWidth ? "full-width" : ""}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animationVariants}
          >
            <Component />
          </motion.div>
        ))}
      </main>
    </Container>
  );
};

export default Home;
