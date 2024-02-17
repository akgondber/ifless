import IflessSubject from './ifless-subject';

type Condition = (T: string) => boolean;
type OverValueFn = (T: any) => boolean;
type OverResultFn = (T: any) => any;

export const isEnglishChar = (char: string): boolean =>
	(char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');

export const isNumeric = (value: string): boolean =>
	!Number.isNaN(value) && !Number.isNaN(Number.parseFloat(value));

const charIsVowel = (char: string) =>
	['a', 'e', 'i', 'o', 'u', 'y'].includes(char.toLowerCase());

class IflessString extends IflessSubject {
	_subject: string;

	constructor(subject: string) {
		super(subject);
		this._subject = subject;
	}

	when(fn: Condition, thenResult: unknown): IflessString {
		if (!this.resultIsDefined() && fn(this._subject)) {
			this._result = thenResult;
		}

		return this;
	}

	whenFn(fn: Condition, thenResult: unknown): IflessString {
		return this.when(fn, thenResult);
	}

	whenEq(comparableString: string, thenResult: unknown): IflessString {
		if (!this.resultIsDefined() && this._subject === comparableString) {
			this._result = thenResult;
		}

		return this;
	}

	whenStartsWith(searchString: string, thenResult: unknown): IflessString {
		if (!this.resultIsDefined() && this._subject.startsWith(searchString)) {
			this._result = thenResult;
		}

		return this;
	}

	whenEndsWith(searchString: string, thenResult: unknown): IflessString {
		if (!this.resultIsDefined() && this._subject.endsWith(searchString)) {
			this._result = thenResult;
		}

		return this;
	}

	whenIncludes(searchString: string, thenResult: unknown): IflessString {
		if (!this.resultIsDefined() && this._subject.includes(searchString)) {
			this._result = thenResult;
		}

		return this;
	}

	whenEqual(comparableString: string, thenResult: unknown): IflessString {
		if (!this.resultIsDefined() && this._subject === comparableString) {
			this._result = thenResult;
		}

		return this;
	}

	whenOneOf(searchStrings: string[], thenResult: unknown): IflessString {
		if (!this.resultIsDefined() && searchStrings.includes(this._subject)) {
			this._result = thenResult;
		}

		return this;
	}

	whenOverResult(fn: OverValueFn, thenResult: unknown): IflessString {
		if (this._result) {
			if (fn(this._result)) {
				this._result = thenResult;
			}
		}

		return this;
	}

	whenOverResultFn(fn: OverValueFn, overResultFn: OverResultFn): IflessString {
		if (this._result) {
			if (fn(this._result)) {
				this._result = overResultFn(this._result);
			}
		}

		return this;
	}

	otherwise(otherwiseResult: any): IflessString {
		this._result ||= otherwiseResult;

		return this;
	}

	isNumeric(): boolean {
		return isNumeric(this._subject);
	}

	isEnglishChar(): boolean {
		if (isEnglishChar(this._subject)) {
			return true;
		}

		return false;
	}

	isEnglishVowelChar(): boolean {
		if (
			isEnglishChar(this._subject)
			&& charIsVowel(this._subject.toLowerCase())
		) {
			return true;
		}

		return false;
	}

	isEnglishConsonantChar(): boolean {
		if (
			isEnglishChar(this._subject)
			&& !charIsVowel(this._subject.toLowerCase())
		) {
			return true;
		}

		return false;
	}

	includesEnglishChar(): boolean {
		for (const char of this._subject) {
			if (isEnglishChar(char)) {
				return true;
			}
		}

		return false;
	}
}

export default IflessString;
