# render-table-benchmark

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

"render-table-benchmark" is a collection of different ways to render the same table with the same data.
The purpose is to experiment different Javascript template engines and benchmark them with `Vanilla` implementation.

Template engines currently tested:
- [hyperhtml](https://github.com/WebReflection/hyperHTML)
- [lighterhtml](https://github.com/WebReflection/lighterhtml)
- [lit-html](https://lit-html.polymer-project.org/)
- [nanomorph](https://github.com/choojs/nanomorph#readme)
- [pug](https://pugjs.org/api/getting-started.html)
- pug + nanomorph + [nanohtml](https://github.com/choojs/nanohtml#readme)

Vanilla implementation currently tested:
- string concatenation
- dom api (thanks to [@illibejiep](https://github.com/illibejiep) for his contribution)

## Usage
start webpack dev server
```bash
npm run dev
```
build assets in the public folder
```bash
npm run build
```

## Benchmark
The benchmark is very simple: render a table with 500 rows and 5 columns and then, every second, randomly update one row.

## Results
| technique        | ms           | diffing algorithm  |
| ------------- |:-------------:| -----:|
| hyperhtml      | ~ 100 | ? |
| lighterhtml      | ~ 100  |  yes |
| lit-html | ~ 8      |  yes |
| nanomorph | ~ 400     | yes |
| pug | ~ 50  |  no |
| pug + nanomorph | ~ 300     |  yes |
| vanilla-string-concatenation | ~ 50    | no |
| vanilla-dom api | ~ 5   | no |


## License
[MIT](https://github.com/zsimo/env-to-config/blob/master/LICENSE)