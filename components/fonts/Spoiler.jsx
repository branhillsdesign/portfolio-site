import { theme } from '../../utils/ThemeConfig';
import styled from 'styled-components';
import { useState } from 'react';

const StyledSpoiler = styled.span`
	cursor: pointer;
	font: inherit;
	background: ${({ visibility }) =>
		visibility === true ? 'transparent' : theme.dark.subtle};
	border-radius: 0.25rem;
	color: ${({ visibility }) =>
		visibility === true ? 'inherit' : 'transparent'};
	&:before {
		clip-path: inset(100%);
		clip: rect(1px, 1px, 1px, 1px);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
		content: 'Spoiler Start';
	}
	&:after {
		clip-path: inset(100%);
		clip: rect(1px, 1px, 1px, 1px);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
		content: 'Spoiler End';
	}
`;

export const Spoiler = ({ children }) => {
	const [isVisible, setIsVisible] = useState(false);
	const handleClick = () => {
		setIsVisible(!isVisible);
		console.log(isVisible);
	};

	return (
		<StyledSpoiler onClick={handleClick} visibility={isVisible}>
      {children}{` 😱`}
		</StyledSpoiler>
	);
};
