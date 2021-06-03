import styled from "@emotion/styled";

export const InfoContainerCustom = styled.div`
  display: flex;
  position: fixed;
  top: 10%;
  left: 70%;
  border-radius: 20px;
  width: 290px;
  height: 265px;
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  font-weight: bold;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const TextContainer = styled.div`
  display: flex;
  min-width: 290px;
  flex-direction: column;
`;

export const TextInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: right;
`;
export const DescriptionText = styled.p`
  display: flex;
  flex-direction: column-reverse;
  align-self: baseline;
  position: absolute;
  bottom: 10%;
  padding: 5px;
  text-align: center;
  color: #e76f51;
`;

export const TextEspacement = styled.p`
  padding: 10px;
  color: #264653;
`;

export const InfoRequestCustom = styled(TextEspacement)`
  color: #e76f51;
`;

export const AbilitiesContainer = styled.div`
  display: flex;
  align-items: center;
  color: #e76f51;
`;
