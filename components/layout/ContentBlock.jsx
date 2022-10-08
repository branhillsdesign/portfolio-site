import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';

export const ContentBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(props) => props.gap || '0'};
  height: 100%;
  width: 100%;
  & > * {
    width: auto;
  }
`;
