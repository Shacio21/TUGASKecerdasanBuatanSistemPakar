import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 100px 20px;
  background: #0f172a;
  color: #eaf3ff;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: #3b86e7;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #b7d3ff;
  margin-bottom: 50px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  justify-items: center;
`;

export const FeatureCard = styled.div`
  background: #1e293b;
  border-radius: 20px;
  padding: 30px 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  max-width: 300px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(59, 134, 231, 0.4);
  }
`;

export const FeatureIcon = styled.div`
  width: 90px;
  height: 90px;
  margin: 0 auto 20px auto;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  color: #5aa0ff;
  margin-bottom: 10px;
`;

export const FeatureDescription = styled.p`
  font-size: 0.95rem;
  color: #bcd3ff;
  line-height: 1.5;
`;
