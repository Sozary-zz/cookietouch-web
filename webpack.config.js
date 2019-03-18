const path = require('path')
const webpack = require('webpack')

let config = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist',
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue'],
    },
    devServer: {
        noInfo: true,
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        ts: [
                            {
                                loader: 'ts-loader',
                                options: {
                                    appendTsSuffixTo: [/\.vue$/],
                                },
                            },
                        ],
                    },
                    options: {
                        esModule: true,
                    },
                },
            },
        ],
    },
}

module.exports = config