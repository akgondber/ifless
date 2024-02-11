// eslint-disable-next-line no-unused-vars
type Condition = (T: string) => boolean;

export const isEnglishChar = (char: string): boolean => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');

export const isNumeric = (value: string): boolean => !Number.isNaN(value) && !Number.isNaN(Number.parseFloat(value));

const charIsVowel = (char: string) => ['a', 'e', 'i', 'o', 'u', 'y'].includes(char.toLowerCase());

class IflessString {
	private _result: unknown;
	private _subject: string;

	constructor(subject: string) {
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
		if (isEnglishChar(this._subject) && charIsVowel(this._subject.toLowerCase())) {
			return true;
		}

		return false;
	}

	isEnglishConsonantChar(): boolean {
		if (isEnglishChar(this._subject) && !charIsVowel(this._subject.toLowerCase())) {
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

	reset(): IflessString {
		this._result = undefined;

		return this;
	}

	public get result() {
		return this._result;
	}

	resultIsDefined(): boolean {
		return this._result !== undefined;
	}
}

export default IflessString;
