import styled from "@emotion/styled";
import { theme } from "../../theme";

export const ButtonCustom = styled.div`
  width: 8rem;
  height: 4rem;
  background-color: ${({ type, theme }) => {
    return theme.typeColors[type] || theme.typeColors.default;
  }};
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextCustom = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

export const TypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
