import styled from 'styled-components';

export const NextImageWrapper = styled.div`
	border-radius: ${(props) => props.borderRadius || '6px'};
	position: relative !important;
  width: 100%;
  height: 20rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
