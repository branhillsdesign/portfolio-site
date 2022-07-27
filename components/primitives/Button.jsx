import styled from 'styled-components';

const styles = {
	size: {
		sm: 'padding: 0.25rem 0.75rem; font-size: ${theme.label.sm};',
		md: 'padding: 0.5rem 1rem; font-size: ${theme.label.md};',
		lg: 'padding: 0.75rem 1.5rem; font-size: ${theme.label.lg};',
	},
	variant: {
		outline: `background: inherit; border: 2px solid ${theme.dark.main}; color: ${theme.dark.main};`,
		pill: `background: ${theme.dark.white100}; outline: none; color: ${theme.dark.main}; border-radius: 8rem; box-shadow: ${theme.shadow60};`,
		plain: `background: ${theme.dark.main}; outline: none; color: ${theme.dark.white100};`,
		disabled: `background: ${theme.dark.bg10}; border: 2px solid ${theme.dark.disabled}; color: ${theme.dark.disabled};`,
		link: `background: none; outline: none; color: ${theme.dark.main};`,
	},
	hover: {
		plain: `background: ${theme.dark.vivid}; ${theme.hover};`,
		outline: `background: none; ${theme.hover};`,
		pill: `background: ${theme.dark.bg00}; ${theme.hover};`,
		disabled: `background: ${theme.dark.bg10}; ${theme.shadow00}; cursor: not-allowed;`,
		link: `text-decoration: underline 2px solid; text-underline-offset: 2px;`,
	},
	focus: {
		plain: `outline: 2px solid ${theme.dark.main}; outline-offset: 2px;`,
		outline: `outline: 2px solid ${theme.dark.main}; outline-offset: 2px;}`,
		pill: `outline: 2px solid ${theme.dark.main}; outline-offset: 2px;`,
		disabled: `outline: 2px solid ${theme.dark.disabled};`,
		link: `outline: 2px solid ${theme.dark.main}; outline-offset: 0px;`,
	},
};

export const Button = styled.button`
	cursor: pointer;
	height: fit-content;
	width: ${(props) => props.width || '100%'};
	border: none;
	transition: 0.3s all ease-out;
	border-radius: 0.5rem;
	white-space: nowrap;
	${props => styles.size[props.size] || styles.size['md']}
	${props => styles.variant[props.variant] || styles.variant['plain']};

	&:hover {
		${props => styles.hover[props.variant] || styles.hover['plain']};
	}

	&:focus {
		${props => styles.focus[props.variant] || styles.focus['plain']};
	}
`;
