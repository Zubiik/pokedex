import styled from "@emotion/styled";

export const InputContainerCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
