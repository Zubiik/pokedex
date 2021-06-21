import styled from "@emotion/styled";

export const SearchButtonCustom = styled.button`
  width: 10rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 80px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.4s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightOrange};
    color: white;
  }
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const SearchTextCustom = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;
