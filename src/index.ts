import Ifless from './ifless.js';
import IflessNumber from './ifless-number';
import IflessString, {isEnglishChar, isNumeric} from './ifless-string';
import IflessObject from './ifless-object';

export default Ifless;

const ifless = new Ifless();

export {ifless, IflessNumber, IflessString, IflessObject, isEnglishChar, isNumeric};
