const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/App.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react','env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
        template: './src/index.html'
    }),
    new ExtractTextPlugin('./css/styles.css')],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: 'minimal',
        openPage: '',
        hot: true,
        open: true,
        port: 3000,
    },
    watch: true
}
