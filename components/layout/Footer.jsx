/** @format */

import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig.jsx';
import { StyledLink } from '../primitives/StyledLink.jsx';

const StyledFooter = styled.footer`
	grid-area: 4/1/5/3;
	align-self: center;
	display: flex;
  gap: 1.5rem;
	${theme.text.tiny};
	color: ${theme.dark.highContrast};
	padding: 1.5rem 0;
	${theme.breakpoints.lg} {
		justify-content: space-around;
	}
`;

export const Footer = () => {
	return (
		<>
			<StyledFooter>
				<StyledLink
					color={theme.dark.main}
					href='https://www.linkedin.com/in/branhillsdesign/'
					target='_blank'
					rel='noopener noreferrer'>
					LinkedIn
				</StyledLink>
				<StyledLink
					color={theme.dark.main}
					href='mailto: brandon@branhills.com'
					subject='Hello from branhills.com!'
					target='_blank'
					rel='noopener noreferrer'>
					Email
				</StyledLink>
				<StyledLink
					color={theme.dark.main}
					href='https://www.figma.com/@branhills'
					target='_blank'
					rel='noopener noreferrer'>
					Figma
				</StyledLink>
				<StyledLink
					color={theme.dark.main}
					href='https://twitter.com/branhillsdesign'
					target='_blank'
					rel='noopener noreferrer'>
					Twitter
				</StyledLink>
			</StyledFooter>
		</>
	);
};
