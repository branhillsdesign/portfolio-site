import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';

const SideNavLinkStyles = styled.a`
	cursor: pointer;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 1rem 0;
	color: ${theme.dark.dim};
	white-space: nowrap;
	text-transform: uppercase;
	font: ${theme.text.allCaps};
	transition: all 0.3s ease;
	&:before {
		content: '';
		display: block;
		margin-right: 0.5rem;
		border-radius: 0 0.125rem 0.125rem 0;
		width: 0.125rem;
		height: 0;
		background-color: ${theme.dark.main};
	}
	&:hover {
		color: ${theme.dark.highContrast};
		&:before {
			transition: all 0.3s ease;
			height: 1rem;
		}
	}
`;

export const SideNavLink = (props) => {
	return (
		<>
			<SideNavLinkStyles {...props} />
		</>
	);
};
