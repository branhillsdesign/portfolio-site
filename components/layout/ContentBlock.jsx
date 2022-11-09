/** @format */

import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';

export const ContentBlock = styled.div`
	display: flex;
	flex-direction: column;
  flex-wrap: wrap;
	gap: ${(props) => props.gap || '0'};
  & > * {
    min-width: ${(props) => props.childMinWidth};
  }
	/* grid-area: ${(props) => props.gridArea};
	grid-column: ${(props) => props.gridColumn || 'span 2'};
	grid-row: ${(props) => props.gridRow}; */
	${theme.breakpoints.lg} {
		min-width: 0;
	}
`;
