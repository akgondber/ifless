import {expect, test} from 'vitest';
import Ifless from '../src/ifless.js';

test('sets a value when condition result is true', () => {
	const condi = new Ifless();
	const valueWhenConforms = 'get';
	const result = condi.whenFn(() => true, valueWhenConforms).result;
	expect(result).toEqual(valueWhenConforms);
});

test('sets a value when any condition in the chain is true', () => {
	const condi = new Ifless();
	const valueWhenConforms = 'get';
	const result = condi
		.whenFn(() => false, valueWhenConforms)
		.whenFn(() => true, valueWhenConforms).result;
	expect(result).toEqual(valueWhenConforms);
});

test('sets a value when all registered functions were succeeded', () => {
	const ifless = new Ifless();
	ifless.registerFn('foo', () => 1 === 1);
	ifless.registerFn('bar', () => process.env.KIL === undefined);

	const valueWhenConforms = 'get';
	const result = ifless.execute().whenAllPassed(valueWhenConforms).result;

	expect(result).toEqual(valueWhenConforms);
});

test("doesn't set a value when condition result is false", () => {
	const condi = new Ifless();
	const valueWhenConforms = 'get';
	const result = condi.whenFn(() => false, valueWhenConforms).result;
	expect(result).toBeUndefined();
});
