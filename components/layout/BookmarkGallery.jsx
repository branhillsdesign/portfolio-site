/** @format */

import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';

const StyledBookmarkGrid = styled.div`
	display: inline-grid;
	grid-template-rows: repeat(auto-fill, minmax(18ch, 30%));
	grid-auto-columns: minmax(40ch, 55ch);
	grid-auto-flow: column;
	gap: 1.5rem;
	height: 100%;
	${theme.breakpoints.lg} {
		grid-auto-rows: auto-fill;
		grid-template-columns: minmax(20ch, 1fr);
		grid-auto-flow: row;
	}
`;

export const BookmarkGallery = (props) => {
	return (
		<>
			<StyledBookmarkGrid>{props.children}</StyledBookmarkGrid>
		</>
	);
};
