import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';

export const PageHeading = styled.h1`
	${theme.text.display};
	color: ${theme.dark.highContrast};
	grid-area: 2/1/3/3;
  padding-bottom: 1.5rem;
	${theme.breakpoints.lg} {
		grid-area: 2/1/3/2;
    white-space: normal;
	}
`;
