/** @format */

import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';

export const PageWrapper = styled.div`
	display: grid;
	grid-template-columns: minmax(auto, 0.2fr) 1fr;
	grid-template-rows: auto minmax(60vh, 70vh) 0.1fr;
	padding-left: 5vw;
	overflow: auto;
	${theme.breakpoints.lg} {
		grid-template-columns: 1fr 1fr 60px;
		grid-template-rows: auto 1fr 80px;
		overflow: auto;
	}
	& .scroll-horizontal {
		&::-webkit-scrollbar {
			height: 4px;
		}
		&::-webkit-scrollbar-thumb {
			background: ${theme.dark.subtle};
			border-radius: 8px;
		}
		scrollbar-color: ${theme.dark.subtle} transparent;
	}
`;
