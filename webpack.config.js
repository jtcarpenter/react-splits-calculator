const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');
const packageJson = require('./package.json');
const TITLE = 'Race Split Calculator';
const BUNDLE_NAME = `bundle-${packageJson.version}.js`;
const PROD = 'prod';
const DEV = 'dev';
const ENV = process.env.NODE_ENV === PROD ? PROD : DEV;
const PATHS = {
    src: path.join(__dirname, 'src/'),
    [DEV]: path.join(__dirname, 'public'),
    [PROD]: path.join(__dirname, 'dist')
};
const resolve = {
    modules: [
        path.resolve('./src'),
        path.resolve('./node_modules')
    ]
};

const swConstants = new DefinePlugin({
    NAME: JSON.stringify(packageJson.name),
    VERSION: JSON.stringify(packageJson.version),
    BUNDLE_NAME: JSON.stringify(BUNDLE_NAME)
});

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
const copyWebpackPluginInstance = new CopyWebpackPlugin([
    {
        from: path.resolve('manifest.json'),
        to: `${PATHS[ENV]}/.`
    },
    {
        from: path.resolve('icon-192x192.png'),
        to: `${PATHS[ENV]}/.`
    },
    {
        from: path.resolve('icon-512x512.png'),
        to: `${PATHS[ENV]}/.`
    }
]);

const plugins = [
    htmlWebpackPluginInstance,
    copyWebpackPluginInstance
];

// Defaults
const configDefaults = {
    entry: {
        app: `${PATHS.src}/index.js`
    },
    output: {
        filename: BUNDLE_NAME,
        path: PATHS[ENV]
    },
    resolve,
    devtool: 'eval-source-map',
    module: {
        rules: [ babelLoaderRule ]
    },
    plugins: [ ...plugins ]
};

// Config for ServiceWorker
const serviceWorkerConfig = {
    entry: [
        `${PATHS.src}/service-worker.js`
    ],
    output: {
        filename: 'service-worker.js',
        path: PATHS[ENV]
    },
    module: {
        rules: [ babelLoaderRule ]
    },
    plugins: [...plugins, swConstants]
};

// Config by env
const config = {
    [DEV]: {
        ...configDefaults,
        devServer: {
            inline: true,
            port: 3333,
            contentBase: PATHS[ENV]
        }
    },
    [PROD]: {
        ...configDefaults
    },
};

module.exports = [config[ENV], serviceWorkerConfig];