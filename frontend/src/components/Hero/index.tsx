import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/maintenanceweb.json";
import heroText from "../../content/HeroContent.json";
import CTAButton from "../../common/CTAButton/index";
import {
  HeroContainer,
  HeroContent,
  Title,
  Subtitle,
  AnimationWrapper,
} from "./style";

const Hero: React.FC = () => {
  const handleScroll = () => {
    const target = document.getElementById("about") || document.body;
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroContainer id="home">
      <HeroContent>
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Title>{heroText.title}</Title>
        </motion.div>

        {/* Subjudul */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <Subtitle>{heroText.subtitle}</Subtitle>
        </motion.div>

        {/* Animasi */}
        <AnimationWrapper
          as={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ margin: "1px auto" }}
        >
          <Lottie animationData={animationData} loop={true} />
        </AnimationWrapper>

        {/* Tombol CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <CTAButton text={heroText.buttonText} onClick={handleScroll} />
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
