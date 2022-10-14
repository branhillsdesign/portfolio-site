/** @format */

import styled from 'styled-components';
import { theme } from '../utils/ThemeConfig';

export const H1 = styled.h1`
	${theme.text.h1}
	color: ${(props) => props.color || theme.dark.highContrast};
	text-transform: ${(props) => props.textTransform};
	text-align: ${(props) => props.textAlign || 'left'};
`;
export const H2 = styled.h2`
	${theme.text.h2}
	color: ${(props) => props.color || theme.dark.highContrast};
	text-transform: ${(props) => props.textTransform};
	text-align: ${(props) => props.textAlign || 'left'};
`;

export const H3 = styled.h3`
	${theme.text.h3}
	color: ${(props) => props.color || theme.dark.highContrast};
	text-transform: ${(props) => props.textTransform};
	text-align: ${(props) => props.textAlign || 'left'};
`;

export const H4 = styled.h4`
	${theme.text.h4}
	color: ${(props) => props.color || theme.dark.highContrast};
	text-transform: ${(props) => props.textTransform};
	text-align: ${(props) => props.textAlign || 'left'};
`;

export const H5 = styled.h5`
	${theme.text.h5}
	color: ${(props) => props.color || theme.dark.highContrast};
	text-transform: ${(props) => props.textTransform};
	text-align: ${(props) => props.textAlign || 'left'};
`;

export const H6 = styled.h6`
	${theme.text.h6}
	color: ${(props) => props.color || theme.dark.highContrast};
	text-transform: ${(props) => props.textTransform};
	text-align: ${(props) => props.textAlign || 'left'};
`;

export const P1 = styled.p`
	${theme.text.p1}
	color: ${(props) => props.color || theme.dark.highContrast};
	text-transform: ${(props) => props.textTransform};
	text-align: ${(props) => props.textAlign || 'left'};
	word-break: break-word;
	overflow-wrap: break-word;
`;

export const P2 = styled.p`
	${theme.text.p2}
	color: ${(props) => props.color || theme.dark.highContrast};
	text-transform: ${(props) => props.textTransform};
	text-align: ${(props) => props.textAlign || 'left'};
	word-break: break-word;
	overflow-wrap: break-word;
`;

export const LabelSmall = styled.p`
	${theme.text.labelsmall}
	color: ${(props) => props.color || theme.dark.highContrast};
	text-transform: ${(props) => props.textTransform};
	text-align: ${(props) => props.textAlign || 'left'};
`;

export const LabelMedium = styled.p`
	${theme.text.labelmedium}
	color: ${(props) => props.color || theme.dark.highContrast};
	text-transform: ${(props) => props.textTransform};
	text-align: ${(props) => props.textAlign || 'left'};
`;

export const LabelLarge = styled.p`
	${theme.text.labellarge}
	color: ${(props) => props.color || theme.dark.highContrast};
	text-transform: ${(props) => props.textTransform};
	text-align: ${(props) => props.textAlign || 'left'};
`;

export const Display00 = styled.h1`
	${theme.text.Display00}
	color: ${(props) => props.color || theme.dark.highContrast};
	text-transform: ${(props) => props.textTransform};
	text-align: ${(props) => props.textAlign || 'left'};
`;

export const Display01 = styled.h1`
	${theme.text.Display01}
	color: ${(props) => props.color || theme.dark.highContrast};
	text-transform: ${(props) => props.textTransform};
	text-align: ${(props) => props.textAlign || 'left'};
`;

export const Display02 = styled.h1`
	${theme.text.Display02}
	color: ${(props) => props.color || theme.dark.highContrast};
	text-transform: ${(props) => props.textTransform};
	text-align: ${(props) => props.textAlign || 'left'};
`;

export const AllCaps = styled.p`
	${theme.text.allCaps}
	color: ${(props) => props.color || theme.dark.highContrast};
	text-transform: ${(props) => props.textTransform};
	text-align: ${(props) => props.textAlign || 'left'};
`;

export const BlockQuote = styled.p`
	${theme.text.blockQuote}
	color: ${(props) => props.color || theme.dark.highContrast};
	text-transform: ${(props) => props.textTransform};
	text-align: ${(props) => props.textAlign || 'left'};
`;

export const Lead = styled.p`
	${theme.text.lead}
	color: ${(props) => props.color || theme.dark.highContrast};
	text-transform: ${(props) => props.textTransform};
	text-align: ${(props) => props.textAlign || 'left'};
`;

export const Small = styled.p`
	${theme.text.small}
	color: ${(props) => props.color || theme.dark.highContrast};
	text-transform: ${(props) => props.textTransform};
	text-align: ${(props) => props.textAlign || 'left'};
`;

export const Tiny = styled.p`
	${theme.text.tiny}
	color: ${(props) => props.color || theme.dark.highContrast};
	text-transform: ${(props) => props.textTransform};
	text-align: ${(props) => props.textAlign || 'left'};
`;
