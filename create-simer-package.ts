import * as fs from 'fs';
import * as path from 'path';

function createPackageJson(name: string) {
  const packageJsonContent = {
    name: `@simer/${name}`,
    version: '0.0.1',
    main: 'dist/index.js',
    module: 'dist/index.mjs',
    types: 'dist/index.d.ts',
    scripts: {
      build: 'tsc -p tsconfig.json',
    },
    dependencies: {},
    devDependencies: {},
  };

  const packageJsonPath = path.join('packages', name, 'package.json');
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJsonContent, null, 2));
}

function createTsConfig() {
  const tsConfigContent = {
    compilerOptions: {
      target: 'es2022',
      module: 'es2022',
      outDir: './dist',
      strict: true,
      sourceMap: true,
      declaration: true,
      esModuleInterop: true,
      moduleResolution: 'node',
      rootDir: './',
    },
    include: ['**/*.ts'],
    exclude: ['node_modules'],
  };

  const tsConfigPath = path.join('packages', name, 'tsconfig.json');
  fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfigContent, null, 2));
}

function createIndexTs() {
  const indexTsContent = 'export const test = 1;';
  const indexTsPath = path.join('packages', name, 'index.ts');
  fs.writeFileSync(indexTsPath, indexTsContent);
}

function createPackageFolder(name: string) {
  const packageFolderPath = path.join('packages', name);
  if (!fs.existsSync(packageFolderPath)) {
    fs.mkdirSync(packageFolderPath, { recursive: true });
  }
  const testsFolderPath = path.join('packages', name, 'tests');
    if (!fs.existsSync(testsFolderPath)) {
        fs.mkdirSync(testsFolderPath, { recursive: true });
    }
}

function main(name: string) {
  createPackageFolder(name);
  createPackageJson(name);
  createTsConfig();
  createIndexTs();
}

const name = process.argv[2];
if (!name) {
  console.error('Please provide a package name as an argument.');
  process.exit(1);
}
main(name);