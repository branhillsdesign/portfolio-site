/** @format */

import styled from 'styled-components';
import ScrollHorizontal from '../../utils/HorizontalScroll.jsx';
import useWindowSize from '../utils/QueryWindowSize.jsx';
import { theme } from '../utils/ThemeConfig';

export const StyledReel = styled.main`
	grid-area: 2/2/3/4;
	display: grid;
	grid-auto-columns: 25ch;
	grid-template-rows: repeat(4, minmax(min-content, 1fr));
	grid-column-gap: 1.5rem;
	grid-row-gap: 1.5rem;
	grid-auto-flow: column;
	overflow-x: scroll;
	padding-bottom: 8px;
	&::-webkit-scrollbar {
		height: 4px;
	}
	&::-webkit-scrollbar-thumb {
		background: ${theme.dark.subtle};
		border-radius: 8px;
	}
	scrollbar-color: ${theme.dark.subtle} transparent;
`;

export const MobileReel = styled.main`
	${theme.breakpoints.ultra} {
		display: none;
	}
	${theme.breakpoints.xl} {
		display: none;
	}
	${theme.breakpoints.lg} {
		grid-area: 2/1/3/3;
		display: grid;
		grid-template-columns: 50% 50%;
		grid-auto-rows: minmax(8ch, min-content);
		gap: 1.5rem;
	}
`;

export const Reel = (props) => {
	const size = useWindowSize();
	return (
		<>
			{size.width > 1199.98 && <StyledReel>{props.children}</StyledReel>}
			<MobileReel>{props.children}</MobileReel>
		</>
	);
};
