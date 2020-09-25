# Snapshot report for `tests/identifier.test.ts`

The actual snapshot is saved in `identifier.test.ts.snap`.

Generated by [AVA](https://avajs.dev).

## identifier

> Snapshot 1

    `import jpex from 'jpex';␊
    const jpex2 = jpex.extend();␊
    jpex.factory(() => 'foo');␊
    jpex2.constant("type:/tests/identifier/Bar", 44);␊
    jpex2.factory("type:/tests/identifier/Baz", ["type:/tests/identifier/Foo", "type:/tests/identifier/Bar"], (foo, bar) => () => `${foo}${bar}`);␊
    const result = jpex.resolve();␊
    export default result;␊
    `