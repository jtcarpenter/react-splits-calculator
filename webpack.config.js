const path = require('path');
const PATHS = {
    app: path.join(__dirname, 'src/'),
    public: path.join(__dirname, 'public')
};

module.exports = {
    entry: {
        app: PATHS.app + '/index.js'
    },
    output: {
        path: PATHS.public,
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        inline: true,
        port: 3333,
        contentBase: PATHS.public
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: PATHS.app,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    babelrc: false,
                    presets: ['@babel/env', '@babel/react']
                }
            }
        ]
    }
}