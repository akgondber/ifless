import result from 'lodash.result';

type Condition = () => boolean;
type ConditionOverFn = (T: any) => boolean;

/**
 * Ifless class for performing ifless stuff
 */
class Ifless {
	public _result: unknown;
	public _registeredFunctions: Record<string, Condition> = {};
	public _appliedStuffSucceeded: boolean = false;

	when(fn: Condition, thenResult: unknown): Ifless {
		if (!this.resultIsDefined() && fn()) {
			this._result = thenResult;
		}

		return this;
	}

	whenFn(fn: Condition, thenResult: unknown): Ifless {
		return this.when(fn, thenResult);
	}

	registerFn(name: string, fn: Condition): Ifless {
		this._registeredFunctions[name] = fn;

		return this;
	}

	execute() : Ifless {
		let allPassed = false;

		for (const key in this._registeredFunctions) {
			if (this._registeredFunctions[key]()) {
				allPassed = true;
			} else {
				allPassed = false;
				break;
			}
		}

		this._appliedStuffSucceeded = allPassed;
		return this;
	}

	executeRegisteredFunctions() : Ifless {
		return this.execute();
	}

	executeRegisteredFn(name: string) : Ifless {
		if (result(this._registeredFunctions, name)) {
			this._appliedStuffSucceeded = true;
		}

		return this;
	}

	clearRegisteredFn(name: string) : Ifless {
		delete this._registeredFunctions[name];

		return this;
	}

	whenAllPassed(thenResult: unknown) : Ifless {
		if (!this.resultIsDefined() && this._appliedStuffSucceeded) {
			this._result = thenResult;
		}

		return this;
	}

	whenOverResult(fn: ConditionOverFn, thenResult: unknown): Ifless {
		if (this._result) {
			if (fn(this._result)) {
				this._result = thenResult;
			}
		}

		return this;
	}

	reset() : Ifless {
		this._result = undefined;

		return this;
	}

	otherwise(otherwiseResult: any) {
		this._result = otherwiseResult;
	}

	public get result() {
		return this._result;
	}

	resultIsDefined(): boolean {
		return this._result !== undefined;
	}
}

export default Ifless;
