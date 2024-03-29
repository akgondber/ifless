import {expect, test} from 'vitest';
import Ifless, {
	IflessNumber,
	IflessString,
	IflessObject,
	buildIfless,
} from '../src';

test('exports IflessNumber', () => {
	expect(IflessNumber).toBeDefined();
	expect(new IflessNumber(10)).toBeDefined();
});

test('exports IflessString', () => {
	expect(IflessString).toBeDefined();
});

test('exports IflessString', () => {
	expect(IflessString).toBeDefined();
	expect(new IflessString('bar')).toBeDefined();
});

test('exports IflessObject', () => {
	expect(IflessObject).toBeDefined();
});

test('sets when condition is true', () => {
	const ifless = new Ifless();
	const valueWhenConforms = 'baz';
	ifless.when(() => true, valueWhenConforms);
	expect(ifless.result).toEqual(valueWhenConforms);
});

test('expors IflessObject', () => {
	const instance = buildIfless({foo: 'baz'});
	const valueWhenConforms = 'baz';
	const result = (instance as IflessObject).whenHasKey('foo', valueWhenConforms).result;
	expect(result).toEqual(valueWhenConforms);
});
