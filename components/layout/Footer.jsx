import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';
import { StyledLink } from '../primitives/StyledLink';
import * as Icon from '../../assets/icons/Duotone/Index.js';
import { FlexBox } from '../../components/utils/FlexBox.jsx';
import { Highlighter } from '../fonts/Highlighters';

const StyledFooter = styled.footer`
	grid-area: 4/2/5/3;
	align-self: center;
	display: flex;
	gap: 1rem;
	font: ${theme.text.tiny};
	color: ${theme.dark.highContrast};
	height: 2rem;
`;

const Wrapper = styled.div`
	grid-area: 4/3/5/3;
	justify-self: end;
	padding-right: 5vw;
	align-self: center;
	display: flex;
	flex-direction: row;
	gap: 1rem;
	align-items: center;
`;

export const Footer = (...props) => {
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
					href='mailto: abc@example.com'
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
			<Wrapper>
				{/* <Highlighter color={theme.dark.highContrast} font={theme.text.tiny}>
					Scroll Right
				</Highlighter> */}
				<Icon.FullArrowRight
					color={theme.dark.main}
					width='1.5rem'
					height='1.5rem'
				/>
			</Wrapper>
		</>
	);
};
