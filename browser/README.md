#Browser example

A simple test to use CocktailJS in the browser via `browserify` module.

## Steps

- install dependencies
```bash
    npm install
```

### Browserify

- Create bundled js file
```bash
    npm run browserify
```
- Point your localhost to `./dist` folder
- Browse http://localhost/index.html

It will show a Hello message and a message on the console.

### RequireJS

- Bundle cocktail as requirejs

```bash
    npm run requirejs
```

- Point your localhost to `./dist` folder
- Browse http://localhost/index-require.html

##Note
**THIS IS AN EXPERIMENT** CocktailJS is **not** intended to run on the browser (yet).
