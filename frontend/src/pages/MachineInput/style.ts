import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 100px 20px;
  background: #0f172a;
  color: #eaf3ff;
  text-align: center;
  min-height: 100vh;

  h2 {
    font-size: 2.2rem;
    font-weight: 700;
    color: #38bdf8;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    padding: 60px 15px;

    h2 {
      font-size: 1.6rem;
      margin-bottom: 25px;
    }
  }
`;

export const FormCard = styled.div`
  background: #162032;
  border-radius: 18px;
  max-width: 650px;
  margin: 0 auto;
  padding: 2rem;
  box-shadow: 0 6px 25px rgba(59, 134, 231, 0.25);

  @media (max-width: 768px) {
    padding: 1.2rem;
    max-width: 100%;
    border-radius: 12px;
  }
`;

export const FormTitle = styled.h3`
  color: #5aa0ff;
  font-size: 1.2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  color: #bcd3ff;
  text-align: left;
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  border-radius: 8px;
  border: 1px solid #2b3b52;
  background: #1e293b;
  color: #eaf3ff;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: #38bdf8;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.6rem;
  border-radius: 8px;
  border: 1px solid #2b3b52;
  background: #1e293b;
  color: #eaf3ff;

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;

export const Button = styled.button`
  background: linear-gradient(90deg, #3b82f6, #2563eb);
  color: #fff;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #60a5fa, #3b82f6);
    transform: translateY(-2px);
  }

  &:disabled {
    background: #475569;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 48%;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

export const ResultContainer = styled.div`
  margin-top: 2rem;
  background: #1e293b;
  border-radius: 12px;
  max-width: 650px;
  margin-inline: auto;
  padding: 1.5rem;
  box-shadow: 0 6px 15px rgba(59, 134, 231, 0.25);

  h3 {
    color: #5aa0ff;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.9rem;
  }
`;

export const RecommendationCard = styled.div<{ severity?: string }>`
  background: ${({ severity }) =>
    severity === "critical"
      ? "#b91c1c"
      : severity === "warning"
      ? "#92400e"
      : "#0f766e"};
  color: #f1f5f9;
  padding: 0.9rem;
  border-radius: 8px;
  margin-bottom: 0.7rem;
  text-align: left;
  border-left: 5px solid
    ${({ severity }) =>
      severity === "critical"
        ? "#ef4444"
        : severity === "warning"
        ? "#fbbf24"
        : "#14b8a6"};

  strong {
    font-size: 1rem;
  }

  p {
    margin: 0.4rem 0;
    font-size: 0.9rem;
  }

  small {
    color: #cbd5e1;
  }

  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 0.85rem;
  }
`;

// Stepper Styles
export const StepperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
  gap: 0;

  @media (max-width: 768px) {
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 0.5rem;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: #475569;
      border-radius: 4px;
    }
  }
`;

export const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-shrink: 0;
`;

export const StepCircle = styled.div<{ active?: boolean; completed?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ completed, active }) =>
    completed ? "#8B5CF6" : active ? "#7C3AED" : "transparent"};
  border: 3px solid ${({ completed, active }) =>
    completed ? "#8B5CF6" : active ? "#7C3AED" : "#3F3F46"};
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s ease;
  min-width: 32px;

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: 0.8rem;
  }
`;

export const StepLine = styled.div<{ completed?: boolean }>`
  width: 60px;
  height: 3px;
  background: ${({ completed }) => (completed ? "#8B5CF6" : "#3F3F46")};
  margin: 0 -2px;
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    width: 35px;
  }
`;

export const StepLabel = styled.span<{ active?: boolean }>`
  display: none;
`;
