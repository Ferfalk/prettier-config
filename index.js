/** @type {import('prettier').Config} */
const config = {
  $schema: 'http://json.schemastore.org/prettierrc',
  experimentalTernaries: false,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: "as-needed",
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: 'always',
  endOfLine: 'auto',
};

export default config;
