/** @format */

import styled from 'styled-components';
import ScrollHorizontal from '../../utils/HorizontalScroll.jsx';
import useWindowSize from '../utils/QueryWindowSize.jsx';
import { theme } from '../utils/ThemeConfig';

export const StyledReel = styled.main`
	position: relative !important;
	grid-area: 2/2/3/4;
	display: flex;
	/* display: grid;
	grid-auto-columns: 25ch;
	grid-template-rows: repeat(4, minmax(min-content, 1fr));
	grid-column-gap: 1.5rem;
	grid-row-gap: 1.5rem;
	grid-auto-flow: column;
	padding-bottom: 8px; */
	& > * {
		flex: 0 0 50ch;
		margin-right: 1.5rem;
	}
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
		display: flex;
		gap: 1.5rem;
		flex-direction: column;
		& > * {
			flex: 0 1 auto;
			overflow: visible;
		}
		/* grid-template-columns: 50% 50%;
		grid-auto-rows: minmax(10ch, min-content);
		gap: 1.5rem;
		padding-right: 1.5rem; */
	}
`;

export const Reel = (props) => {
	const size = useWindowSize();
	return (
		<>
			{size.width > 1199.98 && (
				<ScrollHorizontal reverseScroll={true}>
					<StyledReel>{props.children}</StyledReel>
				</ScrollHorizontal>
			)}
			<MobileReel>{props.children}</MobileReel>
		</>
	);
};
