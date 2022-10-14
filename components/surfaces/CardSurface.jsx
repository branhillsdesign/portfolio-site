import styled from "styled-components";

export const CardSurface = styled.div`
  height: fit-content;
	background: rgba(255, 255, 255, 0.0512);
	border-radius: 7px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.13);
	padding: ${(props) => props.padding || 'null'};
`;
