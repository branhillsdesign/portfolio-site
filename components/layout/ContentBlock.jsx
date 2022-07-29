import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';

export const ContentBlock = styled.div`
	display: flex;
	flex-direction: column;
  gap: ${(props) => props.gap || 'null'};
  width: 424px;
  height: 70vh;
  gap: 1.5rem;
`;
