import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parser: tsparser,
    },
    rules: {
      'react/jsx-uses-react': 'off', // React 17 이후 필요 없음
      'react/react-in-jsx-scope': 'off', // React 17 이후 필요 없음
      'react-hooks/rules-of-hooks': 'error', // Hook 규칙 강제
      'react-hooks/exhaustive-deps': 'warn', // 종속성 배열 검사
      '@typescript-eslint/no-unused-vars': ['warn'], // TypeScript에서 사용되지 않는 변수 경고
      'unused-imports/no-unused-imports': 'warn', // 사용되지 않는 import 경고
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ], // 사용되지 않는 변수 경고 (언더스코어(_)로 시작하는 변수는 무시)
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'unused-imports': unusedImports,
    },
  },
];
