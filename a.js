import result from 'lodash.result';
import Ifless, {IflessString, IflessNumber} from './dist/index.js';

const ifl = new IflessString('a');
const ifl2 = new IflessNumber(13);
ifl2.registerFn('re', (a) => a > 10);
ifl2.registerFn('de', (a) => a > 10);
ifl2.execute();
ifl2.whenPassed('ucidc');
// ifl2.reset();
console.log(ifl2.result);
// ifl.when(() => 'a' === 'a', 'dsc');
ifl.registerFn('ad', (ca) => ca === 'a');
ifl.executeRegisteredFn('ad');
console.log(ifl instanceof IflessString);
ifl.whenAllPassed('fref');
console.log(ifl.result);
process.exit(0);

const se = new Set();
se.add({a: 'q'});
se.add({a: 'q'});
console.log(se.size);
const a = {
	f: 13,
	g: 2,
};

console.log('vcdfv');

for (const el in a) {
	console.log(a[el]);
}
class Tho {
	constructor() {
		this.gre = 'cdv';
	}

	ga() {
		const inr = {
			b: () => this.gre === 'cdv',
		};
		return inr['b']();
	}
}

const t = new Tho();
console.log(t.ga());
// const vo = result(ga, 'b');
// console.log(vo);
