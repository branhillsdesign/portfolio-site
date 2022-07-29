import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';

const StyledReel = styled.main`
	display: inline-grid;
	grid-auto-flow: column;
	gap: 1.5rem;
	width: 100%;
	height: 100%;
`;

export const Reel = (props) => {
	

	return  (<StyledReel {...props} />);
};
