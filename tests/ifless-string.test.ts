import {expect, test} from 'vitest';
import IflessString from '../src/ifless-string.js';

test('sets a value when condition result is true', () => {
	const iflessString = new IflessString(
		'Jack London - Four Horses and a Sailor',
	);
	const valueWhenConforms = 'Author is Jack London';
	const result = iflessString
		.whenStartsWith('Jack London', valueWhenConforms)
		.whenStartsWith('Jack', 'Law').result;
	expect(result).toEqual(valueWhenConforms);
});
