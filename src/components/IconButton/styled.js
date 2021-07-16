import styled from "@emotion/styled";

export const RandomButtonCustom = styled.button`
  border-radius: 4rem;
  width: 4rem;
  background-color: ${({ theme }) => theme.colors.orange};
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  transition-duration: 0.4s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightOrange};
    color:${({ theme }) => theme.colors.white};
  }
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;
