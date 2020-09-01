import test from 'ava';
import compiler from './compiler';

test('package json', async(t) => {
  const stats = await compiler('publicPath-package-json.ts', { publicPath: true });
  const output = stats.toJson().modules[1].source;

  t.snapshot(output);
});
