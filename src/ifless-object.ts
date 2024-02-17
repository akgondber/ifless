import isEqual from 'lodash.isequal';
import result from 'lodash.result';
import IflessSubject from './ifless-subject';

type Condition = (T: Record<string, unknown>) => boolean;
type OverValueFn = (T: any) => boolean;
type OverResultFn = (T: any) => any;

class IflessObject extends IflessSubject {
	_subject: Record<string, unknown>;

	constructor(subject: Record<string, unknown>) {
		super(subject);
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

	andWhen(fn: Condition, thenResult: unknown): IflessObject {
		if (this._result && fn(this._subject)) {
			this._result = thenResult;
		}

		return this;
	}

	andWhenPathSatisfies(path: string, fn: OverValueFn, thenResult: unknown): IflessObject {
		if (this._result && fn(result(this._subject, path))) {
			this._result = thenResult;
		}

		return this;
	}

	whenEq(
		comparable: Record<string, unknown>,
		thenResult: unknown,
	): IflessObject {
		if (!this.resultIsDefined() && isEqual(this._subject, comparable)) {
			this._result = thenResult;
		}

		return this;
	}

	whenPathEq(
		path: string,
		comparable: unknown,
		thenResult: unknown,
	): IflessObject {
		if (
			!this.resultIsDefined()
			&& isEqual(result(this._subject, path), comparable)
		) {
			this._result = thenResult;
		}

		return this;
	}

	whenPathSatisfies(
		path: string,
		satisfiesFn: OverValueFn,
		thenResult: any,
	): IflessObject {
		if (!this.resultIsDefined() && satisfiesFn(result(this._subject, path))) {
			this._result = thenResult;
		}

		return this;
	}

	whenHasKey(key: string, thenResult: unknown): IflessObject {
		if (!this.resultIsDefined() && key in this._subject) {
			this._result = thenResult;
		}

		return this;
	}

	whenOverResult(fn: OverValueFn, thenResult: unknown): IflessObject {
		if (this._result) {
			if (fn(this._result)) {
				this._result = thenResult;
			}
		}

		return this;
	}

	whenOverResultFn(fn: OverValueFn, overResultFn: OverResultFn): IflessObject {
		if (this._result) {
			if (fn(this._result)) {
				this._result = overResultFn(this._result);
			}
		}

		return this;
	}

	andWhenPathEq(
		path: string,
		comparable: unknown,
		thenResult: unknown,
	): IflessObject {
		if (
			this.resultIsDefined()
			&& isEqual(result(this._subject, path), comparable)
		) {
			this._result = thenResult;
		}

		return this;
	}

	otherwise(otherwiseResult: any): IflessObject {
		if (this._result === undefined) {
			this._result = otherwiseResult;
		}

		return this;
	}
}

export default IflessObject;
