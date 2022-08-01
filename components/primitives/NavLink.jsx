import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';
import { useRouter } from 'next/router';
import { ReactPropTypes } from 'react';
import { Link } from 'next/link';
import react, { Children } from 'react';

const NavLinkStyles = styled.a`
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0.5rem 1rem;
	color: ${theme.dark.dim};
	white-space: nowrap;
	font: ${theme.text.labellarge};
	transition: all 0.3s ease;
	&:after {
		content: '';
		display: block;
		margin-top: 0.5rem;
		border-radius: 0.125rem 0.125rem 0 0;
		width: 0;
		height: 0.125rem;
		background-color: ${theme.dark.main};
	}
	&:hover {
		color: ${theme.dark.highContrast};
		&:after {
      transition: all 0.3s ease;
			width: 2rem;
		}
	}
`;

const ActiveLink = ({ children, activeNavLink, ...props }) => {
	const { asPath } = useRouter();
	const child = Children.only(children);
};

export const NavLink = (props) => {
	return (
		<>
			<NavLinkStyles {...props} />
		</>
	);
};


