import { cp, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { Resvg } from '@resvg/resvg-js';

// Keep the website static. Copy every existing public course asset and
// generate the social preview from its version-controlled SVG source.
const root = process.cwd();
const out = resolve(root, 'dist');
await mkdir(out, { recursive: true });
for (const name of ['assets', 'lab']) {
  await cp(join(root, name), join(out, name), { recursive: true, force: true });
}
for (const name of await readdir(root)) {
  if (/\.(html|md)$/i.test(name)) await cp(join(root, name), join(out, name), { force: true });
}
const svg = await readFile(join(root, 'assets', 'og.svg'), 'utf8');
const renderer = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: { loadSystemFonts: true, defaultFontFamily: 'DejaVu Sans', sansSerifFamily: 'DejaVu Sans' },
});
const rendered = renderer.render();
const png = rendered.asPng();
if (rendered.width !== 1200 || rendered.height !== 630 ||
    png.length < 5000 || png.length > 500000 ||
    png.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') {
  throw new Error('Invalid social preview: ' + rendered.width + 'x' + rendered.height + ', ' + png.length + ' bytes');
}
await writeFile(join(out, 'assets', 'social-preview-v1.png'), png);
console.log('Social preview: ' + rendered.width + 'x' + rendered.height + ' PNG, ' + png.length + ' bytes');
console.log('Static course build complete.');
