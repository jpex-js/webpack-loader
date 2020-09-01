import jpex from 'jpex';
import { Foo, Bar, Zeb as Baz } from './types';

jpex.factory<Foo>(() => 'foo');
jpex.constant<Bar>(44);
jpex.factory<Baz>((foo: Foo, bar: Bar) => () => `${foo}${bar}`);

export const result = jpex.resolve<Baz>();
