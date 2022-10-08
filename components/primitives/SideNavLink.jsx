/** @format */

import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';
import { withRouter } from 'next/router';

const SideNavLinkStyles = styled.a`
	cursor: pointer;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 1rem 0;
	color: ${({ href, currentPath }) =>
		href === currentPath ? `${theme.dark.highContrast}` : `${theme.dark.dim}`};
	white-space: nowrap;
	text-transform: uppercase;
	${theme.text.allCaps};
	transition: all 0.3s ease;
	&:before {
		content: '';
		display: block;
		margin-right: 0.5rem;
		border-radius: 0 0.125rem 0.125rem 0;
		width: 0.125rem;
		height: ${({ href, currentPath, props }) =>
			href === currentPath ? '1rem' : '0'};
		background-color: ${theme.dark.main};
	}
	&:hover {
		color: ${theme.dark.mainsubtle};
		&:before {
			transition: all 0.3s ease;
			height: 1rem;
		}
	}
`;

function SideNavLink({ children, href, router }) {
	const handleClick = (e) => {
		e.preventDefault();
		router.push(href);
	};
	return (
		<>
			<SideNavLinkStyles
				href={href}
				onClick={handleClick}
				currentPath={router.asPath}>
				{children}
			</SideNavLinkStyles>
		</>
	);
}

export default withRouter(SideNavLink);
