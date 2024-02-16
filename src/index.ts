import Ifless from './ifless.js';
import IflessNumber from './ifless-number';
import IflessString, {isEnglishChar, isNumeric} from './ifless-string';
import IflessObject from './ifless-object';
import IflessSubject from './ifless-subject.js';

export default Ifless;

const ifless = new Ifless();

const buildIfless = (
	value: any,
): IflessSubject => {
	if (typeof value === 'string') {
		return new IflessString(value);
	}

	if (typeof value === 'number') {
		return new IflessNumber(value);
	}

	if (typeof value === 'object') {
		return new IflessObject(value as Record<string, unknown>);
	}

	throw new Error(`type ${typeof value} is not supported as a subject`);
};

export {ifless,
	IflessNumber,
	IflessString,
	IflessObject,
	isEnglishChar,
	isNumeric,
	buildIfless};
