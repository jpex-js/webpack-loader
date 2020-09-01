import test from 'ava';
import compiler from './compiler';

test('basic', async(t) => {
  const stats = await compiler('basic.ts');
  const output = stats.toJson().modules[1].source;

  t.snapshot(output);
});
