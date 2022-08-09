import React from 'react';
import NavLink from '../primitives/NavLink';
import SideNavLink from '../primitives/SideNavLink';
import * as Icon from '../../assets/icons/Duotone/Index';
import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';
import { useRouter } from 'next/router';

// Main Navigation Menu Items and Links
export const mainNavMenu = {
	about: {
		title: 'about',
		href: '/',
		section: 'about',
	},
	writing: {
		title: 'writing',
		href: '/writing',
		section: 'writing',
	},
	tools: {
		title: 'tools',
		href: '/tools',
		section: 'tools',
	},
	keeps: {
		title: 'keeps',
		href: '/keeps',
		section: 'keeps',
	},
	work: {
		title: 'work',
		href: '/work',
		section: 'work',
	},
};

// Side Navigation Menu Items and Links
export const sideNavMenu = {
	about: {
		info: {
			title: 'info',
			href: '/',
			section: 'about',
		},
		books: {
			title: 'books',
			href: '/about/books',
			section: 'about',
		},
		movies: {
			title: 'movies',
			href: '/about/movies',
			section: 'about',
		},
		golf: {
			title: 'golf',
			href: '/about/golf',
			section: 'about',
		},
	},
	writing: {
		design: {
			title: 'design',
			href: '/writing/design',
			section: 'writing',
		},
		ideas: {
			title: 'ideas',
			href: '/writing/ideas',
			section: 'writing',
		},
		adhd: {
			title: 'adhd',
			href: '/writing/adhd',
			section: 'writing',
		},
		dadLife: {
			title: 'dad life',
			href: '/writing/dad-life',
			section: 'writing',
		},
	},
	tools: {
		figmaPlugins: {
			title: 'figma plugins',
			href: '/tools/figma-plugins',
			section: 'tools',
		},
		figmaFiles: {
			title: 'figma files',
			href: '/tools/figma-files',
			section: 'tools',
		},
		apps: {
			title: 'apps',
			href: '/tools/apps',
			section: 'tools',
		},
		frameworks: {
			title: 'frameworks',
			href: '/tools/frameworks',
			section: 'tools',
		},
		extensions: {
			title: 'extensions',
			href: '/tools/extensions',
			section: 'tools',
		},
	},
	keeps: {
		portfolios: {
			title: 'portfolios',
			href: '/keeps/portfolios',
			section: 'keeps',
		},
		articles: {
			title: 'articles',
			href: '/keeps/articles',
			section: 'keeps',
		},
		coolThings: {
			title: 'cool things',
			href: '/keeps/cool-things',
			section: 'keeps',
		},
		podcasts: {
			title: 'podcasts',
			href: '/keeps/podcasts',
			section: 'keeps',
		},
	},
	work: {
		bizlibrary: {
			title: 'BizLibrary',
			href: '/work/bizlibrary',
			section: 'work',
		},
		rsh: {
			title: 'RSH',
			href: '/work/rsh',
			section: 'work',
		},
		openSource: {
			title: 'open source',
			href: '/work/open-source',
			section: 'work',
		},
	},
};

// Desktop Main Nav Layout Styles
const MainNavStyles = styled.nav`
	text-transform: capitalize;
	align-self: center;
	display: flex;
	grid-area: 1/1/2/3;
  justify-content: flex-start;
`;

// Create Main Navigation Menu from JSON Above
export const DesktopMainNav = (props) => {
	// Check router against section names to determine active link
	const router = useRouter();
	const curRoute = router.pathname;
	const curSection =
		curRoute === '/'
			? mainNavMenu.about.title
			: curRoute.includes(mainNavMenu.about.title)
			? mainNavMenu.about.title
			: curRoute.includes(mainNavMenu.writing.title)
			? mainNavMenu.writing.title
			: curRoute.includes(mainNavMenu.tools.title)
			? mainNavMenu.tools.title
			: curRoute.includes(mainNavMenu.keeps.title)
			? mainNavMenu.keeps.title
			: curRoute.includes(mainNavMenu.work.title)
			? mainNavMenu.work.title
			: null;

	return (
		<>
			<MainNavStyles {...props}>
				{Object.entries(mainNavMenu).map(([key, mainNavItem]) => {
					return (
						<NavLink
							{...props}
							key={key}
							href={mainNavItem.href}
							section={mainNavItem.section}
							active={curSection}>
							{mainNavItem.title}
						</NavLink>
					);
				})}
			</MainNavStyles>
		</>
	);
};

// Desktop Side Nav Layout Styles
const SideNavStyles = styled.nav`
	display: flex;
	flex-direction: column;
	grid-area: 3/1/4/2;
`;

const NavTitle = styled.div`
	font: ${theme.text.h5};
	color: ${theme.dark.highContrast};
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 1rem;
	white-space: nowrap;
	text-transform: capitalize;
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

export const DesktopSideNav = (...props) => {
	// Check router against section names to determine active link
	const router = useRouter();
	const curRoute = router.pathname;
	const curSection =
		curRoute === '/'
			? mainNavMenu.about.title
			: curRoute.includes(mainNavMenu.about.title)
			? mainNavMenu.about.title
			: curRoute.includes(mainNavMenu.writing.title)
			? mainNavMenu.writing.title
			: curRoute.includes(mainNavMenu.tools.title)
			? mainNavMenu.tools.title
			: curRoute.includes(mainNavMenu.keeps.title)
			? mainNavMenu.keeps.title
			: curRoute.includes(mainNavMenu.work.title)
			? mainNavMenu.work.title
			: null;
	return (
		<>
			<SideNavStyles {...props}>
				<NavTitle>{curSection}</NavTitle>
				{Object.entries(sideNavMenu[curSection]).map(([key, sideNavItem]) => {
					return (
						<SideNavLink key={key} href={sideNavItem.href}>
							{sideNavItem.title}
						</SideNavLink>
					);
				})}
			</SideNavStyles>
		</>
	);
};
