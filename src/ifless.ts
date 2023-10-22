type Condition = () => boolean;

/**
 * Ifless class for performing ifless stuff
 */
class Ifless {
	private _result: unknown;

	when(fn: Condition, thenResult: unknown): Ifless {
		if (!this.resultIsDefined() && fn()) {
			this._result = thenResult;
		}

		return this;
	}

	whenFn(fn: Condition, thenResult: unknown): Ifless {
		return this.when(fn, thenResult);
	}

	reset(): Ifless {
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

export default Ifless;
