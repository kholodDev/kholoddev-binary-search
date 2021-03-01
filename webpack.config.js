const PATHS = {
    src: `${__dirname}/src`,
    lib: `${__dirname}/lib`,
}

module.exports = ({ development }) => ({
    mode: development ? 'development' : 'production',
    devtool: development ? 'inline-source-map' : false,
    resolve: {
        extensions: ['.js', '.ts'],
    },
    entry: {
        index: `${PATHS.src}/index.ts`,
    },
    output: {
        clean: true,
        path: PATHS.lib,
        filename: 'index.js',
        libraryTarget: 'umd',
        globalObject: 'typeof self === \'undefined\' ? this : self',
    },
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/,
            },
        ],
    },
})
