Webpack Guide
=============

Este es el resultado de seguir un paso a paso de una pagina de intenet de la que ya no recuerdo de donde la saque, cuando la encuentre lo anotare aqui.
(Webpack your bags)[https://blog.madewithlove.be/post/webpack-your-bags/]

## Desarrollo

```batch
set NODE_ENV=development
npm run dev
```

## Produccion

```batch
set NODE_ENV=production
webpack
```

## Tests

```batch
npm run test
```

To see test command line parameters that can be placed in `mocha-webpack.opts` run `npm run mocha-help` it is an alias of `node ./node_modules/mocha-webpack/bin/mocha-webpack --help` (sort of).

You can enable source maps appending `--require source-map-support/register` to `mocha-webpack.opts` file