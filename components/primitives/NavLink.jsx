import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';
import { withRouter } from 'next/router';

const StyledNavLink = styled.a`
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0.5rem 1rem;
	color: ${({ href, currentPath }) =>
		href === currentPath ? `${theme.dark.highContrast}` : `${theme.dark.dim}`};
	white-space: nowrap;
	font: ${theme.text.labellarge};
	transition: all 0.3s ease;
	&:after {
		content: '';
		display: block;
		margin-top: 0.5rem;
		border-radius: 0.125rem 0.125rem 0 0;
		width: ${({ href, currentPath }) => (href === currentPath ? '2rem' : '0')};
		height: 0.125rem;
		background-color: ${theme.dark.main};
	}
	&:hover {
		color: ${theme.dark.mainsubtle};
		&:after {
			transition: all 0.3s ease;
			width: 2rem;
		}
	}
`;

function NavLink({ children, href, router }) {
	const handleClick = (e) => {
		e.preventDefault();
    router.push(href);
	};
	return (
		<>
      <StyledNavLink
				href={href}
				onClick={handleClick}
				currentPath={router.asPath}>
				{children}
			</StyledNavLink>
		</>
	);
}

export default withRouter(NavLink);
