import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import fiturData from "../../content/FiturSistemPakarContent.json";
import {
  SectionContainer,
  SectionTitle,
  SectionSubtitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
} from "./style";

const lottieFiles: Record<string, { default: any }> = import.meta.glob(
  "../../assets/lottie/*.json",
  { eager: true }
);

const FiturSistemPakar: React.FC = () => {
  return (
    <SectionContainer id="fitur">
      <SectionTitle>{fiturData.title}</SectionTitle>
      <SectionSubtitle>{fiturData.subtitle}</SectionSubtitle>

      <FeaturesGrid>
        {fiturData.features.map((fitur, index) => {
          const animationPath = `../../${fitur.icon}`;
          const animationData =
            (lottieFiles[animationPath] as any)?.default ||
            lottieFiles[animationPath];

          return (
            <motion.div
              key={fitur.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <FeatureCard>
                <FeatureIcon>
                  {animationData && (
                    <Lottie animationData={animationData} loop={true} />
                  )}
                </FeatureIcon>
                <FeatureTitle>{fitur.title}</FeatureTitle>
                <FeatureDescription>{fitur.description}</FeatureDescription>
              </FeatureCard>
            </motion.div>
          );
        })}
      </FeaturesGrid>
    </SectionContainer>
  );
};

export default FiturSistemPakar;
