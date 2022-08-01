import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLink } from '../primitives/NavLink';
import { SideNavLink } from '../primitives/SideNavLink';
import PropTypes from 'prop-types';
import * as Icon from '../../assets/icons/Duotone/Index';
import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';

// Main Navigation Menu Items and Links
const mainNavMenu = [
	{ title: 'About', href: '/' },
	{ title: 'Writing', href: '/writing' },
	{ title: 'Tools', href: '/tools' },
	{ title: 'Keeps', href: '/keeps' },
	{ title: 'Work', href: '/work' },
];

// Side Navigation Menu Items and Links
const sideNavMenu = {
	about: [
		{ title: 'Info', href: '/' },
		{ title: 'Books', href: '/about/books' },
		{ title: 'Movies', href: '/about/movies' },
		{ title: 'Golf', href: '/about/golf' },
	],

	writing: [
		{ title: 'Design', href: '/writing/design' },
		{ title: 'Ideas', href: '/writing/ideas' },
		{ title: 'ADHD', href: '/writing/adhd' },
		{ title: 'Dad Life', href: '/writing/dad-life' },
	],

	tools: [
		{ title: 'Figma Plugins', href: '/tools/figma-plugins' },
		{ title: 'Figma Files', href: '/tools/figma-files' },
		{ title: 'Apps', href: '/tools/apps' },
		{ title: 'Frameworks', href: '/tools/frameworks' },
		{ title: 'Extensions', href: '/tools/extensions' },
	],

	keeps: [
		{ title: 'Portfolios', href: '/keeps/portfolios' },
		{ title: 'Articles', href: '/keeps/articles' },
		{ title: 'Cool Things', href: '/keeps/cool-things' },
		{ title: 'Podcasts', href: '/keeps/podcasts' },
	],

	work: [
		{ title: 'BizLibrary', href: '/work/bizlibrary' },
		{ title: 'RSH', href: '/work/rsh' },
		{ title: 'Open Source', href: '/work/open-source' },
	],
};

// Desktop Main Nav Layout Styles
const NavWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: -1rem;
	grid-area: 1/2/2/4;
	padding-right: 5vw;
`;

const MainNavStyles = styled.nav`
	display: flex;
	flex-direction: row;
`;

// Create Main Navigation Menu from JSON Above
export const DesktopMainNav = (props) => {
	return (
		<>
			<NavWrapper>
				<MainNavStyles {...props}>
					{mainNavMenu.map((navItem, index) => {
						return (
							<NavLink key={index} href={navItem.href}>
								{navItem.title}
							</NavLink>
						);
					})}
				</MainNavStyles>
				<Icon.MakerOsIcon16Px
					color={theme.dark.main}
					width='1.2rem'
					height='1.2rem'
				/>
			</NavWrapper>
		</>
	);
};

// Desktop Side Nav Layout Styles
const SideNavStyles = styled.nav`
	display: flex;
	flex-direction: column;
	grid-area: 3/2/4/4;
	max-width: 17rem;
`;

const NavTitle = styled.div`
	font: ${theme.text.h5};
	color: ${theme.dark.highContrast};
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 1rem;
	white-space: nowrap;
	&:after {
		margin-left: 1rem;
		content: '';
		display: block;
		min-width: 3rem;
		width: 100%;
		background-color: ${theme.dark.main};
		height: 0.125rem;
	}
`;

export const DesktopSideNav = (props) => {
	return (
		<>
			<SideNavStyles {...props}>
				<NavTitle>About</NavTitle>
				{sideNavMenu.about.map((sideNavItem, index) => {
					return (
						<>
							<SideNavLink key={index} href={sideNavItem.href}>
								{sideNavItem.title}
							</SideNavLink>
						</>
					);
				})}
			</SideNavStyles>
		</>
	);
};
