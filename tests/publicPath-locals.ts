import jpex from 'jpex';

type Foo = string;
type Baz = () => string;
type Bar = number;

jpex.factory<Foo>(() => 'foo');
jpex.constant<Bar>(44);
jpex.factory<Baz>((foo: Foo, bar: Bar) => () => `${foo}${bar}`);

const result = jpex.resolve<Baz>();

export default result;
