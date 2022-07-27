import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';

export const ContentBlock = styled.section`
	display: flex;
	flex-direction: column;
  width: auto;
  height: 100%;
	aspect-ratio: 1/1.6;
	border-radius: 6px;
	background-color: ${theme.dark.bg10};
  gap: ${(props) => props.gap || 'null'};
`;
