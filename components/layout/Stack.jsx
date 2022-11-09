/** @format */

import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';

export const Stack = styled.div`
	position: relative !important;
	grid-area: 2/2/3/4;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	max-width: 65ch;
	margin: 0 auto;
	& > * {
		margin-block: 0;
	}
	& > * + * {
		margin-block-start: 1.5rem;
	}
	${theme.breakpoints.lg} {
		grid-area: 2/1/3/3;
	}
`;
