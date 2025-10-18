import styled from "styled-components";

export const CTAButtonStyled = styled.button`
  margin-top: 20px;
  background-color: #3b86e7;
  color: #fff;
  font-weight: 600;
  font-size: 1.1rem;
  border: none;
  border-radius: 50px;
  padding: 14px 36px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(59, 134, 231, 0.5);

  &:hover {
    background-color: #5aa0ff;
    transform: translateY(-3px);
    box-shadow: 0 0 25px rgba(90, 160, 255, 0.7);
  }
`;
