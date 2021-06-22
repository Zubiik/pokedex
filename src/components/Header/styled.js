import styled from "@emotion/styled";

export const HeaderCustom = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  justify-content: center;
`;

export const TextCustom = styled.p`
  font-size: ${({ theme }) => theme.size.fat};
  color: ${({ theme }) => theme.colors.mediumGrey};
  padding: 0.3rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightOrange};
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;
