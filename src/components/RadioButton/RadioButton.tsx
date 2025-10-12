import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const StyledLabel = styled.label<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  font-size: 1rem;
`;

const StyledInput = styled.input`
  margin-right: 8px;
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  checked = false,
  disabled = false,
}) => {
  return (
    <StyledLabel $disabled={disabled}>
      <StyledInput
        type="radio"
        name={name}
        checked={checked}
        disabled={disabled}
        readOnly
      />
      {label}
    </StyledLabel>
  );
};
