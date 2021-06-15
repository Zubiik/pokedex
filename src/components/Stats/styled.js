import styled from "@emotion/styled";

export const ArrayContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  max-width: max-content;
  padding: 0.5rem;
`;
export const StatsContainer = styled.div`
  display: flex;
  border: ${({ theme }) => theme.colors.lightGrey} solid 1px;
`;
export const TextContainer = styled.div`
  display: flex;
`;

export const TextCustom = styled.div`
  display: flex;
  width: 4rem;
  height: 1rem;
`;
export const LonelyStat = styled.div`
  background-color: ${({ theme }) => theme.colors.skyBlue};
  border: ${({ theme }) => theme.colors.lightGrey} 1px solid;
  width: 4rem;
  height: 1rem;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const EmptyStat = styled(LonelyStat)`
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.colors.lightGrey} 1px solid;
  width: 4rem;
  height: 1rem;
`;
