import {expect, test} from 'vitest';
import IflessNumber from '../src/ifless-number.js';

test('sets a value when iflessNumbertion result is true', () => {
	const iflessNumber = new IflessNumber(10);
	const valueWhenConforms = 'bar';
	const result = iflessNumber.whenFn(() => true, valueWhenConforms).result;
	expect(result).toEqual(valueWhenConforms);
});

test('sets a value when any iflessNumbertion in the chain is true', () => {
	const iflessNumber = new IflessNumber(10);
	const valueWhenConforms = 'bar';
	const result = iflessNumber
		.whenFn(source => source === 10, valueWhenConforms)
		.whenFn(() => true, valueWhenConforms).result;
	expect(result).toEqual(valueWhenConforms);
});

test('sets a value when source value is greater than comparable number', () => {
	const iflessNumber = new IflessNumber(10);
	const valueWhenConforms = 'bar';
	const result = iflessNumber.whenGt(2, valueWhenConforms).result;
	expect(result).toEqual(valueWhenConforms);
});

test('sets a value when source value is greater than or equal to comparable number', () => {
	const iflessNumber = new IflessNumber(10);
	const valueWhenConforms = 'bar';
	const result = iflessNumber.whenGte(10, valueWhenConforms).result;
	expect(result).toEqual(valueWhenConforms);
});

test('sets a value when source value is less than comparable number', () => {
	const iflessNumber = new IflessNumber(10);
	const valueWhenConforms = 'bar';
	const result = iflessNumber.whenLt(12, valueWhenConforms).result;
	expect(result).toEqual(valueWhenConforms);
});

test('sets a value when source value is less than or equal to comparable number', () => {
	const iflessNumber = new IflessNumber(10);
	const valueWhenConforms = 'bar';
	const result = iflessNumber.whenLte(10, valueWhenConforms).result;
	expect(result).toEqual(valueWhenConforms);
});

test('sets a value when source value equals to comparable number', () => {
	const iflessNumber = new IflessNumber(10);
	const valueWhenConforms = 'bar';
	const result = iflessNumber.whenEqual(10, valueWhenConforms).result;
	expect(result).toEqual(valueWhenConforms);
});

test('sets a value when source value equals to comparable number', () => {
	const iflessNumber = new IflessNumber(10);
	const valueWhenConforms = 'bar';
	const result = iflessNumber.whenEq(10, valueWhenConforms).result;
	expect(result).toEqual(valueWhenConforms);
});

test('sets a value when source value between min and max', () => {
	const iflessNumber = new IflessNumber(10);
	const valueWhenConforms = 'bar';
	const result = iflessNumber.whenBetween(0, 12, valueWhenConforms).result;
	expect(result).toEqual(valueWhenConforms);
});

test("doesn't set a value when source value between min and max", () => {
	const iflessNumber = new IflessNumber(15);
	const valueWhenConforms = 'bar';
	const result = iflessNumber.whenBetween(0, 12, valueWhenConforms).result;
	expect(result).toBeUndefined();
});

test('sets a value when source value is negative', () => {
	const iflessNumber = new IflessNumber(-2);
	const valueWhenConforms = 'bar';
	const result = iflessNumber.whenNegative(valueWhenConforms).result;
	expect(result).toEqual(valueWhenConforms);
});

test("doesn't set a value when source value is not negative", () => {
	const iflessNumber = new IflessNumber(2);
	const valueWhenConforms = 'bar';
	const result = iflessNumber.whenNegative(valueWhenConforms).result;
	expect(result).toBeUndefined();
});

test('sets a value when source value is positive', () => {
	const iflessNumber = new IflessNumber(2);
	const valueWhenConforms = 'bar';
	const result = iflessNumber.whenPositive(valueWhenConforms).result;
	expect(result).toEqual(valueWhenConforms);
});

test("doesn't set a value when source value is not positive", () => {
	const iflessNumber = new IflessNumber(-6);
	const valueWhenConforms = 'bar';
	const result = iflessNumber.whenPositive(valueWhenConforms).result;
	expect(result).toBeUndefined();
});

test('sets a value when source value is zero', () => {
	const iflessNumber = new IflessNumber(0);
	const valueWhenConforms = 'bar';
	const result = iflessNumber.whenZero(valueWhenConforms).result;
	expect(result).toEqual(valueWhenConforms);
});

test("doesn't set a value when source value is not zero", () => {
	const iflessNumber = new IflessNumber(8);
	const valueWhenConforms = 'bar';
	const result = iflessNumber.whenZero(valueWhenConforms).result;
	expect(result).toBeUndefined();
});

test("doesn't set a value when source value does not satisfies less than comparision", () => {
	const iflessNumber = new IflessNumber(10);
	const valueWhenConforms = 'bar';
	const result = iflessNumber.whenLt(7, valueWhenConforms).result;
	expect(result).toBeUndefined();
});

test('resets a result value', () => {
	const iflessNumber = new IflessNumber(10);
	const valueWhenConforms = 'bar';
	const preliminaryResult = iflessNumber.whenEqual(
		10,
		valueWhenConforms,
	).result;
	expect(preliminaryResult).toEqual(valueWhenConforms);
	const result = iflessNumber.reset().result;
	expect(result).toBeUndefined();
});

test("doesn't set a value when iflessNumbertion result is false", () => {
	const iflessNumber = new IflessNumber(10);
	const valueWhenConforms = 'bar';
	const result = iflessNumber.whenFn(
		source => source === 17,
		valueWhenConforms,
	).result;
	expect(result).toBeUndefined();
});
