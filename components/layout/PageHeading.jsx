import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';

export const PageHeading = styled.h1`
	font: ${theme.text.display};
	color: ${theme.dark.highContrast};
	grid-area: 2/1/3/3;
`;
