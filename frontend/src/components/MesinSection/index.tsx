import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SectionContainer,
  MachineWrapper,
  MachineCard,
  MachineTitle,
  MachineImage,
  MachineDescription,
  MaintenanceList,
  MaintenanceItem,
  SourceText,
} from "./style";

// Import JSON content
import BubutContent from "../../content/machines/MesinBubut(Lathe)Content.json";
import FraisContent from "../../content/machines/MesinFrais(Milling)Content.json";
import PressContent from "../../content/machines/MesinPress(Stamping)Content.json";
import PLCContent from "../../content/machines/PLCContent.json";

const MachineSection: React.FC = () => {
  const machines = [BubutContent, FraisContent, PressContent, PLCContent];
  const [selected, setSelected] = useState<string | null>(null);

  const toggleCard = (title: string) => {
    setSelected(selected === title ? null : title);
  };

  return (
    <SectionContainer id="machines">
      <h2>Daftar Mesin</h2>

      <MachineWrapper>
        {machines.map((machine) => {
          const isOpen = selected === machine.title;

          return (
            <motion.div
              key={machine.title}
              layout
              transition={{ layout: { duration: 0.45, type: "spring" } }}
              style={{ marginBottom: "20px" }}
            >
              <MachineCard
                onClick={() => toggleCard(machine.title)}
                expanded={isOpen}
                as={motion.div}
                layout
                whileHover={!isOpen ? { scale: 1.02 } : {}}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                <MachineTitle>{machine.title}</MachineTitle>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.35 }}
                      style={{ overflow: "hidden" }}
                    >
                      <MachineImage src={machine.picture} alt={machine.title} />
                      <MachineDescription>{machine.description}</MachineDescription>

                      <MaintenanceList>
                        {machine.maintenance.map((m, index) => (
                          <MaintenanceItem key={index}>
                            <strong>{m.title}</strong>
                            <p>{m.text}</p>
                          </MaintenanceItem>
                        ))}
                      </MaintenanceList>

                      <SourceText>Sumber: {machine.source}</SourceText>
                    </motion.div>
                  )}
                </AnimatePresence>
              </MachineCard>
            </motion.div>
          );
        })}
      </MachineWrapper>
    </SectionContainer>
  );
};

export default MachineSection;



