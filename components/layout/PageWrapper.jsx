import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';

export const PageWrapper = styled.div`
	display: grid;
	grid-template-columns: 17rem 1fr;
	grid-template-rows: 7.5rem 15vh 1fr 80px;
	height: 100%;
	padding-left: 5vw;
  grid-column-gap: 1rem;
	${theme.breakpoints.lg} {
		grid-template-columns: 1fr 2rem;
		grid-template-rows: 4rem .1fr 1fr;
		overflow-x: hidden;
    padding-right: 5vw;
	}
`;
