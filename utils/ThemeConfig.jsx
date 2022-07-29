export const theme = {
	dark: {
		// Brand Colors
		main: 'hsla(225, 95%, 61%)',
		mainvivid: 'hsla(221, 65%, 52%)',
		maindim: 'hsla(220, 91%, 67%)',
		mainsubtle: 'hsla(220, 100%, 90%)',

		// Text Colors
		highContrast: 'hsla(0, 0%, 100%)',
		vivid: 'hsla(233, 19%, 82%)',
		dim: 'hsla(237, 11%, 61%)',
		subtle: 'hsla(236, 14%, 39%)',
		disabled: 'hsla(236, 17%, 29%)',

		// Background Colors
		bg00: 'linear-gradient(0deg, rgba(40, 41, 61, 0.4), rgba(40, 41, 61, 0.4)), #1C1C28;',
		bg10: 'linear-gradient(0deg, rgba(40, 41, 61, 0.5), rgba(40, 41, 61, 0.5)), #1C1C28;',
		bg20: 'linear-gradient(0deg, rgba(40, 41, 61, 0.6), rgba(40, 41, 61, 0.6)), #1C1C28;',
		bg30: 'linear-gradient(0deg, rgba(40, 41, 61, 0.7), rgba(40, 41, 61, 0.7)), #1C1C28;',
		bg40: 'linear-gradient(0deg, rgba(40, 41, 61, 0.8), rgba(40, 41, 61, 0.8)), #1C1C28;',
		bg50: 'linear-gradient(0deg, rgba(40, 41, 61, 0.9), rgba(40, 41, 61, 0.9)), #1C1C28;',
		bg60: 'linear-gradient(0deg, rgba(40, 41, 61, 1), rgba(40, 41, 61, 1)), #1C1C28;',
		surface100: 'hsla(237, 21%, 20%, 1)',

		// Grey Colors
		white100: 'hsla(221, 0%, 100%)',
		grey90: 'hsla(221, 0%, 90%)',
		grey80: 'hsla(221, 0%, 80%)',
		grey70: 'hsla(221, 0%, 70%)',
		grey60: 'hsla(221, 0%, 60%)',
		grey50: 'hsla(221, 0%, 50%)',
		grey40: 'hsla(221, 0%, 40%)',
		grey30: 'hsla(221, 0%, 30%)',
		grey20: 'hsla(221, 0%, 20%)',
		grey10: 'hsla(221, 0%, 10%)',
		black00: 'hsla(221, 0%, 0%)',

		// Red Colors
		red00: 'hsla(0, 78%, 48%)',
		red10: 'hsla(0, 100%, 60%)',
		red20: 'hsla(0, 100%, 68%)',
		red30: 'hsla(0, 100%, 75%)',
		red40: 'hsla(0, 100%, 95%)',

		// Orange Colors
		orange00: 'hsla(32, 100%, 45%)',
		orange10: 'hsla(32, 100%, 50%)',
		orange20: 'hsla(34, 98%, 63%)',
		orange30: 'hsla(39, 96%, 72%)',
		orange40: 'hsla(44, 100%, 95%)',

		// Yellow Colors
		yellow00: 'hsla(48, 100%, 45%)',
		yellow10: 'hsla(48, 100%, 50%)',
		yellow20: 'hsla(49, 98%, 64%)',
		yellow30: 'hsla(53, 97%, 72%)',
		yellow40: 'hsla(58, 100%, 95%)',

		// Green Colors
		green00: 'hsla(154, 94%, 34%)',
		green10: 'hsla(154, 94%, 39%)',
		green20: 'hsla(151, 68%, 54%)',
		green30: 'hsla(150, 78%, 63%)',
		green40: 'hsla(150, 100%, 95%)',

		// Teal Colors
		teal00: 'hsla(184, 100%, 38%)',
		teal10: 'hsla(184, 100%, 44%)',
		teal20: 'hsla(184, 71%, 68%)',
		teal30: 'hsla(182, 74%, 81%)',
		teal40: 'hsla(180, 100%, 95%)',

		// Blue Colors
		blue00: 'hsla(216, 100%, 38%)',
		blue10: 'hsla(216, 100%, 38%)',
		blue20: 'hsla(220, 82%, 65%)',
		blue30: 'hsla(218, 88%, 80%)',
		blue40: 'hsla(215, 100%, 95%)',

		// Purple Colors
		grape00: 'hsla(270, 100%, 30%)',
		grape10: 'hsla(270, 100%, 40%)',
		grape20: 'hsla(278, 62%, 61%)',
		grape30: 'hsla(289, 61%, 78%)',
		grape40: 'hsla(300, 100%, 95%)',
	},
	text: {
		// Display Type Styles
		display0: 'font-weight: 700; font-size: 6rem;',
		display1: 'font-weight: 700; font-size: 4rem;',
		display2: 'font-weight: 700; font-size: 3.5rem;',

		// Heading Type Styles
		h1: 'font-weight: 700; font-size: 2.5rem;',
		h2: 'font-weight: 700; font-size: 2rem;',
		h3: 'font-weight: 700; font-size: 1.75rem;',
		h4: 'font-weight: 700; font-size: 1.5rem;',
		h5: 'font-weight: 700; font-size: 1.25rem;',
		h6: 'font-weight: 700; font-size: 1rem;',

		// Paragraph Type Styles
		p1: 'font-weight: 400; font-size: 1.125rem;',
		p2: 'font-weight: 400; font-size: clamp(1rem, 1vw, 1.125rem);',

		// Label Type Styles
		labelsmall: 'clamp(.9rem, 1.2vw, 1rem);',
		labelmedium: 'clamp(1rem, 1.2vw, 1.06rem);',
		labellarge: 'clamp(1rem, 1.2vw, 1.125rem);',

		// Stylized Type Styles
		allCaps:
			'text-transform: uppercase; letter-spacing: 0.125rem; font-size: 0.875rem;',
		blockQuote:
			'font-weight: 600; font-size: 1.25rem; letter-spacing: 0.004em;',
		lead: 'font-weight: 700; font-size: 1rem; letter-spacing: 0.016em;',
		small: 'font-weight: 500; font-size: 0.875rem;',
		tiny: 'font-weight: 600; font-size: 0.75rem; letter-spacing: 0.016em;',

		// Elevation Styles
		inset01: 'box-shadow: 0px 0.5px 4px 0px hsla(237, 18%, 23%, 0.32) inset;',
		shadow10:
			'box-shadow: 0px 1px 2px 0px hsla(0, 0%, 0%, 0.32); box-shadow: 0px 0px 1px 0px hsla(237, 21%, 20%, 0.08);',
		shadow20:
			'box-shadow: 0px 2px 4px 0px hsla(0, 0%, 0%, 0.32); box-shadow: 0px 0px 1px 0px hsla(0, 0%, 0%, 0.04);',
		shadow30:
			'box-shadow: 0px 4px 8px 0px hsla(0, 0%, 0%, 0.32); box-shadow: 0px 0px 2px 0px hsla(0, 0%, 0%, 0.04);',
		shadow40:
			'box-shadow: 0px 8px 16px 0px hsla(0, 0%, 0%, 0.32); box-shadow: 0px 2px 4px 0px hsla(0, 0%, 0%, 0.04);',
		shadow50:
			'box-shadow: 0px 16px 24px 0px hsla(0, 0%, 0%, 0.32); box-shadow: 0px 2px 8px 0px hsla(0, 0%, 0%, 0.04);',
		shadow60:
			'box-shadow: 0px 20px 32px 0px hsla(0, 0%, 0%, 0.32); box-shadow: 0px 2px 8px 0px hsla(0, 0%, 0%, 0.08);',
		focus: 'box-shadow: 0px 0px 0px 4px hsla(221, 95%, 40%);',
		hover:
			'box-shadow: 0px 0px 0px 4px hsla(221, 95%, 61%, 0.3), 0px 0.5px 4px 0px hsla(237, 18%, 23%, 0.32) inset;',
	},
	breakpoints: {
		xs: '575.98px',
		sm: '767.98px',
		md: '991.98px',
		lg: '1199.98px',
		xl: '1919.98px',
		ultra: '1920px',
	},
};
