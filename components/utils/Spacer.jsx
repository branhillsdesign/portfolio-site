import styled from "styled-components";

export const Spacer = styled.div`
  height: ${props => props.height || '1rem'};
  width: ${props => props.width || '0'};
`;