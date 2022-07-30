import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';

export const PageHeading = styled.h1`
	font: ${theme.text.display2};
	color: ${theme.dark.highContrast};
	white-space: nowrap;
  grid-area: 2/2/3/4;
  gap: .65rem;
`;
