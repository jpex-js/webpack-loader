import jpex from 'jpex';
import { Foo, Bar, Zeb as Baz } from 'some-lib';

jpex.factory<Foo>(() => 'foo');
jpex.constant<Bar>(44);
jpex.factory<Baz>((foo: Foo, bar: Bar) => () => `${foo}${bar}`);

const result = jpex.resolve<Baz>();

export default result;
