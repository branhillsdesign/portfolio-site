import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';
import { StyledLink } from '../primitives/Link';

const StyledFooter = styled.footer`
  grid-area: 4/2/5/3;
  align-self: center;
	display: flex;
  gap: 1rem;
  font: ${theme.text.tiny};
  color: ${theme.dark.highContrast};
  padding-right: 5vw;
`;

export const Footer = (props) => {
	return (
		<>
			<StyledFooter>
				<StyledLink href=''>LinkedIn</StyledLink>
				<StyledLink href=''>Email</StyledLink>
				<StyledLink href=''>Figma</StyledLink>
				<StyledLink href=''>Twitter</StyledLink>
			</StyledFooter>
		</>
	);
};
