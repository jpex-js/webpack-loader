import jpex from 'jpex';

type Foo = string;
type Baz = () => string;
type Bar = number;

const jpex2 = jpex.extend();

jpex.factory<Foo>(() => 'foo');
jpex2.constant<Bar>(44);
jpex2.factory<Baz>((foo: Foo, bar: Bar) => () => `${foo}${bar}`);

const result = jpex.resolve<Baz>();

export default result;
