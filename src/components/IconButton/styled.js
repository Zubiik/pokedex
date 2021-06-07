import styled from "@emotion/styled";

export const RandomuttonCustom = styled.div`
  border-radius: 75px;
  width: 65px;
  background-color: ${({ theme }) => theme.colors.orange};
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`;
