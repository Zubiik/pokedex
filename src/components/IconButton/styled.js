import styled from "@emotion/styled";

export const RandomuttonCustom = styled.button`
  border-radius: 75px;
  width: 65px;
  background-color: ${({ theme }) => theme.colors.orange};
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  transition-duration: 0.4s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightOrange};
    color: white;
  }
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;
