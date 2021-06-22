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
  background: ${({ theme }) => theme.background.transparentGrey};
  padding: 1rem;
  font-weight: bold;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  font-size: ${({ theme }) => theme.size.little};
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
  color: ${({ theme }) => theme.colors.orange};
`;

export const TextLabel = styled.p`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.metalBlue};
  display: flex;
`;

export const InfoRequestCustom = styled(TextLabel)`
  color: ${({ theme }) => theme.colors.orange};
`;

export const AbilitiesContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.orange};
`;

export const AbilityName = styled.div`
  padding-right: 0.5rem; ;
`;
