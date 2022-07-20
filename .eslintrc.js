module.exports = {
    env: {
        jest: true,
    },
    extends: ['alloy', 'alloy/typescript'],
    plugins: [
        'import',
        'simple-import-sort',
        'sort-destructure-keys',
        'typescript-sort-keys',
        '@typescript-eslint',
        'sort-keys-fix',
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': 1,
        '@typescript-eslint/prefer-optional-chain': 2,
        '@typescript-eslint/sort-type-union-intersection-members': 2,
        'import/first': 0,
        'no-unused-vars': 0,
        'simple-import-sort/exports': 2,
        'simple-import-sort/imports': 2,
        'sort-destructure-keys/sort-destructure-keys': [
            2,
            {
                caseSensitive: true,
            },
        ],
        'sort-keys-fix/sort-keys-fix': 'warn',
        'typescript-sort-keys/interface': 2,
        'typescript-sort-keys/string-enum': 2,
    },
}
