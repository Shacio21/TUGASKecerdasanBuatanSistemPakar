import React from "react";
import { useNavigate } from "react-router-dom";
import { CTAButtonStyled } from "./style";

interface CTAButtonProps {
  text: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/input");
  };

  return <CTAButtonStyled onClick={handleClick}>{text}</CTAButtonStyled>;
};

export default CTAButton;
