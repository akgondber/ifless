# ifless [![NPM version][npm-image]][npm-url]

> Get rid of if statements in your code by using convenient api

## Install

```sh
npm install ifless
```

or

```sh
yarn add ifless
```

## Usage

### Ifless

```javascript
import Ifless from 'ifless';

const ifless = new Ifless();
const result = ifless
                  .when(() => false, 'foo')
                  .when(() => true, 'bar)
                  .result;
console.log(result); // bar
```

### IflessNumber

```javascript
import {IflessNumber} from 'ifless';

const iflessNumber = new IflessNumber(12);
const result = iflessNumber.whenLt(7, 'bar').whenGt(10, 'baz').result;
console.log(result); // baz
```

### IflessString

```javascript
import {IflessString} from 'ifless';

const iflessString = new IflessString('O. Henry - The Remnants of the Code');
const result = iflessString
	.whenStartsWith('Mark Twain', 'Author is Mark Twain')
	.whenStartsWith('O. Henry', 'Author is O. Henry')
	.whenStartsWith('Ernest Hemingway', 'Author is Ernest Hemingway').result;
console.log(result); // Author is O. Henry

// Reset previously performed conditions
// and run another ones without creating a new instance
const result2 = iflessString
	.reset()
	.whenEndsWith('Parade', 'Ends with "Parade"')
	.whenEndsWith('Code', 'Ends with "Code"')
	.whenEndsWith('Unfulfilment', 'Ends with "Unfulfilment"').result;
console.log(result2); // Ends with "Code"
```

### IflessObject

```javascript
import {IflessObject} from 'ifless';

const iflessString = new IflessObject({foo: 'bar'});
const result = iflessString
	.when(source => source.foo === 'qux', 'foo is qux')
	.when(source => source.foo === 'bar', 'foo is bar')
	.when(source => source.foo === 'corge', 'foo is corge').result;
console.log(result); // foo is bar
```

## License

MIT © [Rushan Alyautdinov](https://github.com/akgondber)

[npm-image]: https://img.shields.io/npm/v/ifless.svg?style=flat
[npm-url]: https://npmjs.org/package/ifless
