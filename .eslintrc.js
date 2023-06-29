/* eslint-env node */
module.exports = {
  // extend 基础扩展 默认所有规则都是禁用的, 开启recommend启用推荐的规则
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'react-app/jest',
    'plugin:prettier/recommended', // 替换prettier的扩展
  ],
  parser: '@typescript-eslint/parser', // 解析器
  plugins: ['@typescript-eslint', 'prettier'],
  root: true, // 确认这是root根目录,不会越过这个目录去lint
  rules: {
    // Note: you must disable the base rule as it can report incorrect errors 有些和eslint重合的rule需要关闭base的然后打开
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    // off 0 warn 1 error 2
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 1,
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2, // 保持和prettier一致 可能需要自定义
      },
    ],
  },
  ignorePatterns: ['src/**/*.test.ts'], // 忽略检查的文件
}
