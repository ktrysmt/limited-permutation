# limited-permutation

> Generate a limited permutation, for NodeJS

## Install

```
npm install limited-permutation
```

## Usage

```js
const permutation = require('limited-permutation');

const result = permutation('abc', 2);
console.log(result); 
```

STDOUT is below;

```js
[
  [ 'a', 'a' ],
  [ 'a', 'b' ],
  [ 'a', 'c' ],
  [ 'b', 'a' ],
  [ 'b', 'b' ],
  [ 'b', 'c' ],
  [ 'c', 'a' ],
  [ 'c', 'b' ],
  [ 'c', 'c' ]
]
```

## Author

[ktrysmt](https://twitter.com/ktrysmt)

## License

[MIT](./LICENSE)
