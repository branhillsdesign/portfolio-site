import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig.jsx';

export const StyledLink = styled.a`
	display: flex;
	flex-direction: column;
	align-items: center;
	&:after {
		content: '';
		display: block;
		margin-top: 0.125rem;
		border-radius: 0.125rem 0.125rem 0 0;
		width: 0;
		height: 0.125rem;
		background-color: ${theme.dark.main};
		transition: all 0.3s ease;
	}
	&:hover {
		color: ${(props) => props.color || 'inherit'};
		&:after {
			transition: all 0.3s ease;
			width: 100%;
		}
	}
`;
