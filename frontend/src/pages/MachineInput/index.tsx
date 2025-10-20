import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  SectionContainer,
  FormCard,
  FormTitle,
  Label,
  Input,
  Select,
  Button,
  ResultContainer,
  RecommendationCard,
  StepperContainer,
  StepWrapper,
  StepCircle,
  StepLine,
  StepLabel,
} from "./style";

// Interface menyesuaikan schema MachineState
interface MachineState {
  machine_id: string;
  last_chuck_grease?: string;
  last_door_interlock_inspect?: string;
  last_coolant_change?: string;
  last_lubrication_cycle?: string;
  hpu_oil_level_ok?: boolean;
  coolant_level_ok?: boolean;
  low_lube_alert?: boolean;
  has_robot_cell?: boolean;
  lexan_window_installed_date?: string;
  coolant_concentration_pct?: number;
}

// Interface untuk hasil rekomendasi
interface Recommendation {
  id: string;
  title: string;
  detail: string;
  severity: string;
  recommended_action: string;
  until_due?: number | null;
}

const steps = [
  { 
    name: "machine_id", 
    label: "ID Mesin (contoh: ST20-001)", 
    type: "text" 
  },
  { 
    name: "last_chuck_grease", 
    label: "Tanggal Grease Chuck Terakhir (kapan terakhir chuck diberi grease pelumas?)", 
    type: "date" 
  },
  { 
    name: "last_door_interlock_inspect", 
    label: "Tanggal Inspeksi Door Interlock (kapan terakhir pemeriksaan pintu enclosure dilakukan?)", 
    type: "date" 
  },
  { 
    name: "coolant_level_ok", 
    label: "Level Coolant OK? (Apakah level cairan coolant masih cukup?)", 
    type: "boolean" 
  },
  { 
    name: "coolant_concentration_pct", 
    label: "Konsentrasi Coolant (%) (masukkan nilai konsentrasi coolant saat ini, ideal >5%)", 
    type: "number" 
  },
  { 
    name: "low_lube_alert", 
    label: "Low Lube Alert? (Apakah mesin menunjukkan peringatan pelumas rendah?)", 
    type: "boolean" 
  },
  { 
    name: "has_robot_cell", 
    label: "Memiliki Robot Cell? (Apakah mesin ini terhubung dengan sistem robot otomatis?)", 
    type: "boolean" 
  },
  { 
    name: "lexan_window_installed_date", 
    label: "Tanggal Instalasi Lexan Window (kapan jendela pelindung Lexan dipasang?)", 
    type: "date" 
  },
];


const BASE_URL = "http://localhost:8000"; // ubah sesuai IP server FastAPI kamu

const LatheMaintenanceForm: React.FC = () => {
  const [formData, setFormData] = useState<MachineState>({
    machine_id: "",
    coolant_level_ok: true,
    hpu_oil_level_ok: true,
    low_lube_alert: false,
    has_robot_cell: false,
  });

  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value, type } = e.target;
    let val: any = value;

    if (type === "number") val = parseFloat(value);
    if (type === "select-one") val = value === "true";

    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));
  const isLastStep = step === steps.length;

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/recommend`, formData);
      setRecommendations(res.data);
    } catch (err) {
      console.error(err);
      alert("Gagal mengirim data ke backend!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionContainer>
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Lathe PM Expert System (Haas ST-20)
      </motion.h2>

      <FormCard>
        {/* 🔹 Stepper */}
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

        {/* 🔹 Form step */}
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
              <Label>{steps[step].label}</Label>

              {steps[step].type === "boolean" ? (
                <Select
                  name={steps[step].name}
                  value={String((formData as any)[steps[step].name] ?? "true")}
                  onChange={handleChange}
                >
                  <option value="true">Ya</option>
                  <option value="false">Tidak</option>
                </Select>
              ) : (
                <Input
                  type={steps[step].type}
                  name={steps[step].name}
                  value={(formData as any)[steps[step].name] ?? ""}
                  onChange={handleChange}
                />
              )}

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
                <Button onClick={prevStep} disabled={step === 0}>
                  Sebelumnya
                </Button>
                <Button onClick={nextStep}>Selanjutnya</Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="submit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <FormTitle>Konfirmasi Data</FormTitle>
              <ul style={{ textAlign: "left", color: "#bcd3ff", fontSize: "0.9rem" }}>
                {Object.entries(formData).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key.replaceAll("_", " ")}:</strong> {String(value)}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
                <Button onClick={prevStep}>Kembali</Button>
                <Button onClick={handleSubmit} disabled={loading}>
                  {loading ? "Memproses..." : "Kirim ke Sistem"}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </FormCard>

      {/* 🔹 Hasil rekomendasi */}
      <AnimatePresence>
        {recommendations.length > 0 && (
          <ResultContainer
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h3>Rekomendasi Perawatan:</h3>
            {recommendations.map((rec, i) => (
              <RecommendationCard
                key={i}
                severity={rec.severity}
              >
                <strong>{rec.title}</strong>
                <p>{rec.detail}</p>
                <small>
                  {rec.recommended_action}
                  {rec.until_due !== null && (
                    <> (Jatuh tempo dalam {rec.until_due} hari)</>
                  )}
                </small>
              </RecommendationCard>
            ))}
          </ResultContainer>
        )}
      </AnimatePresence>
    </SectionContainer>
  );
};

export default LatheMaintenanceForm;
