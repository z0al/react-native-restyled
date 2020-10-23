// Packages
import { ViewStyle } from 'react-native';

// Ours
import { Theme } from '../types';
import { id } from './utils/id';
import { merge } from './utils/merge';

export const borderRadius = (
	theme: Theme
): Record<string, ViewStyle> => {
	const sizes = Object.keys(theme.borderRadius);
	const rounded = sizes
		.map((key) => ({
			[id('rounded', key)]: {
				borderRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	const roundedT = sizes
		.map((key) => ({
			[id('rounded-t', key)]: {
				borderTopLeftRadius: theme.borderRadius[key],
				borderTopRightRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	const roundedR = sizes
		.map((key) => ({
			[id('rounded-r', key)]: {
				borderTopRightRadius: theme.borderRadius[key],
				borderBottomRightRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	const roundedB = sizes
		.map((key) => ({
			[id('rounded-b', key)]: {
				borderBottomRightRadius: theme.borderRadius[key],
				borderBottomLeftRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	const roundedL = sizes
		.map((key) => ({
			[id('rounded-l', key)]: {
				borderTopLeftRadius: theme.borderRadius[key],
				borderBottomLeftRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	const roundedTS = sizes
		.map((key) => ({
			[id('rounded-ts', key)]: {
				borderTopStartRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	const roundedTE = sizes
		.map((key) => ({
			[id('rounded-te', key)]: {
				borderTopEndRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	const roundedTL = sizes
		.map((key) => ({
			[id('rounded-tl', key)]: {
				borderTopLeftRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	const roundedTR = sizes
		.map((key) => ({
			[id('rounded-tr', key)]: {
				borderTopRightRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	const roundedBR = sizes
		.map((key) => ({
			[id('rounded-br', key)]: {
				borderBottomRightRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	const roundedBL = sizes
		.map((key) => ({
			[id('rounded-bl', key)]: {
				borderBottomLeftRadius: theme.borderRadius[key],
			},
		}))
		.reduce(merge, {});

	return [
		rounded,
		roundedT,
		roundedB,
		roundedL,
		roundedR,
		roundedTL,
		roundedTR,
		roundedBL,
		roundedBR,
		roundedTS,
		roundedTE,
	].reduce(merge, {});
};
