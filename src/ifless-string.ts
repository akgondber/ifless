// eslint-disable-next-line no-unused-vars
type Condition = (T: string) => boolean;

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
