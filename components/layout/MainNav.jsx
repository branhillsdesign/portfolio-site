import styled from 'styled-components';
import { NavLink } from '../primitives/NavLink';
import * as Icon from '../../assets/icons/Duotone/Index';
import { theme } from '../../utils/ThemeConfig';

const MainNavStyles = styled.nav`
	display: flex;
	flex-direction: row;
	gap: 0;
`;

const NavWrapper = styled.div`
	display: flex;
	justify-content: space-between;
  margin: 0 4rem;
  align-items: center;
`;

export const MainNav = (props) => {
	return (
		<NavWrapper>
			<MainNavStyles {...props}>
				<NavLink>About</NavLink>
				<NavLink>Writing</NavLink>
				<NavLink>Tools</NavLink>
				<NavLink>Keeps</NavLink>
				<NavLink>Work</NavLink>
			</MainNavStyles>
      <Icon.MakerOsIcon16Px
        color={theme.dark.main}
				width='1.2rem'
				height='1.2rem'
			/>
		</NavWrapper>
	);
};
