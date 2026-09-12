// Run this from your project root: node fix-router-extensions.mjs
// Adds explicit .js extensions to every relative import in api/router.ts
// that points into server/routes/ — required for Node's native ESM
// resolver, which (unlike esbuild/Edge bundling) never infers extensions.
import { readFileSync, writeFileSync } from 'fs';

const path = 'api/router.ts';
const content = readFileSync(path, 'utf-8');

const fixed = content.replace(
  /from '(\.\.\/server\/routes\/[^']+)'/g,
  (match, importPath) => {
    if (importPath.endsWith('.js') || importPath.endsWith('.ts')) return match;
    return `from '${importPath}.js'`;
  }
);

const count = (fixed.match(/from '\.\.\/server\/routes\/[^']+\.js'/g) || []).length;
writeFileSync(path, fixed, 'utf-8');
console.log(`Done. ${count} imports now have explicit .js extensions.`);
