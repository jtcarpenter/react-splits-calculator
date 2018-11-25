const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = {
    src: path.join(__dirname, 'src/'),
    dev: path.join(__dirname, 'public'),
    dist: path.join(__dirname, 'dist')
};
const TITLE = 'Race Split Calculator';
const PROD = 'prod';
const DEV = 'dev';
const ENV = process.env.NODE_ENV === PROD ? PROD : DEV;

// Rules
const babelLoaderRule = {
    test: /\.jsx?$/,
    include: PATHS.src,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
        babelrc: false,
        presets: ['@babel/env', '@babel/react']
    }
};

// Plugins
const htmlWebpackPluginInstance = new HtmlWebpackPlugin({
    title: TITLE,
    filename: 'index.html',
    template: `${PATHS.src}/index.html`,
});
const plugins = [htmlWebpackPluginInstance ];

// Defaults
const configDefaults = {
    entry: {
        app: `${PATHS.src}/index.js`
    },
    output: {
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [ babelLoaderRule ]
    },
    plugins: [ ...plugins ]
};

// Config by env
const config = {
    [DEV]: {
        ...configDefaults,
        output: {
            path: PATHS.dev
        },
        devServer: {
            inline: true,
            port: 3333,
            contentBase: PATHS.dev
        },
        plugins: [ ...plugins ]
    },
    [PROD]: {
        ...configDefaults,
        output: {
            path: PATHS.dist
        },
        plugins: [ ...plugins ]
    },
};

module.exports = config[ENV];