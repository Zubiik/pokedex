import styled from "@emotion/styled";

export const HeaderCustom = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  justify-content: center;
  border: 1px solid blue;
`;

export const TextCustom = styled.div`
  font-size: ${({ theme }) => theme.size.fat};
  color: ${({ theme }) => theme.colors.mediumGrey};
  padding: 1rem;
`;
