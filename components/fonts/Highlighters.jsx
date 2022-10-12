import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';

export const Highlighter = styled.span`
  ${(props) => props.font || 'inherit'};
	color: ${(props) => props.color || theme.dark.main};
  width: ${(props) => props.width || 'inherit'};
  text-decoration: ${(props) => props.textDecoration || 'inherit'};
`;
