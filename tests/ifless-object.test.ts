import {expect, test} from 'vitest';
import IflessObject from '../src/ifless-object.js';

test('sets a value when condition result is true', () => {
	const iflessObject = new IflessObject({a: 11});
	const valueWhenConforms = 'bar';
	const result = iflessObject.whenFn(
		(source: Record<string, any>) => source.a === 11,
		valueWhenConforms,
	).result;
	expect(result).toEqual(valueWhenConforms);
});

test('resets a value', () => {
	const iflessObject = new IflessObject({a: 11});
	const valueWhenConforms = 'bar';
	const preliminaryResult = iflessObject.when(
		() => true,
		valueWhenConforms,
	).result;
	expect(preliminaryResult).toEqual(valueWhenConforms);
	const result = iflessObject.reset().result;
	expect(result).toBeUndefined();
});
