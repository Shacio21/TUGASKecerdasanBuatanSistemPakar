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
} from "./style";

interface MaintenanceInput {
  chuck_condition: string;
  tailstock_condition: string;
  spindle_vibration: string;
  lubrication_status: string;
  oil_pressure?: string;
  coolant_filter?: string;
}

const MaintenanceForm: React.FC = () => {
  const [formData, setFormData] = useState<MaintenanceInput>({
    chuck_condition: "baik",
    tailstock_condition: "baik",
    spindle_vibration: "tidak ada getaran",
    lubrication_status: "lancar",
    oil_pressure: "normal",
    coolant_filter: "bersih",
  });

  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:8000/evaluate", formData);
      setRecommendations(res.data.rekomendasi);
    } catch (err) {
      console.error(err);
      alert("Gagal mengirim data ke backend");
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
        Sistem Evaluasi Maintenance
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FormCard>
          <FormTitle>Form Pemeriksaan Mesin</FormTitle>

          <Label>Kondisi Chuck:</Label>
          <Select name="chuck_condition" onChange={handleChange}>
            <option value="baik">Baik</option>
            <option value="aus">Aus</option>
          </Select>

          <Label>Kondisi Tailstock:</Label>
          <Select name="tailstock_condition" onChange={handleChange}>
            <option value="baik">Baik</option>
            <option value="tidak sejajar">Tidak Sejajar</option>
          </Select>

          <Label>Getaran Spindle:</Label>
          <Select name="spindle_vibration" onChange={handleChange}>
            <option value="tidak ada getaran">Tidak Ada Getaran</option>
            <option value="ada getaran">Ada Getaran</option>
          </Select>

          <Label>Pelumasan:</Label>
          <Select name="lubrication_status" onChange={handleChange}>
            <option value="lancar">Lancar</option>
            <option value="tersumbat">Tersumbat</option>
          </Select>

          <Label>Tekanan Oli:</Label>
          <Select name="oil_pressure" onChange={handleChange}>
            <option value="normal">Normal</option>
            <option value="rendah">Rendah</option>
          </Select>

          <Label>Filter Pendingin:</Label>
          <Select name="coolant_filter" onChange={handleChange}>
            <option value="bersih">Bersih</option>
            <option value="kotor">Kotor</option>
          </Select>

          <Button type="submit" disabled={loading}>
            {loading ? "Memproses..." : "Evaluasi Sekarang"}
          </Button>
        </FormCard>
      </motion.form>

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
