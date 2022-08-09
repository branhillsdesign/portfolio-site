import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';

export const InlineLink = styled.a`
	cursor: pointer;
	font: inherit;
	position: relative;
	&:after {
		content: '';
		display: block;
		position: absolute;
		margin: 0 auto;
		border-radius: 0.125rem 0.125rem 0 0;
		height: 0.125rem;
		width: 0;
		background-color: ${theme.dark.main};
	}
	&:hover {
		color: ${theme.dark.mainsubtle};
		&:after {
			transition: all 0.3s ease;
			width: 5.5rem;
		}
	}
`;
