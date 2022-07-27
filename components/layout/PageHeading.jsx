import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';

export const PageHeading = styled.h1`
	font: ${theme.text.display2};
	color: ${theme.dark.highContrast};
	margin-left: 5rem;
	white-space: nowrap;
	overflow-x: hidden;
  padding: 4rem 0;
`;
