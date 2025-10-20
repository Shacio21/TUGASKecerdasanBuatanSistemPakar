import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  SectionContainer,
  FormCard,
  FormTitle,
  Label,
  Select,
  Button,
  ResultContainer,
  Recommendation,
  StepperContainer,
  StepWrapper,
  StepCircle,
  StepLine,
  StepLabel,
} from "./style";

interface MaintenanceInput {
  chuck_condition: string;
  tailstock_condition: string;
  spindle_vibration: string;
  lubrication_status: string;
  oil_pressure: string;
  coolant_filter: string;
}

const steps = [
  { name: "chuck_condition", label: "Chuck", options: ["baik", "aus"] },
  { name: "tailstock_condition", label: "Tailstock", options: ["baik", "tidak sejajar"] },
  { name: "spindle_vibration", label: "Spindle", options: ["tidak ada getaran", "ada getaran"] },
  { name: "lubrication_status", label: "Pelumasan", options: ["lancar", "tersumbat"] },
  { name: "oil_pressure", label: "Tekanan Oli", options: ["normal", "rendah"] },
  { name: "coolant_filter", label: "Filter Pendingin", options: ["bersih", "kotor"] },
];

const MaintenanceForm: React.FC = () => {
  const [formData, setFormData] = useState<MaintenanceInput>({
    chuck_condition: "baik",
    tailstock_condition: "baik",
    spindle_vibration: "tidak ada getaran",
    lubrication_status: "lancar",
    oil_pressure: "normal",
    coolant_filter: "bersih",
  });

  const [step, setStep] = useState(0);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://192.168.1.6:8000/evaluate", formData);
      setRecommendations(res.data.rekomendasi);
    } catch (err) {
      console.error(err);
      alert("Gagal mengirim data ke backend");
    } finally {
      setLoading(false);
    }
  };

  const isLastStep = step === steps.length;

  return (
    <SectionContainer>
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sistem Evaluasi Maintenance
      </motion.h2>

      {/* 🔹 Card utama berisi Stepper + Form */}
      <FormCard>
        {/* 🔹 Stepper di dalam card */}
        <StepperContainer>
          {steps.map((s, i) => (
            <StepWrapper key={i}>
              <StepCircle
                active={i === step}
                completed={i < step}
                onClick={() => setStep(i)}
              >
                {i < step ? "✔" : i + 1}
              </StepCircle>
              {i < steps.length - 1 && <StepLine completed={i < step - 0} />}
              <StepLabel active={i === step}>{s.label}</StepLabel>
            </StepWrapper>
          ))}
        </StepperContainer>

        {/* 🔹 Isi form atau konfirmasi */}
        <AnimatePresence mode="wait">
          {!isLastStep ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <FormTitle>Langkah {step + 1} dari {steps.length}</FormTitle>
              <Label>{steps[step].label}:</Label>
              <Select
                name={steps[step].name}
                value={(formData as any)[steps[step].name]}
                onChange={handleChange}
              >
                {steps[step].options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </Select>

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
                <Button type="button" onClick={prevStep} disabled={step === 0}>
                  Sebelumnya
                </Button>
                <Button type="button" onClick={nextStep}>
                  Selanjutnya
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="submit-step"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <FormTitle>Konfirmasi & Kirim</FormTitle>
              <ul style={{ textAlign: "left", color: "#bcd3ff", fontSize: "0.9rem" }}>
                {Object.entries(formData).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key.replace("_", " ")}:</strong> {value}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
                <Button type="button" onClick={prevStep}>
                  Kembali
                </Button>
                <Button type="button" onClick={handleSubmit} disabled={loading}>
                  {loading ? "Memproses..." : "Kirim Evaluasi"}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </FormCard>

      {/* 🔹 Hasil rekomendasi di luar card */}
      <AnimatePresence>
        {recommendations.length > 0 && (
          <ResultContainer
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h3>Hasil Rekomendasi:</h3>
            {recommendations.map((rec, i) => (
              <Recommendation key={i}>{rec}</Recommendation>
            ))}
          </ResultContainer>
        )}
      </AnimatePresence>
    </SectionContainer>
  );
};

export default MaintenanceForm;
