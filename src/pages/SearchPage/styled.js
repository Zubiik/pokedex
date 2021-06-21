import styled from "@emotion/styled";

export const SearchPageCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 414px;
  height: 403px;
  background: ${({ theme }) => theme.background.transparentGrey};
`;

export const ImgCustom = styled.div`
  max-width: 5rem;
  max-height: 5rem;
  margin: 30px;
  display: flex;
  justify-content: center;
`;
export const ImgUrl = styled.img`
  max-width: 5rem;
  max-height: 5rem;
  display: flex;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: inherit;
  margin: 5px;
  min-width: 100%;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;
