import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';
import { SideNavLink } from '../primitives/SideNavLink';

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
    height: .125rem;
  }
`;

export const SideNav = (props) => {
	return (
		<>
      <SideNavStyles {...props}>
        <NavTitle>About</NavTitle>
        <Link href='https://www.branhills.com'>
          <SideNavLink>Info</SideNavLink>
        </Link>
        <Link href='/books'>
          <SideNavLink>Books</SideNavLink>
        </Link>
				<SideNavLink>Movies</SideNavLink>
				<SideNavLink>Golf</SideNavLink>
			</SideNavStyles>
		</>
	);
};
