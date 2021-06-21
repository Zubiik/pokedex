import styled from "@emotion/styled";

export const InputContainerCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InputCustom = styled.input`
  width: 18rem;
  height: 4rem;
`;

export const TextCustom = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: bold;
  font-size: ${({ theme }) => theme.size.little};
  display: flex;
  align-self: flex-start;
`;
