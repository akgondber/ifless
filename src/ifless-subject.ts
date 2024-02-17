import invoke from 'lodash.invoke';

type Condition = (T: unknown) => boolean;
type OverResultFn = (T: unknown) => IflessSubject;

/**
 * Ifless class for performing ifless stuff
 */
class IflessSubject {
	_subject: unknown;
	_result: unknown;
	_registeredFunctions: Record<string, Condition> = {};
	_appliedStuffSucceeded: boolean = false;

	constructor(subject: unknown) {
		this._subject = subject;
	}

	when(fn: Condition, thenResult: unknown): IflessSubject {
		if (!this.resultIsDefined() && fn(this._subject)) {
			this._result = thenResult;
		}

		return this;
	}

	whenFn(fn: Condition, thenResult: unknown): IflessSubject {
		return this.when(fn, thenResult);
	}

	andWhen(fn: Condition, thenResult: unknown): IflessSubject {
		if (this._result && fn(this._subject)) {
			this._result = thenResult;
		}

		return this;
	}

	whenOverResult(fn: Condition, thenResult: unknown): IflessSubject {
		if (this._result) {
			if (fn(this._result)) {
				this._result = thenResult;
			}
		}

		return this;
	}

	whenOverResultFn(fn: Condition, overResultFn: OverResultFn): IflessSubject {
		if (this._result) {
			if (fn(this._result)) {
				this._result = overResultFn(this._result);
			}
		}

		return this;
	}

	changeSubject(newSubject: any): IflessSubject {
		this._subject = newSubject;
		this._result = undefined;

		return this;
	}

	executeWithAnyPass(): IflessSubject {
		let anyPassed = false;

		for (const key in this._registeredFunctions) {
			if (this._registeredFunctions[key](this._subject)) {
				anyPassed = true;
				break;
			} else {
				anyPassed = false;
			}
		}

		this._appliedStuffSucceeded = anyPassed;
		return this;
	}

	registerFn(name: string, fn: Condition): IflessSubject {
		this._registeredFunctions[name] = fn;

		return this;
	}

	execute() : IflessSubject {
		let allPassed = false;

		for (const key in this._registeredFunctions) {
			if (this._registeredFunctions[key](this._subject)) {
				allPassed = true;
			} else {
				allPassed = false;
				break;
			}
		}

		this._appliedStuffSucceeded = allPassed;
		return this;
	}

	executeRegisteredFunctions() : IflessSubject {
		return this.execute();
	}

	executeRegisteredFn(name: string) : IflessSubject {
		if (invoke(this._registeredFunctions, name, this._subject)) {
			this._appliedStuffSucceeded = true;
		}

		return this;
	}

	clearRegisteredFn(name: string) : IflessSubject {
		delete this._registeredFunctions[name];

		return this;
	}

	whenPassed(thenResult: unknown) : IflessSubject {
		return this.whenAllPassed(thenResult);
	}

	whenAllPassed(thenResult: unknown) : IflessSubject {
		if (!this.resultIsDefined() && this._appliedStuffSucceeded) {
			this._result = thenResult;
		}

		return this;
	}

	reset() : IflessSubject {
		this._result = undefined;

		return this;
	}

	otherwise(otherwiseResult: any): IflessSubject {
		this._result ||= otherwiseResult;

		return this;
	}

	public get result() {
		return this._result;
	}

	resultIsDefined(): boolean {
		return this._result !== undefined;
	}
}

export default IflessSubject;
