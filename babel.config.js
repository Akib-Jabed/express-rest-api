module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 'current'
            },
            modules: 'auto',
            useBuiltIns: 'usage',
            corejs: 3,
            exclude: ['transform-typeof-symbol'],
        }],
    ],
    plugins: [
        ['@babel/plugin-transform-runtime', {
            corejs: false,
            helpers: true,
            regenerator: true,
        }],
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
    ],
    ignore: [
        'node_modules',
    ],
    comments: false,
    sourceMaps: true,
};
