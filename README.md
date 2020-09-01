# @jpex/webpack-loader
Webpack loader for jpex

## usage
```js
// webpack.config.js
{
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [
        'awesome-typescript-loader',
        {
          loader: '@jpex/webpack-loader',
          options: {},
        }
      ]
    }]
  }
}
```

## options
### identifier
```ts
string | string[]
```
The variable name of your `jpex` instance that the plugin should look for. By default it is just `jpex`.

For example in your app you may have something like:

```ts
const ioc = jpex.extend();

ioc.factory<Foo>(fooFn);
```

Then you should set the identifier property to `'ioc'` or `[ 'ioc', 'jpex' ]`

### publicPath
```ts
string | boolean
```
The default behavior when creating string literals for types is to use the file path + the type name.

For example, if you import `MyDep` from `'src/types/common'`, jpex will name it `type:/src/types/common/MyDep`.

However, sometimes this is not ideal, such as when creating a node module package. (When you import a type from a node module, jpex will just use the package name as the file path)

`publicPath` allows you to set the path prefix. For example, setting it to `myPackageName` would result in a naming scheme of `type:/myPackageName/MyDep`.

If you set `publicPath` to `true`, it will attempt to load your `package.json` and read the `name` property.
