import test from 'ava';
import compiler from './compiler';

test('identifier', async(t) => {
  const stats = await compiler('identifier.ts', { identifier: 'jpex2' });
  const output = stats.toJson().modules[1].source;

  t.snapshot(output);
});
