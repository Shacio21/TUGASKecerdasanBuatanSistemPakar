import styled from "styled-components";

export const HeroContainer = styled.section`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: calc(100vh - 10px);
  color: #fff;
  overflow: hidden;
  position: relative;
`;

export const HeroContent = styled.div`
  z-index: 2;
  max-width: 800px;
  text-align: center;
  color: #eaf3ff;
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.3;
  color: #3b86e7;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-top: 20px;
  color: #b7d3ff;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const AnimationWrapper = styled.div`
  position: relative;
  width: 450px;
  margin: 0 auto;
  opacity: 0.9;
  z-index: 1;

  @media (max-width: 768px) {
    width: 330px;
  }
`;
