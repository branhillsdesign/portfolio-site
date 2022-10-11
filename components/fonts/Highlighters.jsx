import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';

export const Highlighter = styled.span`
	color: ${(props) => props.color || theme.dark.main};
  font: ${(props) => props.font || 'inherit'};
  width: ${(props) => props.width || 'inherit'};
  text-decoration: ${(props) => props.textDecoration || 'inherit'};
`;
