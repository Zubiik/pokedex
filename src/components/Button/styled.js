import styled from "@emotion/styled";

export const SearchButtonCustom = styled.div`
  margin: 0.5rem;
  width: 10rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 5rem;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchTextCustom = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;
