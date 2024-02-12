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

test('sets a value when comparable value is equal to subject', () => {
	const iflessObject = new IflessObject({a: 11});
	const valueWhenConforms = 'bar';
	const result = iflessObject.whenEq(
		{a: 11},
		valueWhenConforms,
	).result;
	expect(result).toEqual(valueWhenConforms);
});

test('sets a value when the subject has specified key', () => {
	const iflessObject = new IflessObject({a: 11});
	const valueWhenConforms = 'bar';
	const result = iflessObject.whenHasKey(
		'a',
		valueWhenConforms,
	).result;
	expect(result).toEqual(valueWhenConforms);
});

test("does't set a value when the subject has specified key", () => {
	const iflessObject = new IflessObject({a: 11});
	const valueWhenConforms = 'bar';
	const result = iflessObject.whenHasKey(
		'b',
		valueWhenConforms,
	).result;
	expect(result).toBeUndefined();
});

test("doesn't set a value when comparable value is not equal to subject", () => {
	const iflessObject = new IflessObject({a: 11});
	const valueWhenConforms = 'bar';
	const result = iflessObject.whenEq(
		{a: 14},
		valueWhenConforms,
	).result;
	expect(result).toBeUndefined();
});

test('sets a value when path satisfies a function', () => {
	const iflessObject = new IflessObject({a: {b: 11}});
	const valueWhenConforms = 'bar';
	const result = iflessObject.whenPathSatisfies(
		'a.b',
		(value: any) => value > 10,
		valueWhenConforms,
	).result;
	expect(result).toEqual(valueWhenConforms);
});

test("doesn't set a value when path not satisfies a function", () => {
	const iflessObject = new IflessObject({a: {b: 11}});
	const valueWhenConforms = 'bar';
	const result = iflessObject.whenPathSatisfies(
		'a.b',
		(value: any) => value > 20,
		valueWhenConforms,
	).result;
	expect(result).toBeUndefined();
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
