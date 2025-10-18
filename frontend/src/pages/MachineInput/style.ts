import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 100px 20px;
  background: #0f172a;
  color: #eaf3ff;
  text-align: center;
  min-height: 100vh;

  h2 {
    font-size: 2.3rem;
    font-weight: 700;
    margin-bottom: 40px;
    color: #3b86e7;
  }
`;

export const FormCard = styled.div`
  background: #162032;
  border-radius: 18px;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  box-shadow: 0 6px 25px rgba(59, 134, 231, 0.25);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 35px rgba(59, 134, 231, 0.35);
  }
`;

export const FormTitle = styled.h3`
  text-align: center;
  color: #5aa0ff;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-weight: 600;
  color: #bcd3ff;
  text-align: left;
`;

export const Select = styled.select`
  padding: 0.6rem;
  border: 1px solid #2b3b52;
  border-radius: 8px;
  background: #1e293b;
  color: #eaf3ff;
  font-size: 0.95rem;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: #3b86e7;
    background: #25344a;
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
  font-size: 1rem;
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
`;

export const ResultContainer = styled.div`
  margin-top: 2rem;
  background: #1e293b;
  border-radius: 12px;
  max-width: 600px;
  margin-inline: auto;
  padding: 1.5rem;
  box-shadow: 0 6px 15px rgba(59, 134, 231, 0.25);

  h3 {
    color: #5aa0ff;
    margin-bottom: 1rem;
  }
`;

export const Recommendation = styled.p`
  background: #0f766e;
  color: #e0f2f1;
  padding: 0.8rem;
  border-radius: 8px;
  margin-bottom: 0.6rem;
  border-left: 4px solid #14b8a6;
  text-align: left;
  font-size: 0.95rem;
`;
