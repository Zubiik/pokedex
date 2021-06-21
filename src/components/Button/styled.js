import styled from "@emotion/styled";

export const SearchButtonCustom = styled.div`
  margin: 5px;
  width: 10rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 80px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchTextCustom = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;
