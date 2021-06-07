import styled from "@emotion/styled";

export const SearchPageCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  width: 414px;
  height: 403px;
  background: ${({ theme }) => theme.background.transparentGrey};
`;

export const ImgCustom = styled.div`
  max-width: 5rem;
  max-height: 5rem;
  margin: 70px;
`;
export const ImgUrl = styled.img`
  max-width: 5rem;
  max-height: 5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  align-items: inherit;
  bottom: 60px;
  right: 5%;
  left: 5%;
`;

export const ImgContainer = styled.div`
  position: relative;
`;
