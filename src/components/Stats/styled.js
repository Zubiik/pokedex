import styled from "@emotion/styled";

export const ArrayContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background-color: #c4c4c4;
  max-width: max-content;
  padding: 0.5rem;
`;
export const StatsContainer = styled.div`
  display: flex;
  border: #c4c4c4 solid 1px;
`;
export const TextContainer = styled.div`
  display: flex;
`;

export const TextCustom = styled.div`
  display: flex;
  width: 4rem;
  height: 1rem;
`;
export const LonelyStat = styled.div`
  background-color: #38a8d5;
  border: white 1px solid;
  width: 4rem;
  height: 1rem;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const TextToHide = styled.p`
  color: blueviolet;
`;

export const EmptyStat = styled(LonelyStat)`
  background-color: white;
  border: #c4c4c4 1px solid;
  width: 4rem;
  height: 1rem;
`;
