/** @format */

import styled from 'styled-components';

const StyledBookmarkContainer = styled.div``;

export const BookmarkContainer = (props) => {
	return (
		<>
			<StyledBookmarkContainer>{props.children}</StyledBookmarkContainer>
		</>
	);
};
