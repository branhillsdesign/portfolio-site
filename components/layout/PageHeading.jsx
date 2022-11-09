/** @format */

import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';

export const PageHeading = styled.h1`
	${theme.text.display};
	color: ${theme.dark.highContrast};
	grid-area: 1/1/2/4;
	padding-bottom: 1.5rem;
	${theme.breakpoints.lg} {
		grid-area: 1/1/2/3;
		margin: 0 auto;
	}
`;
