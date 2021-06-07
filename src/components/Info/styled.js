import styled from "@emotion/styled";

export const HandlerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

export const InfoContainerCustom = styled.div`
  border-radius: 20px;
  width: 19rem;
  height: 16rem;
  background: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  font-weight: bold;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  font-size: 14px;
`;

export const TextContainer = styled.div`
  display: flex;
  min-width: 19rem;
  flex-direction: column;
`;

export const TextInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: right;
`;
export const DescriptionText = styled.div`
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #e76f51;
`;

export const TextLabel = styled.p`
  padding: 1rem;
  color: #264653;
  display: flex;
`;

export const InfoRequestCustom = styled(TextLabel)`
  color: #e76f51;
`;

export const AbilitiesContainer = styled.div`
  display: flex;
  align-items: center;
  color: #e76f51;
`;
