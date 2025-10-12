import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.span<{ $color?: string;}>`
  color: ${(props) => props.$color || "#333"};
  font-size: 1rem;
  font-weight: 500;
`;

export const Label: React.FC<LabelProps> = ({ text, color }) => {
  return <StyledLabel $color={color}>{text}</StyledLabel>;
};
