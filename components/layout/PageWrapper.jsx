import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';

export const PageWrapper = styled.div`
	display: grid;
	grid-template-columns: 17rem 1fr;
	grid-template-rows: 7.5rem 15vh 1fr 80px;
	grid-column-gap: 1.5rem;
	grid-row-gap: 1.5rem;
	height: 100%;
	padding-left: 5vw;
	${theme.breakpoints.lg} {
		grid-template-columns: 1fr 80px;
		grid-template-rows: 4rem 10rem 1fr;
		grid-column-gap: 1.5rem;
		grid-row-gap: 1.5rem;
		overflow-x: hidden;
	}
`;
