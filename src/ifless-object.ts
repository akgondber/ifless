// eslint-disable-next-line no-unused-vars
type Condition = (T: Record<string, unknown>) => boolean;

class IflessObject {
	private _result: unknown;
	private _subject: Record<string, unknown>;

	constructor(subject: Record<string, unknown>) {
		this._subject = subject;
	}

	when(fn: Condition, thenResult: unknown): IflessObject {
		if (!this.resultIsDefined() && fn(this._subject)) {
			this._result = thenResult;
		}

		return this;
	}

	whenFn(fn: Condition, thenResult: unknown): IflessObject {
		return this.when(fn, thenResult);
	}

	whenEq(
		comparableString: Record<string, unknown>,
		thenResult: unknown,
	): IflessObject {
		if (!this.resultIsDefined() && this._subject.a === comparableString.a) {
			this._result = thenResult;
		}

		return this;
	}

	reset(): IflessObject {
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

export default IflessObject;
