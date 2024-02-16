import IflessSubject from './ifless-subject';

type Condition = (T: number) => boolean;

class IflessNumber extends IflessSubject {
	_subject: number;

	constructor(subject: number) {
		super(subject);
		this._subject = subject;
	}

	when(fn: Condition, thenResult: unknown): IflessNumber {
		if (!this.resultIsDefined() && fn(this._subject)) {
			this._result = thenResult;
		}

		return this;
	}

	whenFn(fn: Condition, thenResult: unknown): IflessNumber {
		return this.when(fn, thenResult);
	}

	whenGt(comparableNumber: number, thenResult: unknown): IflessNumber {
		if (!this.resultIsDefined() && this._subject > comparableNumber) {
			this._result = thenResult;
		}

		return this;
	}

	whenGte(comparableNumber: number, thenResult: unknown): IflessNumber {
		if (!this.resultIsDefined() && this._subject >= comparableNumber) {
			this._result = thenResult;
		}

		return this;
	}

	whenLt(comparableNumber: number, thenResult: unknown): IflessNumber {
		if (!this.resultIsDefined() && this._subject < comparableNumber) {
			this._result = thenResult;
		}

		return this;
	}

	whenLte(comparableNumber: number, thenResult: unknown): IflessNumber {
		if (!this.resultIsDefined() && this._subject <= comparableNumber) {
			this._result = thenResult;
		}

		return this;
	}

	whenEq(comparableNumber: number, thenResult: unknown): IflessNumber {
		if (!this.resultIsDefined() && this._subject === comparableNumber) {
			this._result = thenResult;
		}

		return this;
	}

	whenEqual(comparableNumber: number, thenResult: unknown): IflessNumber {
		if (!this.resultIsDefined() && this._subject === comparableNumber) {
			this._result = thenResult;
		}

		return this;
	}

	whenBetween(min: number, max: number, thenResult: unknown): IflessNumber {
		if (
			!this.resultIsDefined()
			&& this._subject >= min
			&& this._subject <= max
		) {
			this._result = thenResult;
		}

		return this;
	}

	whenNegative(thenResult: unknown): IflessNumber {
		if (!this.resultIsDefined() && this._subject < 0) {
			this._result = thenResult;
		}

		return this;
	}

	whenPositive(thenResult: unknown): IflessNumber {
		if (!this.resultIsDefined() && this._subject > 0) {
			this._result = thenResult;
		}

		return this;
	}

	whenZero(thenResult: unknown): IflessNumber {
		if (!this.resultIsDefined() && this._subject === 0) {
			this._result = thenResult;
		}

		return this;
	}
}

export default IflessNumber;
