const path = require('path');

module.exports = {
    entry: './src/script.js',
    output:{
        filename: 'script.js',
        path: path.resolve('dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
        }

        ]
    }
};