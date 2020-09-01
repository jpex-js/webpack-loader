import test from 'ava';
import compiler from './compiler';

test('imports', async(t) => {
  const stats = await compiler('publicPath-imports.ts', { publicPath: 'mylib' });
  const output = stats.toJson().modules[1].source;

  t.snapshot(output);
});

test('locals', async(t) => {
  const stats = await compiler('publicPath-locals.ts', { publicPath: 'mylib2' });
  const output = stats.toJson().modules[1].source;

  t.snapshot(output);
});

test('node modules', async(t) => {
  const stats = await compiler('publicPath-node-modules.ts', { publicPath: 'mylib3' });
  const output = stats.toJson().modules[1].source;

  t.snapshot(output);
});
