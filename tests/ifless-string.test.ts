import {expect, test} from 'vitest';
import IflessString, {isEnglishChar} from '../src/ifless-string.js';

test('sets a value when condition result is true', () => {
	const iflessString = new IflessString(
		'Jack London - Four Horses and a Sailor',
	);
	const valueWhenConforms = 'Author is Jack London';
	const result = iflessString
		.whenStartsWith('Jack London', valueWhenConforms)
		.whenStartsWith('Ambrose', 'Author is Ambrose').result;
	expect(result).toEqual(valueWhenConforms);
});

test('sets a value when condition string equal to one of supplied array of strings', () => {
	const iflessString = new IflessString('baz');
	const valueWhenConforms = 'baz is included in array';
	const result = iflessString.whenOneOf(
		['bar', 'baz'],
		valueWhenConforms,
	).result;
	expect(result).toEqual(valueWhenConforms);
});

test('returns true when value is english alphabet char', () => {
	const iflessString = new IflessString('a');

	const result = iflessString.isEnglishChar();
	expect(result).to;
});

test('returns false when the subject is not english alphabet char', () => {
	const iflessString = new IflessString('4');

	const result = iflessString.isEnglishChar();
	expect(result).toEqual(false);
});

test('returns true when the subject is english vowel char', () => {
	const iflessString = new IflessString('y');

	const result = iflessString.isEnglishVowelChar();
	expect(result).toEqual(true);
});

test('returns false when the subject is not english vowel char', () => {
	const iflessString = new IflessString('g');

	const result = iflessString.isEnglishVowelChar();
});

test('returns true when the subject is english consonant char', () => {
	const iflessString = new IflessString('r');

	const result = iflessString.isEnglishConsonantChar();
	expect(result).toEqual(true);
});

test('returns false when the subject is not english consonant char', () => {
	const iflessString = new IflessString('a');

	const result = iflessString.isEnglishConsonantChar();
	expect(result).toEqual(false);
});

test('returns true when the subject is numeric', () => {
	const iflessString = new IflessString('35');

	const result = iflessString.isNumeric();
	expect(result).toEqual(true);
});

test('returns false when the subject is not numeric', () => {
	const iflessString = new IflessString('baz');

	const result = iflessString.isNumeric();
	expect(result).toEqual(false);
});

test('returns true when the subject includes english char', () => {
	const iflessString = new IflessString('35 bar');

	const result = iflessString.includesEnglishChar();
	expect(result).toEqual(true);
});

test('returns true when the subject includes english char', () => {
	const iflessString = new IflessString('35 bar');

	const result = iflessString.includesEnglishChar();
	expect(result).toEqual(true);
});

test('returns false when the subject does not include english char', () => {
	const iflessString = new IflessString('35');

	const result = iflessString.includesEnglishChar();
	expect(result).toEqual(false);
});

test('returns true when the value is english char', () => {
	const result = isEnglishChar('r');

	expect(result).toEqual(true);
});

test('returns false when the value is not english char', () => {
	const result = isEnglishChar('8');

	expect(result).toEqual(false);
});
