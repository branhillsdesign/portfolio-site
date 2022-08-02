import React from 'react';
import NavLink from '../primitives/NavLink';
import { SideNavLink } from '../primitives/SideNavLink';
import * as Icon from '../../assets/icons/Duotone/Index';
import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';

// Main Navigation Menu Items and Links
export const mainNavMenu = [
	{ title: 'About', route: '/' },
	{ title: 'Writing', route: '/writing' },
	{ title: 'Tools', route: '/tools' },
	{ title: 'Keeps', route: '/keeps' },
	{ title: 'Work', route: '/work' },
];

// Side Navigation Menu Items and Links
const sideNavMenu = {
	about: [
		{ title: 'Info', route: '/' },
		{ title: 'Books', route: '/about/books' },
		{ title: 'Movies', route: '/about/movies' },
		{ title: 'Golf', route: '/about/golf' },
	],

	writing: [
		{ title: 'Design', route: '/writing/design' },
		{ title: 'Ideas', route: '/writing/ideas' },
		{ title: 'ADHD', route: '/writing/adhd' },
		{ title: 'Dad Life', route: '/writing/dad-life' },
	],

	tools: [
		{ title: 'Figma Plugins', route: '/tools/figma-plugins' },
		{ title: 'Figma Files', route: '/tools/figma-files' },
		{ title: 'Apps', route: '/tools/apps' },
		{ title: 'Frameworks', route: '/tools/frameworks' },
		{ title: 'Extensions', route: '/tools/extensions' },
	],

	keeps: [
		{ title: 'Portfolios', route: '/keeps/portfolios' },
		{ title: 'Articles', route: '/keeps/articles' },
		{ title: 'Cool Things', route: '/keeps/cool-things' },
		{ title: 'Podcasts', route: '/keeps/podcasts' },
	],

	work: [
		{ title: 'BizLibrary', route: '/work/bizlibrary' },
		{ title: 'RSH', route: '/work/rsh' },
		{ title: 'Open Source', route: '/work/open-source' },
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
							<NavLink key={index} href={navItem.route}>
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
